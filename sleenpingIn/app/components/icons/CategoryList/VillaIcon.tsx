// src/components/icons/VillaIcon.tsx
import React from "react";

const VillaIcon: React.FC = () => {
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
      {/* Techo triangular */}
      <polygon points="12,2 4,8 20,8" />
      {/* Pared principal */}
      <rect x="6" y="8" width="12" height="10" />
      {/* Puerta */}
      <rect x="10" y="14" width="4" height="4" />
      {/* Ventana izquierda */}
      <rect x="7" y="11" width="3" height="3" />
      {/* Ventana derecha */}
      <rect x="14" y="11" width="3" height="3" />
      {/* Chimenea */}
      <rect x="17" y="5" width="1" height="3" />
      <rect x="16.5" y="4" width="2" height="1.5" />
    </svg>
  );
};

export default VillaIcon;
