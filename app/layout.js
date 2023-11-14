import '../styles/globals.css'

export const metadata = {
    title: 'Profile display',
    description: 'A simple profile display made with nextJS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
