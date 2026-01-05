import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

 const appfont =  DM_Sans ({
  subsets :['latin'] 
 })

export const metadata: Metadata = {
  title: "UIUX Mockup generator APP",
  description: "Generated high quality free UIUX mobile and web  mockup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={appfont.className}
      >
        {children}
      </body>
    </html>
  );
}
