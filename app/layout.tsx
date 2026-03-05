import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import FloatingChat from "@/app/components/FloatingChat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juestimating.com"),

  title: {
    default: "Construction Estimating Services | Juestimating",
    template: "%s | Juestimating",
  },

  description:
    "Expert construction estimating and quantity takeoff services for commercial, residential, and industrial projects.",

  keywords: [
    "construction estimating",
    "quantity takeoff services",
    "cost estimation",
    "construction bidding",
    "project estimation",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Construction Estimating Services | Juestimating",
    description:
      "Accurate and professional construction cost estimation services.",
    url: "https://www.juestimating.com",
    siteName: "Juestimating",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Juestimating Construction Estimating Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction Estimating Services | Juestimating",
    description:
      "Expert construction estimating and quantity takeoff services.",
    images: ["/og"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id=GTM-56ZBKFHT'+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-56ZBKFHT');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56ZBKFHT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
          <FloatingChat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}