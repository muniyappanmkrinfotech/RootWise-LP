import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/home/HomePage';
import ThankYouPage from './pages/thank-you/ThankYouPage';
import PrivacyPolicyPage from './pages/privacy-policy/PrivacyPolicyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="hero" element={<HomePage />} />
          <Route path="stats" element={<HomePage />} />
          <Route path="trust-stats" element={<HomePage />} />
          <Route path="results" element={<HomePage />} />
          <Route path="is-it-for-me" element={<HomePage />} />
          <Route path="candidacy" element={<HomePage />} />
          <Route path="why-rootwise" element={<HomePage />} />
          <Route path="how-it-works" element={<HomePage />} />
          <Route path="methods" element={<HomePage />} />
          <Route path="non-surgical" element={<HomePage />} />
          <Route path="doctors" element={<HomePage />} />
          <Route path="patient-stories" element={<HomePage />} />
          <Route path="reviews" element={<HomePage />} />
          <Route path="book-visit" element={<HomePage />} />
          <Route path="consultation" element={<HomePage />} />
          <Route path="faqs" element={<HomePage />} />
          <Route path="faq" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
