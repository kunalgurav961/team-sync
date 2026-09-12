
const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white border rounded-xl p-5">
      <div className="flex items-center gap-4">
        <img
          src={employee.avatar}
          alt={employee.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">{employee.name}</h3>

          <p className="text-sm text-gray-500">{employee.email}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <p>
          <span className="text-gray-500">Department:</span>{" "}
          {employee.department}
        </p>

        <p>
          <span className="text-gray-500">Role:</span> {employee.role}
        </p>

        <p>
          <span className="text-gray-500">Status:</span>{" "}
          <span className="text-green-600 font-medium">{employee.status}</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
