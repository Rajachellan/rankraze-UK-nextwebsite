"use client";

import React from "react";
import BlogContent from "../../components/BlogContent";

const TestRenderPage = () => {
    const sampleBlogData = {
        title: "Secure HTML Rendering Test",
        content: `
      <h2>1. Typography & Layout</h2>
      <p>This is a paragraph showing how the <strong>prose</strong> styles from Tailwind Typography are applied. It includes <em>italics</em>, <u>underlines</u>, and <code>inline code</code>.</p>
      
      <blockquote>
        "Digital marketing is not about what you make, but about the stories you tell."
      </blockquote>

      <h2>2. Lists</h2>
      <p>Here's how unordered and ordered lists look:</p>
      <ul>
        <li>Custom Web Development</li>
        <li>Ecommerce Solutions</li>
        <li>Search Engine Optimization</li>
      </ul>
      <ol>
        <li>Analyze Requirements</li>
        <li>Design UI/UX</li>
        <li>Develop Features</li>
      </ol>

      <h2>3. Responsive Images</h2>
      <p>Images should be centered, have rounded corners, and a subtle shadow.</p>
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Web Development" title="Web Development Illustration" />

      <h2>4. Security (XSS Protection)</h2>
      <p>The following script should be stripped and not execute:</p>
      <script>alert('XSS Vulnerability!');</p>
      <p>On-click events should also be removed:</p>
      <button onclick="alert('XSS')">Click Me (Unsafe)</button>

      <h2>5. Links</h2>
      <p>Check out our <a href="https://rankraze.com" target="_blank" rel="noopener noreferrer">official website</a> for more details.</p>
    `
    };

    return (
        <main className="min-h-screen bg-gray-50 py-20 px-4 md:px-0">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-8 border-b pb-6">
                    {sampleBlogData.title}
                </h1>

                <BlogContent content={sampleBlogData.content} />
            </div>
        </main>
    );
};

export default TestRenderPage;
