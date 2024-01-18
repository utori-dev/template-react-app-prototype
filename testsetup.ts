if (typeof window.matchMedia !== 'function') {
  window.matchMedia = (query) => ({
    media: query,
    matches:
      query.includes(`prefers-color-scheme: light`) || 
      query.includes(`prefers-color-scheme: dark`),
    onchange: () => { },
    addListener: () => { },
    removeListener: () => { },
    addEventListener: () => { },
    removeEventListener: () => { },
    dispatchEvent: () => false,
  });
}