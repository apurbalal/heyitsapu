const delayedFetch = (url: URL, requestInit?: RequestInit) => new Promise<Response>((resolve, rejects) => {
    setTimeout(() => {
      fetch(url).then(resolve, rejects);
    }, 3000);
  });

// Map is not ideal for caching because it won't be garbage collected when the key is no longer used.
// It's better to use a WeakMap, but for the sake of simplicity, we'll use a Map.
export const cache = new Map();
export const suspendedFetch = (url: URL, requestInit?: RequestInit) => {
  const key = JSON.stringify({ url, requestInit });

  if (cache.has(key)) {
    const value = cache.get(key);
    if (value instanceof Error) {
      throw value;
    }
    return value;
  }
  
  throw delayedFetch(url, requestInit).then(
    (fullFilled) => fullFilled.json(),
    (rejected) => cache.set(key, rejected)
  ).then(result => {
    cache.set(key, result)
  });
}
