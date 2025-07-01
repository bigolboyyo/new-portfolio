"use client";

import React, { useEffect, useState } from "react";

export default function ProjectSlug() {
  const [titleName, setTitleName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const pathname = window.location.pathname;
    const slug = pathname.split("/").pop() ?? undefined;

    if (slug) {
      const title = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      setTitleName(title);
    }
  }, []);

  return <div>{titleName || "Project Slug"}</div>;
}
