import { useState } from "react";
import { useForm } from "react-hook-form";
import FormSection from "./FormSection";
import FormActions from "./FormActions";
import EmploymentDetails from "./EmploymentDetails";
import PersonalInformation from "./PersonalInformation";

const EmployeeForm = ({ onSubmit, onCancel, loading = false }) => {
  const [avatar, setAvatar] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      department: "",
      role: "",
      joiningDate: "",
      status: "active",
    },
  });

  const submitHandler = (formData) => {
    onSubmit({
      ...formData,
      avatar,
    });
  };

  return (
    <form
      className="grid max-w-[980px] gap-4"
      onSubmit={handleSubmit(submitHandler)}
    >
      {/* Personal Information */}
      <FormSection title="Personal Information" icon="♙">
        <PersonalInformation
          register={register}
          avatar={avatar}
          setAvatar={setAvatar}
          errors={errors}
        />
      </FormSection>

      {/* Employment Details */}
      <FormSection title="Employment Details" icon="▣">
        <EmploymentDetails register={register} errors={errors} />
      </FormSection>

      {/* Actions */}
      <FormActions onCancel={onCancel} loading={loading} />
    </form>
  );
};

export default EmployeeForm;
