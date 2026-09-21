// Shared by the server layout (inline script) and client theme code — keep free of React hooks.
export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME = 'dark';

// Runs in <head> before first paint so a saved light theme never flashes dark.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
