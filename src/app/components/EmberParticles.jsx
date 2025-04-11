"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const EmberParticles = ({ containerId }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const geometryRef = useRef(null);
  const materialRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const animationFrameRef = useRef(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles with reduced density
    const particleCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    const lifetimes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Start particles at the bottom with more spacing
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = -5 - Math.random() * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      // Color distribution with bright yellow embers
      const colorType = Math.random();
      if (colorType < 0.2) {
        // Bright yellow glowing embers (20%)
        colors[i * 3] = 1; // R
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2; // G (bright yellow)
        colors[i * 3 + 2] = 0.2; // B (slight orange tint)
      } else if (colorType < 0.6) {
        // Orange embers (40%)
        const intensity = 0.5 + Math.random() * 0.3;
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0;
      } else {
        // Red embers (40%)
        const intensity = 0.4 + Math.random() * 0.4;
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = Math.random() * 0.1;
        colors[i * 3 + 2] = 0;
      }

      // More varied sizes
      const sizeVariation = Math.random();
      if (sizeVariation < 0.3) {
        sizes[i] = 0.04 + Math.random() * 0.03;
      } else if (sizeVariation < 0.7) {
        sizes[i] = 0.08 + Math.random() * 0.05;
      } else {
        sizes[i] = 0.15 + Math.random() * 0.1;
      }

      // Much slower velocities with upward bias
      velocities[i * 3] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 1] = 0.008 + Math.random() * 0.008;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

      // Longer lifetime
      lifetimes[i] = Math.random() * 12 + 12;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometryRef.current = geometry;

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    materialRef.current = material;

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Handle scroll
    const handleScroll = () => {
      lastScrollYRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    let time = 0;
    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      time += 0.016;

      if (!particlesRef.current || !geometryRef.current) return;

      const positions = geometryRef.current.attributes.position.array;
      const colors = geometryRef.current.attributes.color.array;
      const scrollDelta = window.scrollY - lastScrollYRef.current;

      for (let i = 0; i < positions.length; i += 3) {
        // Update position based on velocity and scroll
        positions[i] += velocities[i] + (Math.random() - 0.5) * 0.002;
        positions[i + 1] += velocities[i + 1] + scrollDelta * 0.0002;
        positions[i + 2] += velocities[i + 2];

        // Fade out particles as they rise with different rates for different colors
        const progress = (positions[i + 1] + 5) / 10;
        if (colors[i + 1] > 0.7) {
          // Bright yellow embers fade slower
          colors[i] = Math.max(0, 1 - progress * 0.2);
          colors[i + 1] = Math.max(0, 0.8 - progress * 0.15);
          colors[i + 2] = Math.max(0, 0.2 - progress * 0.1);
        } else if (colors[i + 1] > 0.2) {
          // Orange embers
          colors[i] = Math.max(0, 1 - progress * 0.3);
          colors[i + 1] = Math.max(0, 0.2 - progress * 0.15);
          colors[i + 2] = 0;
        } else {
          // Red embers
          colors[i] = Math.max(0, 1 - progress * 0.3);
          colors[i + 1] = Math.max(0, 0.1 - progress * 0.1);
          colors[i + 2] = 0;
        }

        // Reset particles that go too high or fade out
        if (positions[i + 1] > 5 || progress > 0.95) {
          positions[i] = (Math.random() - 0.5) * 20;
          positions[i + 1] = -5 - Math.random() * 3;
          positions[i + 2] = (Math.random() - 0.5) * 4;

          // Reset color with same distribution
          const colorType = Math.random();
          if (colorType < 0.2) {
            colors[i] = 1;
            colors[i + 1] = 0.8 + Math.random() * 0.2;
            colors[i + 2] = 0.2;
          } else if (colorType < 0.6) {
            const intensity = 0.5 + Math.random() * 0.3;
            colors[i] = intensity;
            colors[i + 1] = 0.2 + Math.random() * 0.2;
            colors[i + 2] = 0;
          } else {
            const intensity = 0.4 + Math.random() * 0.4;
            colors[i] = intensity;
            colors[i + 1] = Math.random() * 0.1;
            colors[i + 2] = 0;
          }
        }
      }

      geometryRef.current.attributes.position.needsUpdate = true;
      geometryRef.current.attributes.color.needsUpdate = true;

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current !== undefined) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      if (geometryRef.current) {
        geometryRef.current.dispose();
      }

      if (materialRef.current) {
        materialRef.current.dispose();
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <>
      <div
        id={containerId}
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-10"
      ></div>
    </>
  );
};
