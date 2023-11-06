import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Convo', 
  description: 'Your very own chatting application',
  icons: {icon: "../favicon.png"},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
