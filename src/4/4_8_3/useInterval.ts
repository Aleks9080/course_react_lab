import { useEffect, useRef } from 'react';

export function useInterval(onTick: () => void, delay: number) {
  const onTickRef = useRef(onTick);
  onTickRef.current = onTick;
  useEffect(() => {
    const id = setInterval(() => onTickRef.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}