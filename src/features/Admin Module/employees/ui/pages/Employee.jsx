import { useEmployees } from "../../hooks/useEmployees";
import StatCard from "../../../../../shared/ui/StatCard";
import EmployeeTable from "../components/EmployeesTable";
import Button from "../../../../../shared/ui/Button";
import Pagination from "../../../../../shared/ui/Pagination";
import { useState } from "react";
import EmployeeFilters from "../components/EmployeeFilters";
import { useNavigate } from "react-router";

const Employee = () => {
  let navigate = useNavigate();
  let { data, isPending } = useEmployees();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  if (isPending)
    return (
      <div className="employee-page employee-loading">Loading employees...</div>
    );

  const activeEmployees = data?.employees.filter(
    (employee) => employee.status === "active",
  );

  const inactiveEmployees = data?.employees.filter(
    (employee) => employee.status !== "active",
  );

  // Filter
  const filteredEmployees = (data?.employees ?? [])
    .filter((employee) => {
      const searchValue = search.toLowerCase();

      return (
        employee.name.toLowerCase().includes(searchValue) ||
        employee.email.toLowerCase().includes(searchValue)
      );
    })
    .filter((employee) =>
      department ? employee.department === department : true,
    )
    .filter((employee) => (status ? employee.status === status : true))
    .filter((employee) => (role ? employee.role === role : true));

  // Sort
  filteredEmployees.sort((a, b) => {
    if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "name-desc") {
      return b.name.localeCompare(a.name);
    }

    if (sortBy === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }

    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const startIndex = (page - 1) * limit;
  const paginatedEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + limit,
  );

  const resetFilters = () => {
    setPage(1);
    setSearch("");
    setDepartment("");
    setStatus("");
    setRole("");
    setSortBy("newest");
  };

  const updateFilter = (setter) => (value) => {
    setPage(1);
    setter(value);
  };

  return (
    <div className="employee-page">
      {/* Header */}
      <div className="employee-header">
        <div>
          <h1 className="employee-title">Employees</h1>

          <p className="employee-subtitle">Manage your employees</p>
        </div>

        <Button onClick={() => navigate("/home/add-employee")}>
          + Add Employee
        </Button>
      </div>

      {/* Stats */}
      <div className="employee-stats">
        <StatCard
          title="Total Employees"
          value={data?.employees.length}
          icon="👥"
        />

        <StatCard
          title="Active Employees"
          value={activeEmployees.length}
          icon="✓"
        />

        <StatCard
          title="Inactive Employees"
          value={inactiveEmployees.length}
          icon="○"
        />
      </div>

      <EmployeeFilters
        search={search}
        setSearch={updateFilter(setSearch)}
        department={department}
        setDepartment={updateFilter(setDepartment)}
        status={status}
        setStatus={updateFilter(setStatus)}
        role={role}
        setRole={updateFilter(setRole)}
        sortBy={sortBy}
        setSortBy={updateFilter(setSortBy)}
        onReset={resetFilters}
      />

      {/* Employee Table */}
      {isPending ? (
        <div className="employee-loading">Loading employees...</div>
      ) : (
        <>
          <EmployeeTable employees={paginatedEmployees} />
          <Pagination
            page={page}
            limit={limit}
            total={filteredEmployees.length}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Employee;
