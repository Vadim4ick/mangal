/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { useField } from "formik";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isFormik?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isFormik, ...props }, ref) => {
    const [field, meta] =
      isFormik && props.name ? useField({ name: props.name }) : [{}, {}];

    const [isValidBlur, setIsValidBlur] = React.useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      // // Проверяем, если нет ошибок и есть значение
      if (!meta.error && e.target.value.trim().length > 0) {
        setIsValidBlur(true); // Устанавливаем состояние на true
      } else {
        setIsValidBlur(false); // Сбрасываем состояние, если есть ошибка или значение пустое
      }
    };

    return (
      <textarea
        className={cn(
          "flex min-h-[104px] w-full resize-none rounded-[8px] border border-[#EDEDED] border-input bg-[#F3F3F3] px-3 py-[15px] pl-[10px] font-[700] text-[#363636] outline-none transition-colors focus:border-[#FFAF10] disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-[#D13A3A] text-[#D13A3A]":
              isFormik && meta.touched && meta.error,
          },
          { "border-[#6CDE49]": isValidBlur }, // Успешный blur
          { ...(isFormik ? field : {}) },
          className,
        )}
        ref={ref}
        {...field}
        {...props}
        onBlur={handleBlur}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
