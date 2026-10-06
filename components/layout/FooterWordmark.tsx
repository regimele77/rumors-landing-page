"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function FooterWordmark() {
  const frameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["18%", "0%"]);

  useIsomorphicLayoutEffect(() => {
    const frame = frameRef.current;
    const text = textRef.current;
    if (!frame || !text) return;

    const fit = () => {
      const available = frame.clientWidth;
      if (!available) return;
      frame.style.fontSize = "100px";
      text.style.marginLeft = "0px";
      const measured = text.getBoundingClientRect().width;
      if (!measured) return;

      const context = document.createElement("canvas").getContext("2d");
      let inkWidth = measured;
      let shift = 0;
      if (context) {
        const style = getComputedStyle(text);
        context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        context.letterSpacing = style.letterSpacing;
        const metrics = context.measureText(text.textContent ?? "");
        const ink = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
        if (ink > 0) {
          inkWidth = ink;
          shift = metrics.actualBoundingBoxLeft;
        }
      }

      const scale = available / inkWidth;
      frame.style.fontSize = `${100 * scale}px`;
      text.style.marginLeft = `${shift * scale}px`;
      const visualHeight = text.getBoundingClientRect().height;
      const frameHeight = Math.ceil(visualHeight) + 8;
      const slack = frameHeight - visualHeight;
      const overlap = slack / 2 + visualHeight * 0.3;
      frame.style.height = `${frameHeight}px`;
      frame.closest("footer")?.style.setProperty("--wordmark-overlap", `${overlap}px`);
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      aria-hidden="true"
      className="wordmark-frame relative z-0 flex items-center"
    >
      <motion.p
        style={reduce ? { y: 0 } : { y }}
        className="m-0 flex w-max items-center whitespace-nowrap"
      >
        <span
          ref={textRef}
          className="wordmark-stretch font-extrabold tracking-[-0.05em] text-white"
        >
          Rumors
        </span>
      </motion.p>
    </div>
  );
}
