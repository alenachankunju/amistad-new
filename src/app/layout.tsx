import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amistad Engineering Services | Engineering Solutions in Doha, Qatar",
  description: "Amistad Engineering Services - Professional engineering solutions in Doha, Qatar. Expert design, fabrication, and installation services.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://unpkg.com/lucide@latest"></script>
      </head>
      <body className="bg-white text-slate-600 antialiased selection:bg-teal-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
