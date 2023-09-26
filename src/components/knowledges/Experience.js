import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expériences</h3>
      <div className="exp-1">
        <h4>Teacher @Lewagon</h4>
        <h5>Depuis juillet 2022</h5>
        <p>
          Actuellement teacher chez Le Wagon Lyon, je suis chargé d'enseigner le
          développement web, notamment Ruby on Rails, JavaScript, HTML, et CSS.
          J'anime des cours, des ateliers et fournis un soutien pédagogique aux
          étudiants, tout en évaluant leurs performances et en offrant des
          retours constructifs pour les guider dans leur apprentissage.
        </p>
      </div>
      <div className="exp-2">
        <h4>Développeur FullStack @BasicLabs</h4>
        <h5>Novembre 2021 - Juin 2023</h5>
        <p>
          Développeur FullStack chez BasicLabs, j'étais chargé de développer des
          applications web de type ERP pour les clients de l'entreprise.
          J'utilisais principalement Ruby on Rails, Jquery, CSS + bootstrap,
          manipulations de base de données. J'intervenais occasionnellement sur
          du Support Client afin de résoudre des problèmes techniques.
        </p>
      </div>
      <div className="exp-3">
        <h4>
          Développeur FullStack @DouzePointCinq <i>Freelancing</i>
        </h4>
        <h5>Octobre 2020 - Octobre 2021</h5>
        <p>
          12.5 est le premier service de stationnement en parkings
          souterrains, à accès sécurisé, pensé pour les deux-roues : vélo,
          scooter, moto, trottinette.
          J'intervenais sur le développement de l'application web notamment sur la partie admin, la partie client et la partie paiement.
          J'ai pu me construire une solide expérience en Ruby on Rails, Javascript, HTML, CSS, Bootstrap, Stripe, Heroku, Git, Github et figma.
        </p>
      </div>
    </div>
  );
};

export default Experience;