import React from "react";
import Navigation from "../components/Navigation";
import Typical from "react-typical";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Amine NEGHBEL</h1>
          <Typical
            steps={[
              "Développeur FullStack Rails 💻"
            ]}
            loop={1}
            wrapper="h1"
          />
          <div className="pdf">
            <a href="./media/CV_Amine_NEGHBEL.pdf" download target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
