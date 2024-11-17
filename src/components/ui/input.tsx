/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { useField } from "formik";
import ReactInputMask from "react-input-mask";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isFormik?: boolean;
  telMask?: boolean;
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isFormik, telMask, name, ...props }, ref) => {
    const [field, meta] = useField({ name: name });

    const [isValidBlur, setIsValidBlur] = React.useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // // Проверяем, если нет ошибок и есть значение
      if (!meta.error && e.target.value.trim().length > 0) {
        setIsValidBlur(true); // Устанавливаем состояние на true
      } else {
        setIsValidBlur(false); // Сбрасываем состояние, если есть ошибка или значение пустое
      }
    };

    const baseClass =
      "flex h-[52px] w-full rounded-[8px] border border-[#EDEDED] focus:border-[#FFAF10] border-input bg-[#F3F3F3] pl-[10px] font-[700] text-[#363636] outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50";
    const errorClass =
      isFormik && meta.touched && meta.error
        ? "border-[#D13A3A] text-[#D13A3A]"
        : "";
    const successClass = isFormik && isValidBlur ? "border-[#6CDE49]" : "";

    const combinedClassName = cn(
      baseClass,
      errorClass,
      successClass,
      className,
    );

    const commonProps = {
      ...(isFormik ? field : {}),
      ...props,
      onBlur: isFormik ? handleBlur : undefined,
    };

    if (telMask) {
      return (
        <ReactInputMask
          className={combinedClassName}
          mask="+7(999)999-99-99"
          {...commonProps}
        />
      );
    }

    return (
      <input
        type={type}
        className={combinedClassName}
        ref={ref}
        {...commonProps}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
