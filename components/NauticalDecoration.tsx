
import React from 'react';

export const CompassRose: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0 L55 45 L50 50 L45 45 Z" fill="currentColor" />
    <path d="M50 100 L45 55 L50 50 L55 55 Z" fill="currentColor" />
    <path d="M100 50 L55 55 L50 50 L55 45 Z" fill="currentColor" />
    <path d="M0 50 L45 45 L50 50 L45 55 Z" fill="currentColor" />
    <path d="M50 10 L53 45 L50 50 L47 45 Z" fill="white" opacity="0.2" />
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
    <circle cx="50" cy="50" r="4" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export const Anchor: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v14" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    <path d="M12 18l-3-3m3 3l3-3" />
  </svg>
);

export const ShipWheel: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" strokeWidth="2" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 50 50)`}>
        <line x1="50" y1="10" x2="50" y2="42" strokeWidth="3" />
        <path d="M47 5 L53 5 L52 12 L48 12 Z" fill="currentColor" />
      </g>
    ))}
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
  </svg>
);
