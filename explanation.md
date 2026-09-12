# Team Sync Project Architecture and API Integration

## 1. Project Overview

Team Sync is a React application built with Vite. It provides separate dashboards for administrators and employees. The application uses:

- React 19 for the UI.
- React Router for navigation and protected routes.
- Redux Toolkit for authentication and theme state.
- TanStack React Query for server data fetching.
- Axios for HTTP requests.
- React Hook Form for login, registration, and employee forms.
- Tailwind CSS and custom CSS variables for styling.
- Lucide React for icons.

The application entry point is `src/main.jsx`.

## 2. Runtime Bootstrap

The application is mounted in this order:

```text
main.jsx
└── QueryClientProvider
    └── Redux Provider
        └── AppRoutes
            └── RouterProvider
```

### `src/main.jsx`

`main.jsx` imports the global stylesheet, creates the Redux store, creates a React Query client, and renders `AppRoutes`.

```jsx
<QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <AppRoutes />
  </Provider>
</QueryClientProvider>
```

This means every route and feature can access:

- Redux state with `useSelector` and `useDispatch`.
- React Query with `useQuery` and related hooks.
- React Router navigation and route data.

`src/App.jsx` currently exists but is not used by the main application flow. `AppRoutes` is rendered directly from `main.jsx`.

## 3. Main Folder Architecture

```text
src/
├── main.jsx                 Application bootstrap
├── App.jsx                  Unused placeholder component
├── index.css                Tailwind import, theme variables, shared CSS
├── app/
│   ├── layouts/             Auth and dashboard page shells
│   ├── routes/              Route definitions
│   ├── protectedRoutes/     Authentication and role guards
│   ├── constants/           Navigation and option constants
│   └── store.jsx            Redux store configuration
├── config/
│   └── api.jsx              Shared Axios instance and token refresh logic
├── features/
│   ├── auth/                Login, registration, auth state, and auth hooks
│   ├── dashboard/            Dashboard page and dashboard data
│   ├── chats/               Chat page and chat feature files
│   ├── settings/            Settings page and settings feature files
│   ├── Admin Module/
│   │   ├── departments/     Admin department feature
│   │   ├── documents/       Admin document feature
│   │   ├── employees/       Employee management feature
│   │   └── task/            Admin task feature
│   └── Employee Module/
│       ├── Attendance/      Employee attendance feature
│       ├── MyTask/          Employee task feature
│       └── Profile/         Employee profile feature
└── shared/
    ├── ui/                  Reusable UI components
    ├── state/               Shared Redux slices, including theme state
    ├── api/                 Shared API space
    └── hooks/               Shared hook space
```

Most feature folders follow this pattern:

```text
feature/
├── apis/       API functions for the feature
├── hooks/      React Query or reusable feature hooks
├── state/      Feature Redux state
└── ui/
    ├── components/
    └── pages/
```

The employee feature is currently the most complete feature and includes filters, sorting, pagination, a table, row actions, and a multi-section add-employee form.

## 4. Routing Architecture

The complete route tree starts in `src/app/routes/AppRoutes.jsx`.

```text
/
├── PublicRoutes
│   └── AuthLayout
│       ├── /             LoginPage
│       └── /register     RegisterPage
│
/home
├── ProtectedRoutes
│   └── DashboradLayout
│       ├── /home                 common dashboard Home
│       ├── /home/settings        common Settings
│       ├── /home/chat            common Chat
│       ├── admin role guard
│       │   ├── /home/employee
│       │   ├── /home/add-employee
│       │   ├── /home/task
│       │   ├── /home/departments
│       │   ├── /home/chats
│       │   ├── /home/documents
│       │   └── /home/settings
│       └── employee role guard
│           ├── /home/myTask
│           ├── /home/attendance
│           └── /home/settings
│
/unauthorized
└── DashboradLayout
    └── UnAuthorized
```

### Route layers

1. `PublicRoutes` handles public pages. If an employee is already logged in, it redirects to `/home`.
2. `ProtectedRoutes` protects the dashboard. It shows a loading state while authentication is checked and redirects unauthenticated users to `/`.
3. `DashboradLayout` renders the sidebar and top navigation, then places the selected page into an `Outlet`.
4. `RoleBasedRoute` checks `employee.role`. Users who do not have the required role are redirected to `/unauthorized`.
5. Feature route files provide the actual page components.

Route files:

- `src/app/routes/AppRoutes.jsx`: combines all route groups.
- `src/app/routes/commonRoutes.jsx`: routes available to both roles.
- `src/app/routes/adminRoutes.jsx`: administrator routes.
- `src/app/routes/employeeRoutes.jsx`: employee routes.

The navigation menu is defined separately in `src/app/constants/navigations.jsx`. `AsideNav.jsx` selects the admin or employee menu using the logged-in employee role.

