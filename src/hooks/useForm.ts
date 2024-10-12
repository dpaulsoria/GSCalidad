import { useState } from "react";

type UseFormReturn<T> = {
  state: T;
  handleChange: (name: keyof T, value: string) => void;
  resetForm: () => void;
};

export const useForm = <T extends Record<string, any>>(
  initialValues: T
): UseFormReturn<T> => {
  const [state, setState] = useState<T>(initialValues);

  const handleChange = (name: keyof T, value: string) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const resetForm = () => {
    setState(initialValues);
  };

  return {
    state,
    handleChange,
    resetForm,
  };
};
