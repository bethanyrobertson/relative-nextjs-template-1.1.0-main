import React from 'react';

import LoginSection from '@/components/sections/login-section';
// Ensure that '@/components/sections/login-section.tsx' exists and exports LoginSection as default

export const metadata = {
  title: 'Case Study Locked',
  description: 'This case study is locked. Please log in to view the content.',
};

const LoginPage = () => {
  return (
    <div className="py-14 md:py-20 lg:py-24">
      <LoginSection />
    </div>
  );
};

export default LoginPage;