## 5. Authentication and Authorization Flow

Authentication state is stored in `src/features/auth/state/auth/authSlice.jsx`:

```text
auth.employee
  The current logged-in employee.

auth.isLoggedIn
  Whether a user is logged in.

auth.isLoading
  Whether an authentication request is in progress.
```

Authentication actions are in `src/features/auth/state/auth/authActions.jsx`:

- `loginEmployeeAction` sends credentials to `POST /auth/login`.
- `currentLoggedInEmployeeAction` requests the current user from `GET /auth/me`.

When `AppRoutes` mounts, it dispatches `currentLoggedInEmployeeAction()` to restore the current session.

The login form uses `useAuth.jsx`, which connects React Hook Form to the Redux login thunk.

The registration form currently has UI support, but `onRegisterSubmit` does not send a registration API request yet.

## 6. Axios API Integration

The shared Axios instance is defined in `src/config/api.jsx`.

```js
baseURL: "https://team-sync-backend-n78w.onrender.com/api";
withCredentials: true;
```

Every feature API should import and use this shared instance instead of creating another Axios client.

### Current API request flow

```text
React component or Redux thunk
        ↓
Feature API function
        ↓
axiosInstance
        ↓
Backend API
        ↓
Response data or error
```

### Authentication API calls

`src/features/auth/state/auth/authActions.jsx` uses the shared Axios instance:

```text
POST /auth/login
GET  /auth/me
```

### Employee API call

`src/features/Admin Module/employees/apis/employeeApi.jsx` contains `getAllEmployee`:

```js
getAllEmployee({ page = 1, limit = 25 })
```

It requests:

```text
GET /employee?page=<page>&limit=<limit>
```

The response currently returns `res.data?.data`.

### Token refresh behavior

The Axios response interceptor watches for HTTP 401 responses. When a request receives a 401 and has not already been retried, it calls:

```text
GET /auth/get-accessTocken
```

If token refresh succeeds, the original request is attempted again. If refresh fails, the browser is redirected to `/`.

## 7. Employee Data Integration

The employee data path currently looks like this:

```text
Employee.jsx
    ↓
useEmployees.jsx
    ↓
useQuery({ queryKey: ["employees"], queryFn: getAllEmployee })
    ↓
getAllEmployee()
    ↓
axiosInstance.get("/employee?page=...&limit=...")
    ↓
Employee API response
```

`useEmployees.jsx` uses the React Query key `['employees']` and returns:

```text
{ data, isPending }
```

`Employee.jsx` then:

1. Reads the employee array from `data.employees`.
2. Calculates active and inactive employee counts.
3. Filters by search text, department, status, and role.
4. Sorts by newest, oldest, name A-Z, or name Z-A.
5. Slices the filtered array for the current page.
6. Renders the result in `EmployeesTable`.
7. Renders `shared/ui/Pagination.jsx` below the table.

### Pagination distinction

The API function accepts `page` and `limit`, but the current React Query hook does not include page or limit in its query key or query function call. Therefore, the current page behavior is client-side pagination over the employees returned by the initial API request.

The UI pagination component receives:

```text
page
limit
 total
onPageChange
```

It calculates:

```text
start = (page - 1) * limit + 1
end   = min(page * limit, total)
totalPages = ceil(total / limit)
```

For a true server-side pagination implementation, `page` and `limit` should become part of the React Query key and should be passed to `getAllEmployee`.

## 8. Employee Feature Structure

```text
features/Admin Module/employees/
├── apis/
│   └── employeeApi.jsx
├── hooks/
│   └── useEmployees.jsx
├── state/
│   └── employeesSlice.jsx
└── ui/
    ├── components/
    │   ├── EmployeeFilters.jsx
    │   ├── EmployeesTable.jsx
    │   └── employee-form/
    │       ├── AvatarUpload.jsx
    │       ├── EmployeeForm.jsx
    │       ├── EmploymentDetails.jsx
    │       ├── FormActions.jsx
    │       ├── FormSection.jsx
    │       └── PersonalInformation.jsx
    └── pages/
        ├── Employee.jsx
        └── AddEmployee.jsx
```

### Employee list page

`Employee.jsx` is responsible for page-level state:

- Search value.
- Department filter.
- Status filter.
- Role filter.
- Sort option.
- Current page.
- Rows per page.

`EmployeeFilters.jsx` renders the controls. `EmployeesTable.jsx` renders employee rows and the three-dot row action menu. `Pagination.jsx` renders page navigation and the visible range.

The row menu currently displays:

- Update Employee.
- Mark Active or Mark Inactive.
- Delete Employee.

Those buttons currently close the menu only. Their update, status mutation, and delete API calls are not implemented yet.

