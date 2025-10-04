import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-20 h-20 border-8 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
