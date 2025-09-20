import React, { useState } from 'react';
import { getTechIcon } from '../utils/techIcons';

interface TechIconProps {
  techName: string;
  size?: number;
  className?: string;
  useOriginalColors?: boolean;
}

export default function TechIcon({
  techName,
  size = 16,
  className = '',
  useOriginalColors = true
}: TechIconProps) {
  const [imageError, setImageError] = useState(false);
  const iconData = getTechIcon(techName);

  // If no icon available or image failed to load, return null (text-only fallback)
  if (!iconData || imageError) {
    return null;
  }

  return (
    <img
      src={iconData.iconUrl}
      alt={`${iconData.name} icon`}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{
        filter: useOriginalColors ? 'none' : 'brightness(0) saturate(100%)',
        transition: 'filter 0.2s ease'
      }}
      onError={() => setImageError(true)}
      loading="lazy"
    />
  );
}