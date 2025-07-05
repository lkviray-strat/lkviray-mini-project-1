import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { jetBrains } from "../../public/fonts/fonts";
import "./globals.css";

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
