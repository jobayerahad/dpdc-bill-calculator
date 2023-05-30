import { ReactNode } from 'react'
import RootStyleRegistry from './emotion'

export const metadata = {
  title: 'Electric Bill Calculator',
  description: 'A user-friendly application to calculate your electricity bills'
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </body>
  </html>
)

export default RootLayout
