import type { Metadata } from "next";
import { quickSand } from "../../public/fonts/fonts";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Liam Kyle's Portfolio",
  description:
    "Portfolio of Liam Kyle, a software engineer specializing in full stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${quickSand.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
