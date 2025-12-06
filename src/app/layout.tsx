import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://amistadgeneral.net'),
  title: {
    default: "Amistad Contracting and Services | Engineering Solutions in Doha, Qatar",
    template: "%s | Amistad Contracting and Services"
  },
  description: "Amistad Contracting and Services - Professional engineering solutions in Doha, Qatar. Expert design, fabrication, and installation services for structural steel and metal works.",
  keywords: ["Steel Fabrication Qatar", "Structural Engineering Doha", "Metal Works Contractor", "Amistad Qatar", "Construction Services Doha"],
  authors: [{ name: "Amistad Contracting and Services" }],
  creator: "Amistad Contracting and Services",
  publisher: "Amistad Contracting and Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Amistad Contracting and Services | Engineering Solutions in Doha, Qatar",
    description: "Professional engineering solutions in Doha, Qatar. Expert design, fabrication, and installation services.",
    url: 'https://amistadgeneral.net',
    siteName: 'Amistad Contracting and Services',
    images: [
      {
        url: '/og-image.jpg', // Ensure this image exists or is created
        width: 1200,
        height: 630,
        alt: 'Amistad Contracting and Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amistad Contracting and Services",
    description: "Professional engineering solutions in Doha, Qatar.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Amistad Contracting and Services",
    "image": "https://amistad.com.qa/amistad_logo.png",
    "@id": "https://amistad.com.qa",
    "url": "https://amistadgeneral.net",
    "telephone": "+974 77070533",
    "email": "sales@amistadgeneral.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industrial Area",
      "addressLocality": "Doha",
      "addressCountry": "QA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2854,
      "longitude": 51.5310
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/amistad-contracting",
      "https://www.instagram.com/amistad.qa"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://unpkg.com/lucide@latest"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-600 antialiased selection:bg-teal-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
