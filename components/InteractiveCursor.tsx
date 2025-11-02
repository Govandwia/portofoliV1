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

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function InteractiveCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'click' | 'text'>('default');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isPressed, setIsPressed] = useState(false);
  const [hoverText, setHoverText] = useState('');
  
  const rafRef = useRef<number>();
  const particleId = useRef(0);
  const trailId = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  // Ultra-responsive mouse tracking with RAF
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Smooth position interpolation
  const updatePosition = useCallback(() => {
    const { x: currentX, y: currentY } = targetPos.current;
    const { x: mouseX, y: mouseY } = mousePos.current;
    
    // Lerp for smooth movement
    const lerp = 0.15; // Higher = more responsive, lower = smoother
    const newX = currentX + (mouseX - currentX) * lerp;
    const newY = currentY + (mouseY - currentY) * lerp;
    
    targetPos.current = { x: newX, y: newY };
    setPosition({ x: newX, y: newY });
    
    // Add to trail less frequently for better performance
    if (Math.abs(newX - currentX) > 2 || Math.abs(newY - currentY) > 2) {
      setTrail(prev => {
        const newTrail = [...prev, { x: newX, y: newY, id: trailId.current++ }];
        return newTrail.slice(-6); // Reduced trail length for better performance
      });
    }
  }, []);

  // Enhanced hover detection with debouncing
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  
  const handleMouseOver = useCallback((e: MouseEvent) => {
    // Clear previous timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    const target = e.target as HTMLElement;
    
    // Immediate state change for better responsiveness
    if (target.matches('button, [role="button"], .cursor-pointer')) {
      setCursorState('hover');
      setHoverText('Click');
    } else if (target.matches('a')) {
      setCursorState('hover');
      setHoverText('Link');
    } else if (target.matches('input, textarea')) {
      setCursorState('text');
      setHoverText('Type');
    } else if (target.matches('h1, h2, h3, h4, h5, h6, p')) {
      setCursorState('text');
      setHoverText('');
    } else {
      // Small delay before reverting to default to prevent flickering
      hoverTimeoutRef.current = setTimeout(() => {
        setCursorState('default');
        setHoverText('');
      }, 50);
    }
  }, []);

  // Click effects with particles
  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsPressed(true);
    setCursorState('click');

    // Create particle explosion
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const speed = Math.random() * 3 + 2;
      
      newParticles.push({
        id: particleId.current++,
        x: e.clientX,
        y: e.clientY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
    setCursorState(prev => prev === 'click' ? 'default' : prev);
  }, []);

  // Main animation loop combining position updates and particle animation
  const animate = useCallback(() => {
    // Update cursor position
    updatePosition();
    
    // Animate particles
    setParticles(prev => 
      prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.15, // gravity
          life: particle.life - 0.025,
          vx: particle.vx * 0.98 // air resistance
        }))
        .filter(particle => particle.life > 0)
    );

    rafRef.current = requestAnimationFrame(animate);
  }, [updatePosition]);

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;
    
    setMounted(true);
    
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });

    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp, animate]);
  
  if (!mounted) return null;
  
  return (
    <>
      {/* Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9996] rounded-full bg-blue-400/30"
          style={{
            left: point.x - 1.5,
            top: point.y - 1.5,
            width: 3,
            height: 3,
            opacity: (index / trail.length) * 0.6,
            transform: `scale(${(index / trail.length) * 0.8 + 0.2})`,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          transform: `scale(${
            cursorState === 'click' ? 0.8 : 
            cursorState === 'hover' ? 1.5 : 
            cursorState === 'text' ? 1.2 : 1
          }) rotate(${cursorState === 'click' ? '45deg' : '0deg'})`,
          transition: 'transform 0.1s ease-out', // Only transition transform, not position
        }}
      >
        <div 
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            cursorState === 'hover' 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50' 
              : cursorState === 'text'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50'
              : cursorState === 'click'
              ? 'bg-gradient-to-r from-pink-500 to-red-500 shadow-lg shadow-pink-500/50'
              : 'bg-white/90 backdrop-blur-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-800/90'
          }`}
          style={{
            mixBlendMode: cursorState !== 'default' ? 'difference' : 'normal',
          }}
        />
      </div>
      
      {/* Cursor ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          opacity: cursorState === 'hover' || cursorState === 'text' ? 0.8 : 0.3,
          transform: `scale(${cursorState === 'hover' ? 1.3 : cursorState === 'text' ? 1.1 : 1})`,
          transition: 'opacity 0.15s ease-out, transform 0.15s ease-out', // Faster transitions
        }}
      >
        <div 
          className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
            cursorState === 'hover' 
              ? 'border-blue-400/60 animate-pulse' 
              : cursorState === 'text'
              ? 'border-green-400/60'
              : 'border-gray-300/40 dark:border-gray-600/40'
          }`}
        />
      </div>

      {/* Hover text indicator */}
      {hoverText && (
        <div
          className="fixed pointer-events-none z-[9995] px-2 py-1 text-xs font-medium rounded-md bg-black/80 text-white transition-all duration-200"
          style={{
            left: position.x + 15,
            top: position.y - 8,
            transform: 'translateY(-100%)',
          }}
        >
          {hoverText}
        </div>
      )}

      {/* Click ripple */}
      {isPressed && (
        <div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: position.x - 20,
            top: position.y - 20,
          }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-purple-400/60 animate-ping" />
        </div>
      )}

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9994] rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}60`,
            transform: `scale(${particle.life})`,
          }}
        />
      ))}

      {/* Hover glow effect */}
      {(cursorState === 'hover' || cursorState === 'text') && (
        <div
          className="fixed pointer-events-none z-[9993]"
          style={{
            left: position.x - 25,
            top: position.y - 25,
          }}
        >
          <div 
            className={`w-12 h-12 rounded-full transition-all duration-500 ${
              cursorState === 'hover' 
                ? 'bg-blue-400/10 animate-pulse' 
                : 'bg-green-400/10'
            }`} 
          />
        </div>
      )}
    </>
  );
}