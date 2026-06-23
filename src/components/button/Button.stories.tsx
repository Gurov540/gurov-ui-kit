import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const IconSearch = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <circle cx="6.5" cy="6.5" r="4" />
    <line x1="10" y1="10" x2="14" y2="14" />
  </svg>
);

const IconArrow = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <line x1="2" y1="8" x2="14" y2="8" />
    <polyline points="9,3 14,8 9,13" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
      description: "Визуальный стиль кнопки",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Размер кнопки",
    },
    loading: {
      control: "boolean",
      description: "Состояние загрузки",
    },
    disabled: {
      control: "boolean",
      description: "Отключённое состояние",
    },
    fullWidth: {
      control: "boolean",
      description: "Растянуть на всю ширину",
    },
    children: {
      control: "text",
      description: "Текст кнопки",
    },
  },
  args: {
    children: "Кнопка",
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Primary: Story = {
  args: { variant: "primary", children: "Primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost" },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, children: "Загрузка..." },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Недоступно" },
};

export const WithIconLeft: Story = {
  args: {
    iconLeft: <IconSearch />,
    children: "Поиск",
  },
};

export const WithIconRight: Story = {
  args: {
    iconRight: <IconArrow />,
    children: "Далее",
  },
};

export const WithBothIcons: Story = {
  args: {
    iconLeft: <IconSearch />,
    iconRight: <IconArrow />,
    children: "Найти",
  },
};

export const IconOnly: Story = {
  args: {
    iconLeft: <IconSearch />,
    children: undefined,
    "aria-label": "Поиск",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {(["primary", "secondary", "ghost"] as const).map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          {(["sm", "md", "lg"] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              {variant} / {size}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};
