/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export const RegistryForm = ({party}:{party:boolean}) => {
  useEffect(() => {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";

    const load = () => {
      // Load Tally embeds
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
        return;
      }

      // Fallback if window.Tally is not available
      document
        .querySelectorAll("iframe[data-tally-src]:not([src])")
        .forEach((iframeEl) => {
          (iframeEl as HTMLIFrameElement).src =
            iframeEl.getAttribute("data-tally-src") || "";
        });
    };

    // If Tally is already loaded, load the embeds
    if (typeof (window as any).Tally !== "undefined") {
      load();
      return;
    }

    // If the Tally widget script is not loaded yet, load it
    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement("script");
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="h-screen flex justify-center items-center mb-20 "
      id="Registry"
    >
      <iframe
        className="flex w-11/12 md:w-1/3 flex-col"
        data-tally-src={
          party
            ?"https://tally.so/embed/mOPVNA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            : "https://tally.so/embed/3xQ405?alignLeft=1&transparentBackground=1&dynamicHeight=1&title=Confirmar%20Asistencia"
            
        }
        loading="lazy"
        width="100%"
        height="495"
        title="Confirmar Asistencia"
      ></iframe>
    </div>
  );
};
