import { useEffect, useRef } from "react";

const HOMEBOT_SCRIPT_SRC = "https://embed.homebotapp.com/lgw/v1/widget.js";
const HOMEBOT_WIDGET_KEY = "35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43";

export default function HomebotWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Attach Shadow DOM
    if (!shadowRef.current) {
      shadowRef.current = containerRef.current.attachShadow({ mode: "open" });
    }
    const shadow = shadowRef.current;
    // Create widget mount node
    let mount = shadow.getElementById("homebot_homeowner");
    if (!mount) {
      mount = document.createElement("div");
      mount.id = "homebot_homeowner";
      mount.style.minHeight = "480px";
      mount.style.zIndex = "1000";
      shadow.appendChild(mount);
    }
    // Inject script only if not already present
    if (!shadow.querySelector('script[src="' + HOMEBOT_SCRIPT_SRC + '"]')) {
      const script = document.createElement("script");
      script.src = HOMEBOT_SCRIPT_SRC;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.integrity = "";
      script.onload = () => {
        if (window.Homebot) {
          window.Homebot("#homebot_homeowner", HOMEBOT_WIDGET_KEY, {
            theme: "dark-mode-theme",
          });
        }
      };
      shadow.appendChild(script);
    } else {
      // If script is already loaded, re-initialize
      if (window.Homebot) {
        window.Homebot("#homebot_homeowner", HOMEBOT_WIDGET_KEY, {
          theme: "dark-mode-theme",
        });
      }
    }
    // Cleanup: none needed, widget handles its own teardown
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: 480,
        zIndex: 1000,
        borderRadius: 8,
        overflow: "hidden",
      }}
    />
  );
}
