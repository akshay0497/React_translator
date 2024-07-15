import React, { useState } from "react";

// language list for example only
import Languages from './languages'

// import component
import { ReactTransliterate } from "react-transliterate";
//import "react-transliterate/dist/index.css";

// Material Ui input component
import Input from "@material-ui/core/Input";

const App = () => {
  const [text, setText] = useState("");

  const [lang, setLang] = useState("en");

  return (
    <div className="container">
      <h2>Language Translator</h2>

      <select
        className="language-dropdown"
        value={lang}
        onChange={(e) => setLang(e.target.value )}
      >
        {Languages.map((l) => (
          <option key={l.value} value={l.value}>
            {l.label}
          </option>
        ))}
      </select>

      <div className="spacer" />

      <label htmlFor="react-transliterate-input">Using input</label>
      <ReactTransliterate
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        lang={lang}
        placeholder="Start typing here..."
        id="react-transliterate-input"
      />

      <div className="spacer" />

      <label htmlFor="react-transliterate-textarea">Using textarea</label>
      <ReactTransliterate
        renderComponent={(props) => <textarea {...props} />}
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        lang={lang}
        placeholder="Start typing here..."
        id="react-transliterate-textarea"
      />

      <div className="spacer" />

      <label htmlFor="react-transliterate-material-ui-input">
        Using Material UI input
      </label>
      <ReactTransliterate
        renderComponent={(props) => {
          const inputRef = props.ref;

          delete props["ref"];

          return <Input fullWidth {...props} inputRef={inputRef} />;
        }}
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        lang={lang}
        placeholder="Start typing here..."
        id="react-transliterate-material-ui-input"
      />
    </div>
  );
};

export default App;