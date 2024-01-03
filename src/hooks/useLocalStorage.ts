import { useEffect, useState } from 'react';

export function useLocalStorageState<State>(initialState: State, key: string) {
  const [state, setState] = useState(() => {
    // 1. Ladda från LS
    const stringState = localStorage.getItem(key);
    if (!stringState) return initialState;
    return JSON.parse(stringState) as State;
  });

  // 2. Spara till LS
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState] as const;
}
