import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-700/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-700/20 rounded-full blur-[120px]" />
            </div>

            <Navbar />
            <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
