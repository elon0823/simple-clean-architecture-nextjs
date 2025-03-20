import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button"; // 기존 Button 컴포넌트 import
import { cn } from "@/lib/utils";

export interface BasicButtonProps extends ButtonProps {
  // 추가로 필요한 props가 있다면 여기에 작성합니다.
  extraProp?: string;
}

// forwardRef를 사용해 ref 전달을 지원합니다.
export const BasicButton = React.forwardRef<HTMLButtonElement, BasicButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        // 기본 Button에 추가로 border와 text 컬러를 하늘색으로 적용합니다.
        className={cn("border border-sky-500 text-sky-500 hover:bg-sky-500/90 hover:text-white", className)}
        {...props}
      />
    );
  }
);

BasicButton.displayName = "BasicButton";
