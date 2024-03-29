import { formatWithComma } from "@/lib/price-format";
import { ReactNode, useEffect, useRef, useState } from "react";
import animations from "./contact.module.css";

export default function ContactAnimator({
  children,
  percentageOffset = 0.2,
  root = null,
}: {
  children: ReactNode;
  percentageOffset?: number;
  root?: Element | null;
}) {
  const [added, setAdded] = useState(animations.initial);
  const observedElement = useRef(null);

  const intersectionCallback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        setAdded(animations.final);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      root: root,
      rootMargin: "400px",
      threshold: percentageOffset,
    });

    observer.observe(observedElement.current! as Element);

    return () => {
      observer.unobserve(observedElement.current! as Element);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={added} ref={observedElement}>
      {children}
    </div>
  );
}
