import { useEffect, useState, useRef } from "react";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import CSS_Logo from "./assets/CSS.png";
import C_Logo from "./assets/C_Logo.png";
import HTML_Logo from "./assets/HTML_Logo.png";
import JS_Logo from "./assets/JavaScript_Logo.png";
import JAVA_Logo from "./assets/Java_Logo.jpg";
import RSTUDIO_Logo from "./assets/RStudio_Logo.svg";
import SCRATCH_Logo from "./assets/Scratch_Logo.png";
import FIREBASE_Logo from "./assets/Firebase_Logo.png";
import GITHUB_Logo from "./assets/github_Logo.svg";
import CONSTRUCT_Logo from "./assets/Construct3_Logo.png";
import REACT_Logo from "./assets/React_Logo.png";
import ID_Flag from "./assets/Indonesia_Flag.png";
import DE_Flag from "./assets/Germany_Flag.png";
import JP_Flag from "./assets/Japan_Flag.png";
import GB_Flag from "./assets/UK_Flag.png";
import ProjectCard from "./components/ProjectCard";
import game1 from "./assets/game1.png";
import game2 from "./assets/game2.png";
import game3 from "./assets/game3.png";
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import app1 from "./assets/app1.png";
import Gmail from "./assets/Gmail.png";
import Facebook from "./assets/Facebook.png";
import LinkedIn from "./assets/LinkedIn.png";
import Insta from "./assets/Insta.png";
import Leetcode from "./assets/Leetcode.png";
import Social from "./components/Social";

