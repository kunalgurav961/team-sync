import { NavLink } from "react-router";

const UnAuthorized = () => {
  return (
    <main
      role="alert"
      aria-labelledby="unauthorized-title"
      className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6 py-12 text-[var(--foreground)]"
    >
      <section className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center shadow-sm">
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]"
          aria-hidden="true"
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.3 3.9 2.7 18a2 2 0 0 0 1.75 3h15.1a2 2 0 0 0 1.75-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
            />
          </svg>
        </div>
        <h1
          id="unauthorized-title"
          className="text-2xl font-semibold tracking-tight text-[var(--card-foreground)]"
        >
          Unauthorized access
        </h1>
        <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
          You do not have permission to view this page.
        </p>
        <NavLink
          to="/home"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary-foreground)] transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--card)]"
        >
          Go To Home
        </NavLink>
      </section>
    </main>
  );
};

export default UnAuthorized;
