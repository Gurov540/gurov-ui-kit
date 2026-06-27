import type { FC } from "react";
import clsx from "clsx";

import styles from "./Switch.module.css";

import { Loading } from "../../icons/loading";

export interface Props {
  uniqId?: string;
  labelFor?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: "default" | "small";
  label?: string;
  className?: string;
}

export const Switch: FC<Props> = ({
  checked,
  className,
  defaultChecked,
  disabled,
  loading,
  size = "default",
  labelFor,
  label,
  uniqId = "switch",
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && <div>{label}</div>}

      <input
        id={uniqId}
        type="checkbox"
        className={styles.input}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled || loading}
      />

      <label
        htmlFor={labelFor ?? uniqId}
        className={clsx(
          styles.label,
          styles[size],
          disabled && styles.disabled,
          loading && styles.loading,
          loading &&
            (checked ? styles.loadingChecked : styles.loadingUnchecked),
        )}
      >
        <Loading />

        <div className={styles.thumb} />
      </label>
    </div>
  );
};