function Home(){

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);


    return(
        <>
            <section className="home-section" id="home">
                <div className="home-header">
                    <button onClick={() => {
                        const section = document.getElementById("home");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }}>Home</button>
                    <button onClick={() => {
                        const section = document.getElementById("about");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }}>About</button>
                    <button onClick={() => {
                        const section = document.getElementById("skill");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }}>Skills</button>
                    <button onClick={() => {
                        const section = document.getElementById("project");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }}>Project</button>                  
                </div>
                <div className="home-content">
                    <img src={photo1} className={`profile-pic ${fadeIn ? 'fade-in' : ''}`}></img>
                    <div className="home-text">
                        <div className="home-text-inside-container">
                            <h1 className="home-name">Oriont Fedora</h1>
                            <h5 className="home-desc">Junior Web & Game Developer</h5>
                            <div className="home-text-inside-button-container">
                                <button className="inside-button" onClick={() => {
                                    const section = document.getElementById("project");
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}>View Portofolio</button>
                            </div>
                            <div className="social-container">
                                <Social
                                    image={Insta}
                                    link={"https://www.instagram.com/oriont_macc/"}
                                />
                                <Social
                                    image={Gmail}
                                    link={"mailto:madeoriontfedora@gmail.com"}
                                />
                                <Social
                                    image={Facebook}
                                    link={"https://www.facebook.com/madeoriont.fedora/"}
                                />
                                <Social
                                    image={LinkedIn}
                                    link={"https://www.linkedin.com/in/oriont-fedora-919033366/"}
                                />
                                <Social
                                    image={Leetcode}
                                    link={"https://leetcode.com/u/hluqDWH3tz/"}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="about-section" id="about">
                <div className="about-header">
                    <h1>ABOUT ME</h1>
                </div>
                <div className="about-content-container">
                    <p className="about-description">Hi! I’m Oriont, a passionate software and game development student currently studying at a vocational high school in Indonesia. While I’m formally learning programming as part of my major, much of my growth has come from self-driven exploration, building games with Construct, experimenting with JavaScript and React, and sharing my progress through GitHub. I enjoy combining creativity with logic, and I’m always excited to take on new challenges, whether it's coding solo projects, learning new tools like Dart or Flutter, or diving deeper into computer science concepts on my own.</p>
                    <img src={photo2} className="about-photo"/>
                </div>
                <div className="about-content-container">
                    <p className="about-description">Beyond coding, I enjoy expressing myself through creative outlets like cosplay, music, and digital content creation. I’ve taken part in cosplay competitions, performed violin pieces on stage, and created online videos that blend education with entertainment. These experiences have helped me develop confidence, attention to detail, and a love for storytelling. Whether I’m debugging a game mechanic or designing a website, I approach every project with curiosity, creativity, and a desire to grow.</p>
                    <img src={photo3} className="about-photo"/>
                </div>
            </section>
            <section className="skill-section" id="skill">
                <div className="skill-header">
                    <h1>My Skills</h1>
                </div>
                <div className="skill-content">
                    <div className="skill-container">
                        <div className="skill-title">
                           <h1>Programming Languages</h1>
                        </div>

                        <div className="skill-bar">
                            <img className="skill-icon" src={C_Logo}></img>
                            <img className="skill-icon" src={HTML_Logo}></img>
                            <img className="skill-icon" src={CSS_Logo}></img>
                            <img className="skill-icon" src={JS_Logo}></img>
                            <img className="skill-icon" src={JAVA_Logo}></img>
                        </div>
                    </div>
                    <div className="skill-container">
                        <div className="skill-title">
                           <h1>Other Tools & Game Engines</h1>
                        </div>

                        <div className="skill-bar">
                            <img className="skill-icon" src={SCRATCH_Logo}></img>
                            <img className="skill-icon" src={CONSTRUCT_Logo}></img>
                            <img className="skill-icon" src={RSTUDIO_Logo}></img>
                            <img className="skill-icon" src={REACT_Logo}></img>
                            <img className="skill-icon" src={GITHUB_Logo}></img>
                            <img className="skill-icon" src={FIREBASE_Logo}></img>
                        </div>
                    </div>
                    <div className="skill-container">
                        <div className="skill-title">
                           <h1>Languages</h1>
                        </div>

                        <div className="skill-bar">
                            <div className="language-flag">
                                <img className="skill-icon" src={GB_Flag}></img>
                                <span className="language-level">Fluent</span>
                            </div>
                            <div className="language-flag">
                                <img className="skill-icon" src={ID_Flag}></img>
                                <span className="language-level">Native</span>
                            </div>
                            <div className="language-flag">
                                <img className="skill-icon" src={JP_Flag}></img>
                                <span className="language-level">N5</span>
                            </div>
                            <div className="language-flag">
                                <img className="skill-icon" src={DE_Flag}></img>
                                <span className="language-level">A1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project-section" id="project">
                <div className="project-header">
                    <h1>My Projects</h1>
                </div>

                <div className="project-container">
                    <div className="project-container-header">
                        <h1>Game Projects</h1>
                    </div>
                    <div className="project-card-container">
                        <ProjectCard
                            image={game1}
                            title={"PolandBall Can Into Space!"}
                            description={"A pixel style countryball platformer game, where we play as polandball with the goal of finding all the spaceship part by going through obstacles, enemies and bosses. This game is my personal CONTRUCT 3 side project. This game is still in development stage but is already playable in Itch.io"}
                            link={"https://oriontfedora.itch.io/polandspace"}
                        />
                        <ProjectCard
                            image={game2}
                            title={"Nada Nusantara Bali"}
                            description={"A pixel style, puzzle RPG game with the theme of balinese culture. in this game you are required to collect all the missing balinese traditional instruments while learning about it. You will be interacting with the NPCs to find some clue. This game is part of my final project in high school where we had to make a local culture themed game in SCRATCH"}
                            link={"https://scratch.mit.edu/projects/1098043166"}
                        />
                        <ProjectCard
                            image={game3}
                            title={"Konsultan Visa : Virtual Office (ROBLOX)"}
                            description={"A virtual office made in roblox studio. Featuring a 1:1 replica of Konsultan Visa's office including the interior. This game is a part of Konsultan visa's virtual office opening event. I was commisioned to make this roblox experience"}
                            link={"https://www.roblox.com/games/17806755346/Konsultan-Visa"}
                        />
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-container-header">
                        <h1>Website Projects</h1>
                    </div>
                    <div className="project-card-container">
                        <ProjectCard
                            image={web1}
                            title={"Pokémon Type Identifier"}
                            description={"A simple website where you could search any pokemon and it will show you an image and the type of the pokemon. This is a simple javascript project, in which i made to practice fetching API. No framework were used to make this, only plain HTML, CSS, and javascript."}
                            link={"https://oriontdev.github.io/pokemon-type/"}
                        />
                        <ProjectCard
                            image={web2}
                            title={"Anonymous Letter"}
                            description={"A simple website built with ReactJS and firebase where you could post an anonymous letter or read a letter from someone. You could search a letter by recipient name. This website is heavily inspired by the infamous web called unsent project"}
                            link={"https://oriontdev.github.io/anonymous-letter/#/"}
                        />
                        <ProjectCard
                            image={web3}
                            title={"To-do list"}
                            description={"A To-do list website built with ReactJS. With features such as switching between light and dark mode, deleting task, and also arranging them based on priority or schedule"}
                            link={"https://oriontdev.github.io/todolist/#/"}
                        />
                    </div>
                </div>

                <div className="project-container">
                    <div className="project-container-header">
                        <h1>Mobile App Projects</h1>
                    </div>
                    <div className="project-card-container">
                        <ProjectCard
                            image={app1}
                            title={"Sejarah Indonesia"}
                            description={"A simple mobile application that contains informations about the history of indonesia, from the period of 1500s until 1945. This app is made with MIT APP INVENTOR, and is a part of my final project. Besides information it also features a quiz with 20 questions"}
                            link={"https://drive.google.com/drive/folders/1-u2Br6_NN-Jr5sbCrLYvmQ5AafdyfJSl?usp=drive_link"}
                        />
                    </div>
                </div>

            </section>
        </>
    );
}

export default Home;