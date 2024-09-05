import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/styles/tailwind.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const identity = {
  title: "yvrHacks – BC's Biggest Youth Hackathon",
  description:
    "Taking place on Sunday, September 29th at the Vancouver Independent School for Science and Technology, yvrHacks is a beginner-friendly hackathon open to all high school students in British Columbia. Join us for a full day of coding, engaging workshops, delicious snacks, many sponsored prizes and loads of fun!",
};

export const metadata: Metadata = {
  title: identity.title,
  description: identity.description,
  openGraph: {
    ...identity,
    url: "https://yvrhacks.bcydc.ca",
    siteName: "British Columbia Youth Developer Collective",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://yvrhacks.bcydc.ca/images/banner.png" }],
  },
  twitter: {
    ...identity,
    card: "summary_large_image",
    images: ["https://yvrhacks.bcydc.ca/images/banner.png"],
  },
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
