import photo2 from "../assets/photo2.png";

function ProjectCard({ image, title, description, link }){
    return(
        <>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
                <div className="project-card">
                    <div className="project-card-image-container">
                    <img src={image}></img>
                    </div>
                        <div className="project-card-description">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </>
    );
}

export default ProjectCard;