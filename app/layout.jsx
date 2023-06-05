import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Myron Joe NextJS App',
  description: 'Fullstack Developer',
  keywords: 'I code for fun!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='container mx-auto p-3'>
          {children}
        </main>
      </body>
    </html>
  )
}
