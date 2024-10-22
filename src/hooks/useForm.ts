import { useState } from "react";

type UseFormReturn<T> = {
  state: T;
  handleChange: (name: keyof T, value: string) => void;
  validateForm: () => boolean;
  resetForm: () => void;
  errors: Partial<Record<keyof T, string>>;
};

export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validationRules: Partial<Record<keyof T, (value: any) => boolean | string>>
): UseFormReturn<T> => {
  const [state, setState] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (name: keyof T, value: any) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    
    for (const key in validationRules) {
      const rule = validationRules[key];
      const value = state[key];
      if (rule) {
        const error = rule(value);
        if (error !== true) {
          newErrors[key] = error as string;
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setState(initialValues);
    setErrors({});
  };

  return {
    state,
    handleChange,
    validateForm,
    resetForm,
    errors,
  };
};
