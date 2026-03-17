"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  solid:
    "bg-primary text-white shadow-sm hover:bg-primary-hover",
  outline:
    "bg-transparent border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900",
  ghost:
    "bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-2.5 text-sm rounded-full",
  lg: "px-8 py-3 text-base rounded-full",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "solid",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (props.href !== undefined) {
    const { href, target, rel, ...linkRest } = rest as Omit<ButtonAsLink, keyof ButtonBaseProps>;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>;
  return (
    <button
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...buttonRest}
    >
      {children}
    </button>
  );
});
