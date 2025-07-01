import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface UseWordStaggerOptions {
  repeat?: number;
  repeatDelay?: number;
  staggerDelay?: number;
  duration?: number;
  holdDuration?: number;
  ease?: string;
}

export const useWordStagger = (options: UseWordStaggerOptions = {}) => {
  const {
    repeat = -1,
    repeatDelay = 2,
    staggerDelay = 0.12,
    duration = 0.6,
    holdDuration = 3,
    ease = "back.out(1.7)",
  } = options;

  const wordsRef = useRef<HTMLSpanElement[]>([]);
  useEffect(() => {
    startWordStaggerAnimation();
  });

  const startWordStaggerAnimation = () => {
    const tl = gsap.timeline({ repeat, repeatDelay });

    tl.set(wordsRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.8,
    });

    tl.to(wordsRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      ease,
      stagger: staggerDelay,
    });

    tl.to({}, { duration: holdDuration });

    tl.to(wordsRef.current, {
      opacity: 0,
      y: -10,
      scale: 0.9,
      duration: 0.4,
      stagger: 0.03,
    });
  };

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !wordsRef.current.includes(el)) {
      wordsRef.current.push(el);
    }
  };

  const renderTextWithWordStagger = (text: string) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) => (
          <span key={index}>
            <span ref={addToRefs} className="inline-block opacity-0">
              {word}
            </span>
            {index < words.length - 1 && " "}
          </span>
        ))}
      </>
    );
  };

  return {
    renderTextWithWordStagger,
    startWordStaggerAnimation,
  };
};
