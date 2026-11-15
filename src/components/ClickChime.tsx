"use client";

import { useEffect } from "react";

/**
 * A quiet two-note chime on every left click, synthesised with the Web Audio API.
 * No audio file, no network request.
 */
export function ClickChime() {
  useEffect(() => {
    let context: AudioContext | null = null;

    const play = () => {
      try {
        const AudioContextClass =
          window.AudioContext ??
          (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

        if (!AudioContextClass) return;
        context ??= new AudioContextClass();
        if (context.state === "suspended") void context.resume();

        const now = context.currentTime;
        const master = context.createGain();
        master.gain.setValueAtTime(0.0001, now);
        master.gain.exponentialRampToValueAtTime(0.055, now + 0.008);
        master.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
        master.connect(context.destination);

        // E6 then B6, a small glassy interval.
        const notes = [
          { frequency: 1318.51, start: 0, duration: 0.34 },
          { frequency: 1975.53, start: 0.055, duration: 0.3 },
        ];

        for (const note of notes) {
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          oscillator.type = "sine";
          oscillator.frequency.setValueAtTime(note.frequency, now + note.start);
          gain.gain.setValueAtTime(0.0001, now + note.start);
          gain.gain.exponentialRampToValueAtTime(0.6, now + note.start + 0.01);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.duration);
          oscillator.connect(gain);
          gain.connect(master);
          oscillator.start(now + note.start);
          oscillator.stop(now + note.start + note.duration + 0.02);
        }

        window.setTimeout(() => {
          master.disconnect();
        }, 700);
      } catch {
        // Audio is a nicety; never break navigation for it.
      }
    };

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      play();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
