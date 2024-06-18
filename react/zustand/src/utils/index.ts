import { useSyncExternalStore } from "react";

export const createStore = <T>(createState: (set: (fn: (state: T) => void) => void) => T) => {
  // listener
  const listeners = new Set<() => void>();
  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }

  // setState
  const setState = (fn: any) => {
    const nextState = typeof fn === "function" ? fn(state) : fn;
    state = { ...state, ...nextState };

    listeners.forEach((listener) => listener());
  }

  let state = createState(setState);
  const getState = () => state;

  // hook
  const useStore = (selector: (state: T) => any) => useSyncExternalStore(subscribe, () => selector(getState()));
  Object.assign(useStore, { getState, setState });

  return useStore;
}