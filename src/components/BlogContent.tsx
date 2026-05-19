"use client";

import React, { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";

interface BlogContentProps {
  content: string;
  className?: string;
}

/**
 * BlogContent Component
 *
 * Safely renders HTML content from a backend API.
 * - Sanitizes HTML using DOMPurify to prevent XSS.
 * - Applies Tailwind Typography (prose) styling.
 * - Handles hydration to avoid mismatch issues.
 */
const BlogContent: React.FC<BlogContentProps> = ({ content, className = "" }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState<string>("");

  useEffect(() => {
    // Sanitize the content on the client side to ensure DOMPurify works correctly
    // and to avoid hydration mismatches if the server and client results differ slightly.
    const cleanHtml = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        "h1", "h2", "h3", "h4", "h5", "h6",
        "p", "br", "ul", "ol", "li",
        "strong", "em", "u", "span",
        "blockquote", "code", "pre",
        "img", "a", "table", "thead", "tbody", "tr", "th", "td"
      ],
      ALLOWED_ATTR: ["href", "src", "alt", "title", "target", "rel", "class", "style"]
    });
    setSanitizedHtml(cleanHtml);
  }, [content]);

  // Before hydration or while sanitizing, we can render a placeholder or nothing
  // to avoid showing unsanitized content.
  if (!sanitizedHtml) {
    return <div className={`animate-pulse bg-gray-100 rounded-md h-40 ${className}`} />;
  }

  return (
    <div
      className={`prose prose-lg dark:prose-invert max-w-none 
        prose-headings:text-primary-blue dark:prose-headings:text-primary-green
        prose-a:text-primary-green hover:prose-a:underline
        prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto
        ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default BlogContent;
