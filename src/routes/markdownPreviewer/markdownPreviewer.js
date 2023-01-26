import "./markdownPreviewer.css";
import React, { useState } from "react";
import { marked } from "marked";

const renderText = (text) => {
  const __html = marked(text, { sanitize: true });
  return { __html };
};

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
};

const Editor = ({ state, setState }) => {
  return (
    <div className="editor">
      <Header title="Editor" />
      <textarea
        rows={15}
        cols={60}
        value={state}
        onChange={(event) => setState(event.target.value)}
      ></textarea>
    </div>
  );
};
const Previewer = ({ state }) => {
  return (
    <div>
      <Header title="Previewer" />
      <div className="previewer">
        <div dangerouslySetInnerHTML={renderText(state)} />
      </div>
    </div>
  );
};

function MarkdownPreviewer() {
  const [text, setText] = useState(
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```' && lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. How cool!?"
  );

  return (
    <div className="App">
      <Editor setState={setText} state={text} />
      <Previewer state={text} />
    </div>
  );
}

export default MarkdownPreviewer;
