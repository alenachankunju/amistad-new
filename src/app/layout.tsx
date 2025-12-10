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
  alternates: {
    canonical: "https://amistadgeneral.net",
  },
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
  // Enhanced structured data for better SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Amistad Contracting and Services",
    "alternateName": "Amistad Contracting",
    "image": "https://amistadgeneral.net/amistad_logo.png",
    "@id": "https://amistadgeneral.net",
    "url": "https://amistadgeneral.net",
    "logo": "https://amistadgeneral.net/amistad_logo.png",
    "telephone": "+974 77070533",
    "email": "sales@amistadgeneral.net",
    "description": "Professional engineering solutions in Doha, Qatar. Expert design, fabrication, and installation services for structural steel and metal works.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industrial Area",
      "addressLocality": "Doha",
      "addressRegion": "Doha",
      "postalCode": "",
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
    "areaServed": {
      "@type": "Country",
      "name": "Qatar"
    },
    "serviceType": [
      "Structural Steel Fabrication",
      "Metal Works",
      "Steel Installation",
      "Rigging Services",
      "Engineering Design"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/amistad-contracting",
      "https://www.instagram.com/amistad.qa"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Amistad Contracting and Services",
    "url": "https://amistadgeneral.net",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://amistadgeneral.net/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-slate-600 antialiased selection:bg-teal-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
