import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#F8F8F4] text-[#1F2E2B] flex flex-col font-sans selection:bg-[#E2F15A] selection:text-[#1E3A2F]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
