import '../styles/globals.css'

export const metadata = {
    title: 'Profile',
    description: 'A simple profile display made with nextJS',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
