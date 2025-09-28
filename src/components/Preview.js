import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import '../styles/Preview.scss';

export default function Preview({ markdown }) {
  const createMarkup = () => {
    const processedMarkdown = markdown.replace(/%PUBLIC_URL%/g, process.env.PUBLIC_URL);
    const rawHtml = marked(processedMarkdown, { breaks: true });
    return { __html: DOMPurify.sanitize(rawHtml) };
  };

  return (
  <div 
  className="preview"
  id="preview" 
  dangerouslySetInnerHTML={createMarkup()} />
  );
}