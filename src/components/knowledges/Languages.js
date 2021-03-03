import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Java", xp: 2 },
      { id: 2, value: "Javascript", xp: 2 },
      { id: 3, value: "Python", xp: 0.4 },
      { id: 4, value: "Typescript", xp: 1 },
    ],
    frameworks: [
      { id: 1, value: "Spring", xp: 2 },
      { id: 2, value: "Angular", xp: 1.5 },
      { id: 3, value: "React", xp: 0.5 },
      { id: 4, value: "Bootstrap", xp: 1.8 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
