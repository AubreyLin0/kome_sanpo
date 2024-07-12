import { ResponsiveCard as Component } from "./ResponsiveCard";
import type { Meta, StoryObj } from "@storybook/react";
export default {
  component: Component,
  args: {
    data: [
      {
        id: "test-restaurant-uuid-1",
        name: "アイフル食堂",
        address: "京都市下京区烏丸通五条上る高砂町381-1",
        phoneNumber: "0753615566",
        openTime: "11:00",
        closeTime: "21:00",
        genre: "和食",
        longitude: 34.9968489,
        latitude: 135.7593823,
        topImageURL: "@/public/sample_soumen.jpeg",
      },
    ],
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
