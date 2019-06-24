import React from "react";

import Jock from "./Jock";

function App() {
  return (
    <div>
      {/* Below code refrance from ./Jock file */}
      <Jock
        question="This is 1st Question"
        answer="Some quick example text to build on the card title and make up the bulk of the card's content5."
      />
      <Jock
        question="This is 2nd Question"
        answer="Some quick example text to build on the card title and make up the bulk of the card's content5."
      />
      <Jock
        question="This is 3rd Question"
        answer="Some quick example text to build on the card title and make up the bulk of the card's content5."
      />
      <Jock
        question="This is 4th Question"
        answer="Some quick example text to build on the card title and make up the bulk of the card's content5."
      />
      <Jock
        question="This is 5th Question"
        answer="Some quick example text to build on the card title and make up the bulk of the card's content5."
      />
    </div>
  );
}
export default App;
