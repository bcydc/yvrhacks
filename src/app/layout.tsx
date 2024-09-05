import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/styles/tailwind.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yvrHacks",
  description:
    "yvrHacks is going to be British Columbia's largest high school hackathon – Sunday, September 29th at the Vancouver Independent School for Science and Technology. Open to all high school students in British Columbia, from beginners to experienced developers. Join us for a full day of coding, engaging workshops, delicious snacks, and loads of fun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
