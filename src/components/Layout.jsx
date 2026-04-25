import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-ebony selection:bg-ochre/30 selection:text-ochre">
            {/* Film Grain Texture */}
            <div className="noise-overlay" />
            
            {/* Background Decorative Shapes (Minimalist) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-[1px] h-[80%] bg-white/5" />
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-ochre/5 rounded-full blur-[150px]" />
            </div>

            <Navbar />
            <main className="relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
