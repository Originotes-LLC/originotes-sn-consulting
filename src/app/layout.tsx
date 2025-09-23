import "./globals.css";

import { bricolage, inter } from "./fonts";

import type { Metadata } from "next";
import { NavBar } from "./components/nav-bar";

export const metadata: Metadata = {
  title: "Custom ServiceNow Apps | 10+ Years of Expertise",
  description:
    "We build ServiceNow apps that actually work. 10+ years of proven experience delivering scalable, user-friendly solutions that make platforms shine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${inter.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
