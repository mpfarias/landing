export const themeStorageKey = "theme";
export const themeValues = ["light", "dark", "system"] as const;
export type ThemeValue = (typeof themeValues)[number];

/** Runs before paint so the first frame already matches the stored theme. */
export const themeInitScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem(${JSON.stringify(themeStorageKey)})||"system";var r=t==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t;d.classList.remove("light","dark");d.classList.add(r);d.style.colorScheme=r;}catch(e){}})();`;
