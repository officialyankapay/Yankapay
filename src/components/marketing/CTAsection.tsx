import React from 'react';

export default function CTASection({ title, buttonText }: { title: string, buttonText: string }) {
  return (
    <div className="bg-teal-900 text-white p-12 rounded-2xl mt-12 flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="opacity-80 mt-2">Available 24/7, right inside your wallet.</p>
      </div>
      <button className="bg-white text-teal-900 px-6 py-3 rounded-xl font-bold">
        {buttonText}
      </button>
    </div>
  );
}