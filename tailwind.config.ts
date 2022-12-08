import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        dominant: {
          100: "#616f85",
          200: "#4e596b",
          300: "#3a4350",
          400: "#272c35",
          500: "#13161a",
        },
        complement: {
          100: "#f9f8f3",
          200: "#f3f1e7",
          300: "#edeadc",
        },
        accentRed: "#FF614C",
        accentGreen: "#abc91a",
      },
    },
  },
};
