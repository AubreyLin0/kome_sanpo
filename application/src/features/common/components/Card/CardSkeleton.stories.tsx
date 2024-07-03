import { CardSkeleton as Component } from "./CardSkeleton";
import type { Meta, StoryObj } from "@storybook/react";
export default {
  component: Component,
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
