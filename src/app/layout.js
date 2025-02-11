import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rock Tattoo',
  description: 'Rock Tattoo',
  metadataBase: new URL('https://your-domain.com'),
  icons: {
    icon: [
      { url: '/logo.jpg' },
      { url: '/logo.jpg', sizes: '16x16', type: 'image/jpg' },
      { url: '/logo.jpg', sizes: '32x32', type: 'image/jpg' }
    ],
    apple: [
      { url: '/logo.jpg', sizes: '180x180', type: 'image/jpg' }
    ]
  },
  openGraph: {
    title: 'Rock Tattoo',
    description: 'Rock Tattoo',
    images: [{
      url: '/logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Rock Tattoo',
    }]
  }
}

export const viewport = {
  themeColor: '#40aae3'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}