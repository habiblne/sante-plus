import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component
 * Subtle fade-in and translateY reveal triggered by IntersectionObserver.
 * - Respects prefers-reduced-motion by rendering in final state immediately.
 * - Reveals once and disconnects observer (does not re-trigger on scroll back).
 * - Animates only opacity and transform to avoid Layout Shifts (CLS).
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  as: Component = 'div',
}) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window);
    }
    return false;
  });

  const domRef = useRef(null);

  useEffect(() => {
    // Already visible (e.g. reduced-motion or no IntersectionObserver)
    if (isVisible || !domRef.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(domRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <Component
      ref={domRef}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
      className={`transition-all duration-500 ease-out will-change-[opacity,transform] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </Component>
  );
}

