import {
  DEPARTMENTS,
  ROLES,
} from "../../../../../../app/constants/employeeOptions";

const EmploymentDetails = ({ register }) => {
  return (
    <div className="grid gap-[18px]">
      {/* Department */}
      <div className="grid gap-1.5">
        <label className="text-xs font-semibold text-[var(--color-text-primary)]">
          Department <span>*</span>
        </label>

        <select
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)]/55 px-3 py-2.5 text-[13px] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
          {...register("department")}
        >
          <option value="">Select Department</option>

          {DEPARTMENTS.map((department) => (
            <option key={department.value} value={department.value}>
              {department.label}
            </option>
          ))}
        </select>
      </div>

      {/* Role */}
      <div className="grid gap-1.5">
        <label className="text-xs font-semibold text-[var(--color-text-primary)]">
          Role <span>*</span>
        </label>

        <select
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)]/55 px-3 py-2.5 text-[13px] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
          {...register("role")}
        >
          <option value="">Select Role</option>

          {ROLES.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
      </div>

      {/* Joining Date */}
      <div className="grid gap-1.5">
        <label className="text-xs font-semibold text-[var(--color-text-primary)]">
          Joining Date <span>*</span>
        </label>

        <input
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)]/55 px-3 py-2.5 text-[13px] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
          {...register("joiningDate")}
          type="date"
        />
      </div>

      {/* Status */}
      <div className="grid gap-1.5">
        <label className="text-xs font-semibold text-[var(--color-text-primary)]">
          Employment Status
        </label>

        <div className="flex min-h-[38px] items-center gap-5">
          <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[var(--color-text-secondary)]">
            <input
              className="accent-[var(--color-primary)]"
              {...register("status")}
              type="radio"
              value="active"
            />

            <span>Active</span>
          </label>

          <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[var(--color-text-secondary)]">
            <input
              className="accent-[var(--color-primary)]"
              {...register("status")}
              type="radio"
              value="inactive"
            />

            <span>Inactive</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EmploymentDetails;
