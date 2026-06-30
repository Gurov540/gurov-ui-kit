import React from "react";
import clsx from "clsx";

import styles from "./Switch.module.css";

import { Loading } from "../../icons/loading";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export type SwitchSize = "sm" | "md";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Размер переключателя
   */
  SwitchSize?: "sm" | "md";

  /**
   * Отображает состояние загрузки
   */
  loading?: boolean;

  /**
   * Текст справа от переключателя
   */
  children?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = "md",
      loading = false,
      disabled = false,
      children,
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const wrapperClassName = clsx(styles.wrapper, className);

    const trackClassName = clsx(
      styles.track,
      styles[size],
      isDisabled && styles.disabled,
      loading && styles.loading,
    );

    return (
      <ThemeProvider theme="light">
        <label className={wrapperClassName}>
          <input
            ref={ref}
            id={id}
            type="checkbox"
            className={styles.input}
            disabled={isDisabled}
            aria-busy={loading}
            aria-disabled={isDisabled}
            {...rest}
          />

          <span className={trackClassName}>
            {loading ? (
              <span className={styles.spinner} aria-hidden="true">
                <Loading />
              </span>
            ) : (
              <span className={styles.thumb} />
            )}
          </span>

          {children && <span className={styles.label}>{children}</span>}
        </label>
      </ThemeProvider>
    );
  },
);

Switch.displayName = "Switch";
