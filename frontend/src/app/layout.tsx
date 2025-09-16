import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "../app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe | Portfolio",
  description: "Full Stack Developer & Designer",
  keywords: ["portfolio", "developer", "full stack", "web development", "designer"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "John Doe | Portfolio",
    description: "Full Stack Developer & Designer",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Portfolio",
    description: "Full Stack Developer & Designer",
    creator: "@johndoe",
  },
}

// ✅ Next.js 15 requires `viewport` to be a named export typed as `Viewport`
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
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
  )
}
