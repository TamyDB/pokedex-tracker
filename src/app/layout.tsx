import "~/styles/globals.css";

import { Raleway } from "next/font/google";
import { type Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'

const raleway = Raleway({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Pokedex Tracker",
  description: "Track your Pokedex progress",
  icons: [
    { rel: "icon", url: "/favicon-16x.png", sizes: "16x16" },
    { rel: "icon", url: "/favicon-32x.png", sizes: "32x32" },
    { rel: "icon", url: "/favicon-96x.png", sizes: "96x96" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR" className={`${raleway.className}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
