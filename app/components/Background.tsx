"use client";

import { useEffect, useRef } from 'react';


interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width/height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create stars
    const stars: Star[] = Array(200).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      opacity: Math.random(),
      speed: 0.05 + Math.random() * 0.1
    }));

    // Create shooting stars
    // const shootingStars: ShootingStar[] = Array(3).fill(0).map(() => ({
    //   x: Math.random() * canvas.width,
    //   y: Math.random() * canvas.height,
    //   size: Math.random() * 2,
    //   opacity: Math.random(),
    //   speed: 10 + Math.random() * 0.1
    // }));
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and move stars
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move star
        star.y += star.speed;
        
        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      

      // shootingStars.forEach(shootingStar => {
      //   ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
      //   ctx.beginPath();
      //   ctx.arc(shootingStar.x, shootingStar.y, shootingStar.size, 0, Math.PI * 2);
      //   ctx.moveTo(shootingStar.x, shootingStar.y)
      //   ctx.lineTo(shootingStar.x + 500, shootingStar.y + 500)
      //   ctx.fill();
        
      //   // Move star
      //   shootingStar.y += shootingStar.speed;
      //   shootingStar.x += shootingStar.speed;
        
      //   // Reset star position if it goes off screen
      //   if (shootingStar.y > canvas.height) {
      //     shootingStar.y = 0;
      //     shootingStar.x = Math.random() * canvas.width;
      //   }

      //   if (shootingStar.x > canvas.width) {
      //     shootingStar.x = 0;
      //     shootingStar.y = Math.random() * canvas.height;
      //   }
      // });

      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
}