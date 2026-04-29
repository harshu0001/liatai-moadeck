"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, SkipForward } from "lucide-react";
import { useDeck } from "./DeckContext";
import styles from "./IntroVideo.module.css";

export default function IntroVideo() {
  const { nextSlide } = useDeck();
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    // Add a small delay for the exit animation if needed, 
    // but nextSlide will trigger page-level transition anyway
    nextSlide();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleVideoEnd = () => {
    nextSlide();
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        src="/intro/intro.mp4"
        className={styles.video}
        autoPlay
        muted={isMuted}
        onEnded={handleVideoEnd}
        playsInline
      />
      
      <div className={styles.controls}>
        <button 
          onClick={toggleMute} 
          className={styles.controlBtn}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          <span className={styles.btnText}>{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
        </button>
        
        <button 
          onClick={handleSkip} 
          className={`${styles.controlBtn} ${styles.skipBtn}`}
          aria-label="Skip Video"
        >
          <span className={styles.btnText}>SKIP VIDEO</span>
          <SkipForward size={20} />
        </button>
      </div>
    </div>
  );
}
