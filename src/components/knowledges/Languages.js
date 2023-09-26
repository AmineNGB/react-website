import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Ruby", xp: 1.5 },
      { id: 2, value: "Javascript", xp: 1.4 },
      { id: 3, value: "Html", xp: 1.5 },
      { id: 4, value: "Css", xp: 1.5 },
      { id: 5, value: "SQL", xp: 1.3 },
    ],
    frameworks: [
      { id: 1, value: "Rails", xp: 1.5 },
      { id: 5, value: "Hotwire", xp: 1.5 },
      { id: 2, value: "React", xp: 1 },
      { id: 3, value: "Bootstrap", xp: 1.6 },
      { id: 4, value: "Tailwind", xp: 1.6 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="Langages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks"
        />
      </div>
    );
  }
}

export default Languages;
