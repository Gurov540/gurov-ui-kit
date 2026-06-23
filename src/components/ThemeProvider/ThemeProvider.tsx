import React from "react";
import { colors } from "../../variables/colors";
import sizes from "../../variables/size";
import { ThemeContext, type Theme } from "./theme.context";

interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = ({
  theme = "light",
  children,
}: ThemeProviderProps) => {
  const c = colors.brand.primary;
  const n = colors.neutral;

  const cssVars = {
    "--color-primary": c.colorPrimary[theme],
    "--color-primary-hover": c.colorPrimaryHover[theme],
    "--color-primary-active": c.colorPrimaryActive[theme],
    "--color-primary-bg": c.colorPrimaryBg[theme],
    "--color-primary-bg-hover": c.colorPrimaryBgHover[theme],
    "--color-primary-text": c.colorPrimaryText[theme],
    "--color-primary-text-on-light": c.colorPrimaryTextOnLight[theme],

    "--color-text": n.text.colorText[theme],

    "--color-bg-ghost-hover": n.backgroundNeutral.colorBgGhostHover[theme],

    "--color-bg-ghost-active": n.backgroundNeutral.colorBgGhostActive[theme],

    "--color-border": n.border.colorBorder[theme],

    "--color-text-disabled": n.text.colorTextDisabled[theme],

    "--size-xs": `${sizes.size.xs}px`,
    "--size-sm": `${sizes.size.sm}px`,
    "--size-base": `${sizes.size.size}px`,
    "--size-md": `${sizes.size.md}px`,

    "--height-sm": `${sizes.height.sm}px`,
    "--height-base": `${sizes.height.height}px`,
    "--height-lg": `${sizes.height.lg}px`,

    "--font-size-sm": `${sizes.fontSize.sm}px`,
    "--font-size-md": `${sizes.fontSize.md}px`,
    "--font-size-lg": `${sizes.fontSize.lg}px`,

    "--radius-sm": `${sizes.borderRadius.sm}px`,
    "--radius-md": `${sizes.borderRadius.md}px`,
    "--radius-lg": `${sizes.borderRadius.lg}px`,
    "--radius-round": `${sizes.borderRadius.round}px`,

    "--border-width-md": `${sizes.borderWidth.md}px`,
  } as React.CSSProperties;

  return (
    <ThemeContext.Provider value={theme}>
      <div style={cssVars}>{children}</div>
    </ThemeContext.Provider>
  );
};
