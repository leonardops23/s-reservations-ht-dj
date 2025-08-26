// src/components/icons/CabinIcon.tsx
import React from "react";

const CabinIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Techo triangular grueso (estilo cabaña de troncos) */}
      <polygon points="12,4 5,10 19,10" />
      {/* Pared de troncos (líneas horizontales) */}
      <rect x="7" y="10" width="10" height="8" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="7" y1="14" x2="17" y2="14" />
      <line x1="7" y1="16" x2="17" y2="16" />
      <line x1="7" y1="18" x2="17" y2="18" />
      {/* Puerta pequeña */}
      <rect x="10.5" y="16" width="3" height="4" />
    </svg>
  );
};

export default CabinIcon;
