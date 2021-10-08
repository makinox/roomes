import { writable } from 'svelte/store';

function createTheme() {
  const { subscribe, update } = writable(false);

  return {
    subscribe,
    toggle: () => update((n) => !n),
  };
}

export const isDark = createTheme();
