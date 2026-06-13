import React from "react";
import styles from "./Button.module.css";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      iconLeft,
      iconRight,
      fullWidth = false,
      disabled,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : "",
      loading ? styles.loading : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <ThemeProvider theme="light">
        <button
          ref={ref}
          className={classNames}
          disabled={isDisabled}
          aria-busy={loading}
          aria-disabled={isDisabled}
          {...rest}
        >
          {loading && <span className={styles.spinner} aria-hidden="true" />}

          {!loading && iconLeft && (
            <span className={styles.iconLeft}>{iconLeft}</span>
          )}

          {children && <span className={styles.label}>{children}</span>}

          {!loading && iconRight && (
            <span className={styles.iconRight}>{iconRight}</span>
          )}
        </button>
      </ThemeProvider>
    );
  },
);

Button.displayName = "Button";
