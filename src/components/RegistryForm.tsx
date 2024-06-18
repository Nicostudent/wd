/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export const RegistryForm = ({ party }: { party: boolean }) => {
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
      className="py-24 flex justify-center items-center mb-20 flex-col text-3xl md:text-5xl "
      id="Registry"
    >
      <span className="font-Font-0 p-10">Confirma tu asistencia</span>
      <iframe
        className="flex w-11/12 md:w-2/3 lg:w-1/3 flex-col"
        data-tally-src={
          party
            ? "https://tally.so/embed/mOPVNA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            : "https://tally.so/embed/3xQ405?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        }
        loading="lazy"
        width="100%"
        height="495"
        title="Confirmar Asistencia"
      ></iframe>
    </div>
  );
};
