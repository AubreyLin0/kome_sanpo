import { Card as Component } from ".";
import type { Meta, StoryObj } from "@storybook/react";
export default {
  component: Component,
  args: {
    data: [
      {
        title: "美味しいチャーハンと唐揚げと餃子のお店",
        category: "中華料理",
        distance: "500m",
        isOpen: true,
        isLiked: false,
        openingTime: "20:00",
      },
    ],
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
