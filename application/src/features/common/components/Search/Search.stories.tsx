import { Search as Component } from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Component,
  args: {
    placeholder: "店名・ジャンルで検索",
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