### Add employee form

`AddEmployee.jsx` renders the add employee page and passes callbacks into `EmployeeForm.jsx`.

The form is built from smaller components:

```text
EmployeeForm
├── FormSection: Personal Information
│   └── PersonalInformation
│       └── AvatarUpload
├── FormSection: Employment Details
│   └── EmploymentDetails
└── FormActions
```

React Hook Form manages the form fields. Avatar selection is held in local React state and added to the submitted object.

The submit handler currently logs the employee data and navigates away. A create-employee API call is not implemented yet.

## 9. Redux Architecture

The Redux store is configured in `src/app/store.jsx`:

```js
reducer: {
  auth: authReducer,
  theme: themeReducer,
}
```

### Auth state

Auth state is managed with Redux Toolkit and async thunks.

### Theme state

`src/shared/state/themeSlice.jsx` stores the theme mode in local storage and toggles between `dark` and `light`.

`TopNav.jsx` reads the theme mode and adds or removes the `light` class on `document.body`:

```text
Dark mode: body has no .light class
Light mode: body has .light class
```

Theme values are defined in `src/index.css`:

```text
--color-primary
--color-secondary
--color-tertiary
--color-neutral
--color-background
--color-surface
--color-text-primary
--color-text-secondary
--color-border
```

Components use these variables through Tailwind arbitrary values such as:

```text
bg-[var(--color-surface)]
text-[var(--color-text-primary)]
border-[var(--color-border)]
```

There is an `employeesSlice.jsx`, but it is currently not registered in the Redux store. Employee server data is currently handled by React Query instead.

## 10. Styling Architecture

Styling uses two approaches:

1. Tailwind CSS utility classes inside JSX.
2. Shared CSS and theme variables in `src/index.css`.

The root variables provide consistent colors for both themes. The `.light` class overrides the default dark theme values. New UI should prefer the existing variables rather than hard-coded colors.

Examples:

```jsx
className = "bg-[var(--color-surface)] text-[var(--color-text-primary)]";
```

Shared UI components include:

- `AsideNav.jsx`: sidebar navigation.
- `TopNav.jsx`: search, theme toggle, notifications, and profile area.
- `NavigationTag.jsx`: navigation item.
- `Button.jsx`: shared buttons.
- `StatCard.jsx`: statistics cards.
- `Pagination.jsx`: page controls.
- `UnAuthorized.jsx`: unauthorized state.

## 11. Current Integration Gaps

These are important current-state findings from the project scan:

- `AppRoutes.jsx` imports `./AdminRoutes`, while the file currently appears as `adminRoutes.jsx`. This case difference can fail on case-sensitive operating systems.
- Child route definitions mix absolute paths such as `/home/employee` with relative paths such as `settings` and `chat`. A single route style should be used consistently.
- The admin sidebar uses `/home/chat`, while the admin route file uses `/home/chats`.
- `AddEmployee.jsx` currently navigates to `/home/employees`, but the registered employee list route is `/home/employee`.
- The add employee submit handler only logs data; it does not call a create-employee API.
- Employee row action buttons do not call update, status, or delete APIs yet.
- Registration submit logic is empty.
- There is no visible logout action in the current shared navigation.
- The dashboard and several feature pages contain placeholder or static content.
- The Axios interceptor assumes `error.response` exists. A network error without a response object can cause another error while handling the original error.
- Several API and auth files still contain debugging `console.log` statements.
- The `axos` dependency appears to be an unused misspelled dependency alongside the real `axios` package.
- The employee API accepts pagination parameters, but the hook does not currently use dynamic pagination requests.
- The employee list applies filtering and sorting after the API response, so filters only apply to the loaded employee collection.

## 12. Recommended Data Flow for Future Features

For a new feature, use this sequence:

```text
1. Create the API function in the feature's apis/ folder.
2. Use axiosInstance from src/config/api.jsx.
3. Create a React Query hook for reads and mutations when appropriate.
4. Add Redux state only for client-wide or workflow state.
5. Create UI components under the feature's ui/components/ folder.
6. Create a page under the feature's ui/pages/ folder.
7. Register the page in the appropriate route file.
8. Add the navigation item if the page belongs in the sidebar.
9. Apply existing theme variables through Tailwind classes.
10. Validate with ESLint and npm run build.
```

For server-side pagination, the recommended query shape is:

```js
useQuery({
  queryKey: ["employees", page, limit],
  queryFn: () => getAllEmployee({ page, limit }),
});
```

For a mutation such as deleting an employee, the recommended flow is:

```text
User action
    ↓
React Query mutation
    ↓
Feature API function
    ↓
Axios shared instance
    ↓
Invalidate ["employees"] query
    ↓
Employee list refreshes
```

## 13. Development Commands

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```
