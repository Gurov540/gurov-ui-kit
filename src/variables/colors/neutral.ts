const backgroundBase = {
  colorBgMask: {
    light: "rgba(0,0,0,0.45)",
    dark: "rgba(0,0,0,0.45)",
  },
};

const backgroundNeutral = {
  colorBgGhost: {
    light: "transparent",
    dark: "transparent",
  },
  colorBgGhostHover: {
    light: "rgba(0,0,0,0.06)",
    dark: "rgba(255,255,255,0.08)",
  },
  colorBgGhostActive: {
    light: "rgba(0,0,0,0.10)",
    dark: "rgba(255,255,255,0.12)",
  },
};

const text = {
  colorText: {
    light: "#1f2937",
    dark: "#f3f4f6",
  },
  colorTextSecondary: {
    light: "#6b7280",
    dark: "#9ca3af",
  },
  colorTextDisabled: {
    light: "rgba(0,0,0,0.25)",
    dark: "rgba(255,255,255,0.25)",
  },
};

const border = {
  colorBorder: {
    light: "#d1d5db",
    dark: "#374151",
  },
  colorBorderDisabled: {
    light: "rgba(0,0,0,0.15)",
    dark: "rgba(255,255,255,0.15)",
  },
};

export default {
  backgroundBase,
  backgroundNeutral,
  text,
  border,
};
