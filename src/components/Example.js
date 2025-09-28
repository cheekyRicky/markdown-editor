const Example = `# Welcome to the Markdown Editor

This is **bold text**, this is *italic text*.

## This is a H2 Heading

### Features
- Live preview
- Markdown syntax
- Bootstrap layout

#### We can also have lists:
- Item 1
- Item 2
  - Subitem 1
  - Subitem 2

### Code Example
\`\`\`js
console.log("Hello, world!");
\`\`\`

> Blockquotes work too!

\`\`\`javascript
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`\

We can also use an inline code snippet \`const yourThoughts = "This is awesome";\` within a sentence.

Links work as well: [Explore Markdown Syntax](https://www.markdownguide.org/basic-syntax/ "Here You can find more info on basic syntax")

And here's an image:
![Sample Image](%PUBLIC_URL%/images/bugs-bunny-img.jpg)
`;

export default Example;