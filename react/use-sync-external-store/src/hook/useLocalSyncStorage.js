import { useSyncExternalStore } from 'react';

const subscribe = (sbs) => {
  window.addEventListener("storage", sbs);
  return () => window.removeEventListener("storage", sbs);
};

const getSnapshot = (key) => localStorage.getItem(key);

export const useLocalSyncStorage = (lsKey, defaultValue) => {
  const state = useSyncExternalStore(
    (sbs) => subscribe(sbs),
    () => getSnapshot(lsKey),
    defaultValue
  );

  const setState = (newState) => {
    window.localStorage.setItem(
      lsKey,
      JSON.stringify(newState)
    );

    // Trigger a storage event in the same tab
    window.dispatchEvent(
      new StorageEvent("storage", { lsKey, newValue: newState })
    );
  }

  return [JSON.parse(state), setState];
}
