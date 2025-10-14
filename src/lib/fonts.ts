import localFont from "next/font/local";
import { Josefin_Sans } from "next/font/google";

export const petrona = localFont({
  src: [
    {
      path: "../fonts/Petrona-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const preospe = localFont({
  src: [
    {
      path: "../fonts/Preospe.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin-sans",
});
