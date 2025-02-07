import CommonLayout from '@/components/client-view/common-layout'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tasneem Sahat - Portfolio',
  description: 'A Portfolio Website created by Tasneem Sahat',
  icons: '/images/favicon.png', // Path to your favicon file
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  )
}
