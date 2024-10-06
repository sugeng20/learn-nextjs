"use client";

import { useState } from "react";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleClick}
      className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700 mb-3"
    >
      {copied ? "Link Copied" : "Share Link"}
    </button>
  );
}
