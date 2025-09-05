'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

export function InteractiveCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'click'>('default');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isPressed, setIsPressed] = useState(false);
  
  const rafRef = useRef<number>();
  const particleId = useRef(0);

  // Ultra-responsive mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Hover detection for interactive elements
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target) return;

    const isInteractive = target.matches(
      'button, a, input, textarea, select, [role="button"], .cursor-pointer'
    );
    setCursorState(isInteractive ? 'hover' : 'default');
  }, []);

  // Click effects with particle explosion
  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsPressed(true);
    setCursorState('click');

    // Create particles
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      
      newParticles.push({
        id: particleId.current++,
        x: e.clientX,
        y: e.clientY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
    setCursorState('default');
  }, []);

  // Animate particles
  const animateParticles = useCallback(() => {
    setParticles(prev => 
      prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.1, // gravity
          life: particle.life - 0.02,
          vx: particle.vx * 0.99
        }))
        .filter(particle => particle.life > 0)
    );

    rafRef.current = requestAnimationFrame(animateParticles);
  }, []);

  // Setup event listeners
  useEffect(() => {
    const options = { passive: true };
    
    document.addEventListener('mousemove', handleMouseMove, options);
    document.addEventListener('mouseover', handleMouseOver, options);
    document.addEventListener('mousedown', handleMouseDown, options);
    document.addEventListener('mouseup', handleMouseUp, options);

    rafRef.current = requestAnimationFrame(animateParticles);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp, animateParticles]);

  // Hide on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          transform: `scale(${cursorState === 'click' ? 0.8 : cursorState === 'hover' ? 1.3 : 1})`,
        }}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-150 ${
            cursorState === 'hover'
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30'
              : cursorState === 'click'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/40'
              : 'bg-white/90 backdrop-blur-sm border border-white/30'
          }`}
          style={{
            mixBlendMode: cursorState !== 'default' ? 'difference' : 'normal',
          }}
        />
      </div>

      {/* Cursor Trail */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          opacity: cursorState === 'hover' ? 0.6 : 0.3,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
            cursorState === 'hover'
              ? 'border-blue-400/50 scale-125'
              : 'border-white/20 scale-100'
          }`}
        />
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9997] rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
          }}
        />
      ))}

      {/* Hover Ring */}
      {cursorState === 'hover' && (
        <div
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: position.x - 16,
            top: position.y - 16,
          }}
        >
          <div className="w-8 h-8 rounded-full border border-blue-400/40 animate-ping" />
        </div>
      )}

      {/* Click Ripple */}
      {isPressed && (
        <div
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: position.x - 20,
            top: position.y - 20,
          }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-purple-400/60 animate-ping" />
        </div>
      )}
    </>
  );
}