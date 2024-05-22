"use client";
import { ReactNode, RefObject, createRef, useEffect, useRef, useState } from "react";

export const PhotoCarousel = ({ children }: { children: ReactNode[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dotRefs, setDotRefs] = useState<RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    if (dotRefs.length === 0) {
      setDotRefs(children.map(() => createRef<HTMLDivElement>()));
    }
    
    const carousel = carouselRef.current;
    if (carousel) {
      const init = () => {
        carousel.scrollTo({
          left: carousel.offsetWidth,
          behavior: "auto"
        });
        dotRefs[0]?.current?.style.setProperty("width", "30px");
      }
      
      init();
      const handleScroll = () => {
        const childIndex = carousel.scrollLeft / carousel.offsetWidth;

        if (childIndex === 0) {
          setTimeout(() => carousel.scrollTo({
            left: children.length * carousel.offsetWidth,
            behavior: "auto"
          }), 50);
        } else if (childIndex === children.length + 1) {
          setTimeout(() =>
            carousel.scrollTo({
              left: carousel.offsetWidth,
              behavior: "auto"
          }), 50);
        }

        const dotIndex = (() => {
          if (childIndex <= 1) {
            return 0;
          } else if (childIndex >= children.length) {
            return children.length - 1;
          }

          return Math.round(childIndex) - 1;
        })()

        dotRefs.forEach((dotRef, index) => {
          if (dotRef.current && index === dotIndex) {
            dotRef.current.style.setProperty('width', '30px');
          } else {
            dotRef.current?.style.setProperty('width', '10px');
          }
        });
      }

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    };
  }, [children, children.length, dotRefs, dotRefs.length]);
  
  return (
    <div>
    <div className="snap-carousel" ref={carouselRef}>
      <div className="snap-item" key="last-child-duplicate">
        {children[children.length-1]}
      </div>
      {children.map((child, index) => (
        <div className="snap-item" key={index}>
          {child}
        </div>
      ))}
      <div className="snap-item" key="first-child-duplicate">
        {children[0]}
      </div>
      </div>
      <div className="dot-container">
        {dotRefs.map((dotRef, index) => (
          <div className="dot" key={index} ref={dotRef} />
        ))}
      </div>
    </div>
  )
};
