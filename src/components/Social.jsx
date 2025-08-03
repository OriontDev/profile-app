

function Social( { image, link } ){
    return(
        <>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
                <img src={image} className="social-icon"/>
            </a>
        </>
    );
}

export default Social;