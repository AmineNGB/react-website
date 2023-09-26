import React from "react";
import { NavLink } from "react-router-dom";
import Profil from "../media/amine.jpg";
import Malt from "../media/malt.png";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={Profil} alt="profil-pic" />
          <h3>Amine NEGHBEL</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact="true" to="/" activeclassname="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/knowledges" activeclassname="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/portfolio" activeclassname="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/contact" activeclassname="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/AmineNGB/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AmineNgb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AmineNgb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.malt.fr/profile/amineneghbel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Malt} width="26" height="26" alt="malt-img" />
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Développé par Amine NEGHBEL © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
