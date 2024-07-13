import { ConstantsSkeleton as Component } from "./ConstantsSkeleton";
import type { Meta, StoryObj } from "@storybook/react";
export default {
  component: Component,
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
