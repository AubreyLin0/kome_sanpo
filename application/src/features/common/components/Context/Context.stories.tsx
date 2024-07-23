import { Context as Component } from ".";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Component,
  args: {
    title: "美味しい餃子のお店あああ",
    category: "カフェ",
    openingTime: "10:00-20:00",
    phone: "000-0000-0000",
    regularHoliday: "水曜日",
    address: "東京都渋谷区1-22",
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
