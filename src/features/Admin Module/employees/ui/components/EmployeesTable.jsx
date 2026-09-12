import { MoreVertical, Pencil, ToggleLeft, Trash2 } from "lucide-react";
import { useState } from "react";

const EmployeeTable = ({ employees }) => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="employee-table-shell">
      <div className="employee-table-scroll">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td className="employee-empty-state" colSpan="5">
                  No employees found
                </td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr key={employee?._id}>
                  <td>
                    <div className="employee-cell">
                      <img
                        src={employee?.avatar}
                        alt={employee?.name}
                        className="employee-avatar"
                      />

                      <div>
                        <p className="employee-name">{employee?.name}</p>

                        <p className="employee-email">{employee?.email}</p>
                      </div>
                    </div>
                  </td>

                  <td>{employee?.department}</td>

                  <td>{employee?.role}</td>

                  <td>
                    <span
                      className={`employee-status ${employee?.status === "active" ? "is-active" : "is-inactive"}`}
                    >
                      {employee?.status}
                    </span>
                  </td>

                  <td
                    className="relative"
                    style={{
                      zIndex: openMenu === employee?._id ? 30 : undefined,
                    }}
                  >
                    <button
                      type="button"
                      aria-label={`Open actions for ${employee?.name}`}
                      aria-expanded={openMenu === employee?._id}
                      className="grid size-8 place-items-center rounded-md text-[var(--color-text-secondary)] transition hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-text-primary)]"
                      onClick={() =>
                        setOpenMenu(
                          openMenu === employee?._id ? null : employee?._id,
                        )
                      }
                    >
                      <MoreVertical size={18} />
                    </button>

                    {openMenu === employee?._id && (
                      <div className="absolute right-3 top-12 z-10 w-48 overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-1 shadow-xl">
                        <button
                          type="button"
                          className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-xs font-medium text-[var(--color-text-primary)] transition hover:bg-[var(--color-primary)]/15"
                          onClick={() => setOpenMenu(null)}
                        >
                          <Pencil
                            size={14}
                            className="text-[var(--color-secondary)]"
                          />
                          Update Employee
                        </button>

                        <button
                          type="button"
                          className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-xs font-medium text-[var(--color-text-primary)] transition hover:bg-[var(--color-primary)]/15"
                          onClick={() => setOpenMenu(null)}
                        >
                          <ToggleLeft
                            size={14}
                            className="text-[var(--color-secondary)]"
                          />
                          Mark{" "}
                          {employee?.status === "active"
                            ? "Inactive"
                            : "Active"}
                        </button>

                        <button
                          type="button"
                          className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-xs font-medium text-[var(--color-tertiary)] transition hover:bg-[var(--color-tertiary)]/15"
                          onClick={() => setOpenMenu(null)}
                        >
                          <Trash2 size={14} />
                          Delete Employee
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
