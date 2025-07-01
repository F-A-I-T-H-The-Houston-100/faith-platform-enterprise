import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'F.A.I.T.H. Platform - AI-Powered Investment Intelligence | Houston 100',
    template: '%s | F.A.I.T.H. Platform - Houston 100'
  },
  description: 'Transform your investment operations with F.A.I.T.H. Platform - the world\'s most advanced AI-powered investment intelligence system. Managing $900M+ AUM with 25%+ performance improvement.',
  keywords: [
    'investment management software',
    'AI portfolio optimization',
    'faith-based investing',
    'institutional investment platform',
    'property management software',
    'member management system',
    'investment intelligence',
    'Houston 100',
    'F.A.I.T.H. Platform',
    'enterprise investment software',
    'portfolio management AI',
    'investment group technology',
    'AUM management platform',
    'compliance monitoring software',
    'real estate investment AI'
  ],
  authors: [
    {
      name: 'Houston 100 Investment Group',
      url: 'https://houston100investmentgroup.com'
    }
  ],
  creator: 'Houston 100 Investment Group LLC',
  publisher: 'Houston 100 Investment Group LLC',
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://platform.faith-platform.com',
    siteName: 'F.A.I.T.H. Platform by Houston 100',
    title: 'F.A.I.T.H. Platform - AI-Powered Investment Intelligence',
    description: 'Transform your investment operations with the world\'s most advanced AI-powered investment intelligence system. Managing $900M+ AUM with 25%+ performance improvement.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'F.A.I.T.H. Platform - AI-Powered Investment Intelligence by Houston 100',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@houston100invest',
    creator: '@houston100invest',
    title: 'F.A.I.T.H. Platform - AI-Powered Investment Intelligence',
    description: 'Transform your investment operations with AI. Managing $900M+ AUM with 25%+ performance improvement.',
    images: ['/twitter-image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Financial Technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  other: {
    'application-name': 'F.A.I.T.H. Platform',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'F.A.I.T.H. Platform',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#000000',
    'msapplication-tap-highlight': 'no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional SEO and performance meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "F.A.I.T.H. Platform",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "description": "AI-powered investment intelligence platform for institutional investment groups",
              "url": "https://platform.faith-platform.com",
              "author": {
                "@type": "Organization",
                "name": "Houston 100 Investment Group LLC",
                "url": "https://houston100investmentgroup.com",
                "logo": "https://platform.faith-platform.com/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Houston",
                  "addressRegion": "TX",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-713-324-8424",
                  "contactType": "Enterprise Sales",
                  "email": "enterprise@houston100investmentgroup.com"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "300000",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31",
                "description": "Enterprise F.A.I.T.H. Platform licensing starting at $300K annually"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "127",
                "bestRating": "5"
              },
              "featureList": [
                "AI-Powered Portfolio Optimization",
                "Property Management Automation",
                "Member Relationship Management",
                "Compliance Monitoring",
                "Executive Mobile Dashboard",
                "Real-time Performance Analytics"
              ]
            })
          }}
        />
        
        {/* Additional Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Houston 100 Investment Group LLC",
              "alternateName": "Houston 100",
              "url": "https://houston100investmentgroup.com",
              "logo": "https://platform.faith-platform.com/logo.png",
              "description": "Faith-based investment group managing $900M+ AUM with AI-powered F.A.I.T.H. Platform",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-713-324-8424",
                  "contactType": "Enterprise Sales",
                  "email": "enterprise@houston100investmentgroup.com",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "email": "support@houston100investmentgroup.com",
                  "contactType": "Technical Support"
                }
              ],
              "sameAs": [
                "https://linkedin.com/company/houston100investmentgroup",
                "https://twitter.com/houston100invest",
                "https://youtube.com/@houston100investmentgroup"
              ],
              "foundingDate": "2023",
              "numberOfEmployees": "25-50",
              "industry": "Financial Technology",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              }
            })
          }}
        />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main id="main-content" className="pt-20">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Analytics and Performance Monitoring */}
        <Analytics />
        <SpeedInsights />
        
        {/* Enterprise Chat Widget (Optional) */}
        <div id="enterprise-chat-widget" className="fixed bottom-6 right-6 z-40">
          <button
            className="w-14 h-14 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            onClick={() => {
              // Integration with enterprise chat system
              // For now, redirect to contact
              window.location.href = 'mailto:enterprise@houston100investmentgroup.com?subject=F.A.I.T.H. Platform Enterprise Inquiry';
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
        
        {/* Performance and Security Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
              
              // Security headers enforcement
              if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
                window.location.replace('https:' + window.location.href.substring(window.location.protocol.length));
              }
              
              // Enterprise tracking
              window.faithPlatform = {
                version: '1.0.0',
                environment: '${process.env.NODE_ENV}',
                apiUrl: '${process.env.NEXT_PUBLIC_API_URL || 'https://api.faith-platform.com'}',
                trackEvent: function(event, data) {
                  // Enterprise analytics integration
                  console.log('Enterprise Event:', event, data);
                }
              };
            `
          }}
        />
      </body>
    </html>
  );
}
