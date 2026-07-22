import React from 'react';
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}
export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm">
      <div className="text-teal-500 mb-4 text-xl">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}