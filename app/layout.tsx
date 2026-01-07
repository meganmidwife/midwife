import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import Image from 'next/image'

import { PrismicNextImage, PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { ViewTransitions } from "next-view-transitions";
import { NavBar } from "@/components/Navbar"
import { Footer } from "@/components/Footer";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const gambarino = localFont({
  src: "./gambarino.woff2",
  display: "swap",
  variable: "--font-gambarino",
});

export async function generateMetdata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Megan the mid wife",
    description:
      settings.data.meta_description ||
      "Personal services every step of your journey",
    openGraph: {
      images: isFilled.image(settings.data.fallback_og_image)
        ? [settings.data.fallback_og_image.url]
        : ["/templogo.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${raleway.variable} ${gambarino.variable} antialiased`}
      >
        <body className="bg-background text-white pt-18 pb-50">
          <NavBar settings={settings} />
          <main className="">{children}
            <div className="absolute inset-0 z-10 items-center opacity-25 flex h-screen justify-center mt-10">
              <Image src={"/basiclogoEmbosed.png"} width="300" height="300" alt="" className="size-64 fixed justify-center m-auto" />
      </div>
          </main>
          <Footer />
        </body>
        <PrismicPreview repositoryName={repositoryName} />
      </html>
    </ViewTransitions>
  );
}