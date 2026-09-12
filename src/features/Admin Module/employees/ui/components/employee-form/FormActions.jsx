import Button from "../../../../../../shared/ui/Button";

const FormActions = ({ onCancel, loading = false }) => {
  return (
    <div className="flex justify-end gap-2.5">
      <Button type="button" variant="secondary" onClick={onCancel}>
        Cancel
      </Button>

      <Button type="submit" loading={loading}>
        + Create Employee
      </Button>
    </div>
  );
};

export default FormActions;
