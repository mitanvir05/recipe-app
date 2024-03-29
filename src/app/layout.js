import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Shared/Navbar'
import Footer from '@/components/Shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recipe App',
  description: 'Created by Habiba Ferdausi Ritu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
