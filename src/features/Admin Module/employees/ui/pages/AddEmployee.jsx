import { useNavigate } from "react-router";
import EmployeeForm from "../components/employee-form/EmployeeForm";

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = async (employeeData) => {
    console.log("Employee:", employeeData);

    // API call here
    // await createEmployee(employeeData);

    navigate("/home/employees");
  };

  const handleCancel = () => {
    navigate("/home/employees");
  };

  return (
    <div className="min-h-[calc(100vh-3rem)] overflow-hidden bg-[var(--color-background)] p-4 text-[var(--color-text-primary)] sm:p-6">
      {/* Page Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)]">
            Team
            <span className="text-[var(--color-neutral)]">›</span>
            Add New Employee
          </div>

          <h1 className="m-0 text-2xl font-bold text-[var(--color-text-primary)]">
            Add Employee
          </h1>

          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Configure the new team member's workspace profile and permissions.
          </p>
        </div>
      </div>

      <EmployeeForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default AddEmployee;
