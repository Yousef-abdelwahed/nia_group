import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { tailwindMarge } from "../utils";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
  children: ReactNode;
  // classes?:string;
  // type?:"location"|"curves";
  // width?:"";
}

export type ButtonProps = VariantProps<typeof buttonVariants>;
const buttonVariants = cva(
  ["text-white rounded-[10px]  h-[3.13rem]  font-medium capitalize"],
  {
    variants: {
      intent: {
        primary: [
          "w-[150px]   ",
          "bg-primary",
          "border-transparent ",
          "hover:bg-orange-500",
        ],
        outline: [
          "border-solid ",
          "border-2",
          "border-primary",
          "mx-4",
          "bg-transparent",
          "hover:text-white",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

const Button = ({ children, intent, ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`${tailwindMarge(buttonVariants({ intent }))} `}
    >
      {children}
    </button>
  );
};

export default Button;
