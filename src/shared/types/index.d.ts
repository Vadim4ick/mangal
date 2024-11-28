/* eslint-disable @typescript-eslint/no-explicit-any */
type ReactTagProps<T> = import("react").ComponentPropsWithRef<T>;

interface Window {
  ymaps: any;
}

declare module "react-input-mask" {
  import * as React from "react";

  export interface ReactInputMaskProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string | Array<string | RegExp>;
    maskChar?: string;
    alwaysShowMask?: boolean;
    beforeMaskedValueChange?: (
      newState: any,
      oldState: any,
      userInput: any,
      maskOptions: any,
    ) => any;
    children?: (
      inputProps: React.InputHTMLAttributes<HTMLInputElement>,
    ) => React.ReactNode;
  }

  const InputMask: React.FC<ReactInputMaskProps>;

  export default InputMask;
}
