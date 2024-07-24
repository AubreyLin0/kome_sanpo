import { Search as Component } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { sampleData } from "@/src/data/sample";

export default {
  component: Component,
  args: {
    placeholder: "店名・ジャンルで検索",
    data: sampleData,
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
