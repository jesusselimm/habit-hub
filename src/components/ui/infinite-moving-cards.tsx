"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[500px] max-w-full shrink-0 rounded-2xl border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] px-8 py-8 md:w-[550px] shadow-sm"
            key={item.name}
          >
            <blockquote className="text-left">
              <span className="relative z-20 text-base leading-[1.6] font-normal mb-6 block text-left" style={{ color: 'var(--color-black)' }}>
                &quot;{item.quote}&quot;
              </span>
              <div className="relative z-20 flex flex-row items-center gap-3 justify-start">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={`${item.name} profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-sm leading-[1.6] font-bold text-left" style={{ color: 'var(--color-black)' }}>
                    — {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-left" style={{ color: 'var(--color-gray)' }}>
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
