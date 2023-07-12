import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth'
import './globals.css'
import { Inter } from 'next/font/google'
import SessionProvider from './SessionProvider';
import Home from './page';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
      <SessionProvider>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}