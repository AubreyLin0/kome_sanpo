import { Button as Component } from ".";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Component,
  args: {
    children: "サンプルボタン",
    className: "",
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
