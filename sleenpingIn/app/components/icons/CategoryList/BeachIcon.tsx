// src/components/icons/BeachIcon.tsx
import React from "react";

const BeachIcon: React.FC = () => {
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
      {/* Sol en el cielo */}
      <circle cx="18" cy="6" r="3" />
      <line x1="18" y1="3" x2="18" y2="1" /> {/* rayo arriba */}
      <line x1="18" y1="9" x2="18" y2="11" /> {/* rayo abajo */}
      <line x1="21" y1="6" x2="23" y2="6" /> {/* rayo derecha */}
      <line x1="15" y1="6" x2="13" y2="6" /> {/* rayo izquierda */}
      <line x1="20.5" y1="3.5" x2="22" y2="2" /> {/* rayo diagonal arriba-derecha */}
      <line x1="15.5" y1="3.5" x2="14" y2="2" /> {/* arriba-izquierda */}
      <line x1="20.5" y1="8.5" x2="22" y2="10" /> {/* abajo-derecha */}
      <line x1="15.5" y1="8.5" x2="14" y2="10" /> {/* abajo-izquierda */}

      {/* Montículo de arena (duna o playa) */}
      <path d="M2 18 h20 v2 H2 z" fill="currentColor" /> {/* línea de arena */}
      <path d="M0 18 C4 14, 8 16, 12 18 S20 14, 24 18 L24 24 L0 24 Z" fill="currentColor" />

      {/* Olas del mar */}
      <path
        d="M2 20 Q4 19, 6 20 T10 20 T14 20 T18 20 T22 20"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
      />
      <path
        d="M3 21 Q5 20, 7 21 T11 21 T15 21 T19 21 T23 21"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
};

export default BeachIcon;
