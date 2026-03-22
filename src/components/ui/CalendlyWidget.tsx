"use client";

import { useEffect } from "react";

export function CalendlyWidget() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/matt-qzpl/30min?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
