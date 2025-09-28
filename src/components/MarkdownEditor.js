import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles/MarkdownEditor.scss';

export default function MarkdownEditor ({ markdown, setMarkdown }) {
  return (
    <div className="editor-container">
        <Form.Control
            as = "textarea"
            id = "editor"
            className = "editor-textarea"
            value = {markdown}
            onChange = {(e) => setMarkdown(e.target.value)}
         /> 
    </div>
  );
};