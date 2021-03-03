import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Abdoulaye WANE</h1>
          <h2>Consultant | Formateur | Développeur Fullstack Java / JS</h2>
          <div className="pdf">
            <a href="./media/cv.pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
