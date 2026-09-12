const EmployeeFilters = ({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
  role,
  setRole,
  sortBy,
  setSortBy,
  onReset,
}) => {
  return (
    <div className="employee-filters">
      {/* Search */}
      <div className="employee-search">
        <span className="employee-search-icon" aria-hidden="true">
          ⌕
        </span>

        <input
          type="text"
          aria-label="Search employees"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Department */}
      <select
        className="employee-filter-select"
        aria-label="Filter by department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">All Departments</option>
        <option value="developer">Developer</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
        <option value="hr">HR</option>
        <option value="sales">Sales</option>
      </select>

      {/* Role */}
      <select
        className="employee-filter-select"
        aria-label="Filter by role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">All Roles</option>
        <option value="employee">Employee</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
      </select>

      {/* Status */}
      <select
        className="employee-filter-select"
        aria-label="Filter by status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      {/* Sort */}
      <select
        className="employee-filter-select"
        aria-label="Sort employees"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
      </select>

      <button className="employee-reset-btn" type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default EmployeeFilters;
