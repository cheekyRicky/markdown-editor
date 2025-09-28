import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import '../styles/Preview.scss';

export default function Preview({ markdown }) {
  const createMarkup = () => {
    const rawHtml = marked(markdown, { breaks: true });
    return { __html: DOMPurify.sanitize(rawHtml) };
  };

  return <div className="preview" dangerouslySetInnerHTML={createMarkup()} />;
}