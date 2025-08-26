// src/components/icons/TinyHomeIcon.tsx
import React from "react";

const TinyHomeIcon: React.FC = () => {
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
      {/* Casa semicircular (estilo tiny home moderno) */}
      <path d="M3 12 L3 20 H21 V12 L12 4 L3 12 Z" /> {/* Estructura principal */}
      {/* Puerta redondeada */}
      <path d="M10 20 V16 M10 16 H14 V20 M12 16 V20" /> {/* Puerta vertical + techo */}
      {/* Ventana circular */}
      <circle cx="14" cy="10" r="1.5" />
      {/* Ruedas (para dar idea de casa móvil) */}
      <circle cx="6" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <circle cx="6" cy="20" r="0.7" fill="currentColor" />
      <circle cx="18" cy="20" r="0.7" fill="currentColor" />
    </svg>
  );
};

export default TinyHomeIcon;
