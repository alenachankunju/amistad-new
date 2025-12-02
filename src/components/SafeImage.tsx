"use client";

import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  hideOnError?: boolean;
}

export default function SafeImage({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  hideOnError = true
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  // Don't render anything if image failed to load and hideOnError is true
  if (hasError && hideOnError) {
    return null;
  }

  return (
    <div className={containerClassName} style={{ display: hasError ? 'none' : 'block' }}>
      <img
        src={src}
        alt={alt}
        className={className}
        onError={handleError}
      />
    </div>
  );
}

