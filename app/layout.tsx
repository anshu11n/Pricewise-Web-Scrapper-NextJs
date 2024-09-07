
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

import Image from 'next/image'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: 'Pricewise',
  description: 'Track product prices effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>


          <header className="w-full">
          <nav className="nav">
            <Link href="/" className="flex items-center gap-1">
              <Image 
                src="/assets/icons/logo.svg"
                width={27}
                height={27}
                alt="logo"
              />

              <p className="nav-logo">
                Price<span className='text-primary'>Wise</span>
              </p>
            </Link>

            <div className="flex items-center gap-5">
              <Image 
                src = '/assets/icons/search.svg' alt = 'search'
                width={28}
                height={28}
                className="object-contain"
              />
                <SignedOut> 
                <SignInButton>
                  <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all">
                    Sign In
                  </button>
                </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              
            </div>
          </nav>
        </header>




        <main className="max-w-10xl mx-auto">
          {/* <Navbar /> */}
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  )
}
