import "./globals.css";

import { bricolage, inter } from "./fonts";

import type { Metadata } from "next";
import { NavBar } from "./components/nav-bar";

export const metadata: Metadata = {
  title: "Originotes ServiceNow Consulting",
  description: "Consulting services for Custom ServiceNow implementations",
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
