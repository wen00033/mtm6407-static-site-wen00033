import { defaultTheme } from "vuepress";

export default {
  lang: "en-US",
  title: "Let's play a poker game",
  description: "Just playing around",
  theme: defaultTheme({
    logo: "/images/Poker SVG File.svg",
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Guide",
        link: "/guide",
      },
      {
        text: "About",
        link: "/guide/about",
      },
      {
        text: "Draw cards",
        link: "/guide/card",
      },
      {
        text: "variations rules",
        link: "/guide/variations",
      },
    ],
  }),
};
