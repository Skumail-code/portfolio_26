"use client";

import { useEffect, useState } from "react";

export function SystemClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const format = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formatted);
    };

    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-data text-xs text-data tabular-nums">
      IST {time || "—:—:—"}
    </span>
  );
}
