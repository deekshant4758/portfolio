"use client";

import { useEffect } from "react";

/**
 * oneko.js — the classic pixel cat that chases your pointer.
 * Adapted from https://github.com/adryd325/oneko.js (MIT).
 * Sprite: /oneko.gif
 */
export function PixelCat() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    const cat = document.createElement("div");
    cat.id = "oneko";
    cat.setAttribute("aria-hidden", "true");

    let x = Math.max(48, window.innerWidth - 96);
    let y = Math.max(48, window.innerHeight - 120);
    let mouseX = x;
    let mouseY = y;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleFrame = 0;

    const speed = 10;
    const sprites: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      scratchWallN: [[0, 0], [0, -1]],
      scratchWallS: [[-7, -1], [-6, -2]],
      scratchWallE: [[-2, -2], [-2, -3]],
      scratchWallW: [[-4, 0], [-4, -1]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S: [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W: [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    };

    Object.assign(cat.style, {
      width: "32px",
      height: "32px",
      position: "fixed",
      pointerEvents: "none",
      imageRendering: "pixelated",
      left: `${x - 16}px`,
      top: `${y - 16}px`,
      zIndex: "60",
      opacity: "1",
      backgroundImage: "url(/oneko.gif)",
      backgroundRepeat: "no-repeat",
      transition: "opacity 300ms ease",
      filter:
        "drop-shadow(0 1px 1px rgba(25,24,21,0.35)) drop-shadow(0 0 1px rgba(25,24,21,0.45))",
    });

    document.body.appendChild(cat);

    const setSprite = (name: string, frame: number) => {
      const set = sprites[name];
      if (!set) return;
      const sprite = set[frame % set.length];
      cat.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const resetIdle = () => {
      idleAnimation = null;
      idleFrame = 0;
    };

    const idle = () => {
      idleTime += 1;

      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        const options = ["sleeping", "scratchSelf"];
        if (x < 32) options.push("scratchWallW");
        if (y < 32) options.push("scratchWallN");
        if (x > window.innerWidth - 32) options.push("scratchWallE");
        if (y > window.innerHeight - 32) options.push("scratchWallS");
        idleAnimation = options[Math.floor(Math.random() * options.length)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleFrame / 4));
          if (idleFrame > 192) resetIdle();
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleFrame);
          if (idleFrame > 9) resetIdle();
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleFrame += 1;
    };

    const frame = () => {
      frameCount += 1;
      const diffX = x - mouseX;
      const diffY = y - mouseY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < speed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction, frameCount);

      x -= (diffX / distance) * speed;
      y -= (diffY / distance) * speed;
      x = Math.min(Math.max(16, x), window.innerWidth - 16);
      y = Math.min(Math.max(16, y), window.innerHeight - 16);

      cat.style.left = `${x - 16}px`;
      cat.style.top = `${y - 16}px`;
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const interval = window.setInterval(() => {
      if (!cat.isConnected) {
        window.clearInterval(interval);
        return;
      }
      frame();
    }, 100);

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("mousemove", onMove);
      cat.remove();
    };
  }, []);

  return null;
}
