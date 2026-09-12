import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginEmployeeAction } from "../state/auth/authActions";

export const useAuth = () => {
    let dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
      formState: { errors, isSubmitting },
    watch
  } = useForm();

    const onLoginSubmit = async (data) => {
      dispatch(loginEmployeeAction(data))
  };
    const onRegisterSubmit = async (data) => {
      
    };
    
  const password = watch("password");

  return {
    register,
    handleSubmit,
    showPassword,
    setShowPassword,
    errors,
    isSubmitting,
    onLoginSubmit,
      onRegisterSubmit,
      showConfirmPassword,
      setShowConfirmPassword,
      password,
    dispatch
  };
};
