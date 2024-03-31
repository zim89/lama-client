import React from 'react';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h2 className='bg-gray-300 text-xl text-red-500'>Auth Layout</h2>
      {children}
    </div>
  );
}
