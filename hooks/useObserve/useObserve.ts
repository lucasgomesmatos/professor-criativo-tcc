import { RefObject, useEffect } from "react";

interface Data {
  meta: {
    total: number;
    to: number;
  };
}

interface UseIntersectionObserverProps {
  containerRef: RefObject<HTMLDivElement>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  data: Data | undefined;
}

export const useIntersectionObserver = ({
  containerRef,
  setCurrentPage,
  data,
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0) {
        setCurrentPage((oldPage) => oldPage + 1);
      }
    });

    if (containerRef.current && data && data.meta.total > data.meta.to) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [containerRef, setCurrentPage, data]);
};
