"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientDebugger() {
  const pathname = usePathname();
  useEffect(() => {
    fetch(window.location.href, { method: "HEAD" }).then((res) => {
      const path = res.headers.get("x-accessed-path");
      if (path) console.log("[CLIENT] Middleware accessed path:", path);
    });
  }, [pathname]);
  return null;
}
