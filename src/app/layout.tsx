import type { Metadata } from "next";
import { jetBrains, quickSand } from "../../public/fonts/fonts";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

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
      <body className={`${jetBrains.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Toaster
            position="bottom-right"
            richColors
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
