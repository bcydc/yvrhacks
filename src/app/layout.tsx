import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/styles/tailwind.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const identity = {
  title: "yvrHacks",
  description:
    "British Columbia's largest high school hackathon – Sunday, September 29th at the Vancouver Independent School for Science and Technology. Open to all high school students in British Columbia, from beginners to experienced developers. Join us for a full day of coding, engaging workshops, delicious snacks, and loads of fun! yvrHacks is organized by the British Columbia Youth Developer Collective.",
};

export const metadata: Metadata = {
  title: identity.title,
  description: identity.description,
  openGraph: {
    ...identity,
    url: "https://bcydc.ca",
    siteName: "BCYDC",
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
