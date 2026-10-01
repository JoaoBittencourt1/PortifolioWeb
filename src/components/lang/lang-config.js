// Shared by the server layout (inline script) and client language code — keep free of React hooks.
export const LANG_STORAGE_KEY = 'lang';
export const DEFAULT_LANG = 'pt';
export const HTML_LANG = { pt: 'pt-BR', en: 'en' };

// Runs in <head> before first paint so <html lang> already matches a saved English choice.
export const LANG_INIT_SCRIPT = `(function(){try{if(localStorage.getItem("${LANG_STORAGE_KEY}")==="en")document.documentElement.lang="${HTML_LANG.en}"}catch(e){}})()`;
