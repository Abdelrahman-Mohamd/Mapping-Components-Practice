import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(singleEmojiDetails) {
  return (
    <Entry
      key={singleEmojiDetails.id}
      emoji={singleEmojiDetails.emoji}
      name={singleEmojiDetails.name}
      meaning={singleEmojiDetails.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
