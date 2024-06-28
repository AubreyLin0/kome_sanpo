import { UserIcon as Component } from ".";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Component,
  args: {
    src: "https://github.com/shadcn.png",
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
