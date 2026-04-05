'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SecurityPolicyButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/security"
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        fontWeight: 600,
        color: isHovered ? 'var(--text-primary)' : 'var(--text-primary-dark)',
        textDecoration: 'none',
        border: 'none',
        borderRadius: '5px',
        padding: '9px 28px',
        backgroundColor: isHovered ? '#E8E6E1' : 'transparent',
        transition: 'background-color 0.2s ease, color 0.2s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Security Policy
    </Link>
  );
}
