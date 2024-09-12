import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Poppins } from 'next/font/google';
import React from 'react'

const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--poppins-font",
});

function Layout({ children }) {
    return (
        <div className={poppins.className}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout
