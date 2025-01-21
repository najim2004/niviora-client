import type { Metadata } from "next";
import { Roboto, Merienda } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/redux-provider";
import { Navbar } from "@/components/navbar/navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niviora",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${merienda.variable} antialiased`}>
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
