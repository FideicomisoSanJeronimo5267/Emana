import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SmoothScrollProvider from "../core/components/smooth-scroll-provider";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Light.otf",
      weight: "300",
    },
    {
      path: "./fonts/Gilroy-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/Gilroy-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/Gilroy-SemiBold.otf",
      weight: "600",
    },
    {
      path: "./fonts/Gilroy-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/Gilroy-ExtraBold.otf",
      weight: "800",
    },
    {
      path: "./fonts/Gilroy-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-gilroy",
});

const neueMachina = localFont({
  src: [
    {
      path: "./fonts/NeueMachina-Ultralight.woff2",
      weight: "100",
    },
    {
      path: "./fonts/NeueMachina-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/NeueMachina-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/NeueMachina-Ultrabold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-neue-machina",
});

export const metadata: Metadata = {
  title: "Emana",
  description: "Emana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${gilroy.variable} ${neueMachina.variable} antialiased`}>
        <Header />
        <SmoothScrollProvider>
          {children}

        </SmoothScrollProvider>
        <Footer />
      </body>

    </html>
  );
}