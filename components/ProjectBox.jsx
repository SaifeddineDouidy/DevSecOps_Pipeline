import React from 'react';

const ProjectBox = ({ title, description, imageUrl, githubUrl }) => {
  return (
    <div className="project-box">
      <img src={imageUrl} alt={title} className="project-image"/>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">
          Voir sur GitHub
          <i className="fa fa-github"></i> {/* Assurez-vous que FontAwesome est inclus dans votre projet */}
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
