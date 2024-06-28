import { Input as Component } from ".";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Component,
  args: {
    label: "サンプル",
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
