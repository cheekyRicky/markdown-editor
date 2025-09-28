import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarkdownEditor from "./components/MarkdownEditor";
import Preview from "./components/Preview";
import Example from "./components/Example";
import "./styles/App.scss";

const App = () => {
  const [markdown, setMarkdown] = React.useState(Example);

  return (
    <div className="app">
    <Container fluid className="app-container">
      <Row>
        <Col md={5} className="editor-column">
          <div className="header">Markdown Editor</div>
          <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        </Col>

        <Col md={7} className="preview-column">
          <div className="header preview-header">Preview</div>
          <Preview id="preview" markdown={markdown} />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;