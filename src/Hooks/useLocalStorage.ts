import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item) as T);
      }
    } catch {
      setStoredValue(initialValue);
    } finally {
      setIsHydrated(true);
    }
  }, [initialValue, key]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
    }
  }, [isHydrated, key, storedValue]);

  return [storedValue, setStoredValue];
}
