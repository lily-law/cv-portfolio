import React, {Fragment} from "react"
import Icon from "./icon"
import { Link } from "gatsby"

const Cv = () => {
    return (
    <Fragment>
        <div id="cv" className="cv">
        <div className="title-for-print-media">
                    <h1>lilylaw.github.io | CV</h1>
                </div>
                <header className="heading">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 180" preserveAspectRatio="none">
                        <Link to="/">
                            <g transform="translate(360 180) rotate(180)" fill="#a6a6a6">
                                <path d="M 358.7929077148438 179.5 L 1.207075595855713 179.5 L 179.9999847412109 0.7070909142494202 L 358.7929077148438 179.5 Z"/>
                            </g>
                        </Link>
                    </svg>
                    <h1>CV</h1>
                </header>
            <main>
                <article>
                    <h2>Frontend Web Developer</h2>
                    <section>
                        <p>I began learning to code with some downtime after having surgery and I've been hooked since.</p>
                        <p>My ethos is to stay fairly tech stack agnostic and focus on the language and best programming practices.</p>
                        <p>Often quick to learn and adapt, I enjoy the challenge and constant need to shift perspective when learning new tech</p>
                    </section>
                    <section className="experience">
                        <header>
                           <h3>Experience</h3>
                        </header>
                        <ul>
                            <li>
                                <h4>Facilitator at Chingu.io</h4>
                                <h5>04/2020 - present</h5>
                                <p>
                                    In this role I evaluate solo project submissions. I've also played a part in planning, 
                                    designing, and developing projects for fellow Chingus to base their solo projects on.
                                </p>
                            </li>
                            <li>
                                <h4>Chingu Voyager</h4>
                                <h5>01/2020 - present</h5>
                                <p>
                                    I've worked in several teams so far on these 6 week agile developer projects. 
                                    Each time I've gained a treasure trove of insight about my strengths and weaknesses.
                                    One of the most valuable lessons I've learned from them is how integral planning is.
                                </p>
                            </li>
                            <li>
                                <h4>Freelance Web Designer and Developer</h4>
                                <h5>01/2019 - 12/2019</h5>
                                <p>
                                    This role taught me a ton about real world development. 
                                    It set me on the path to building the self discipline I have now and has reassured me I'm headed in the right direction.
                                </p>
                            </li>
                        </ul>
                    </section>
                </article>
                <aside>
                    <section>
                        <header>
                            <h3>Skills</h3>
                        </header>
                        <figure>
                            <Icon name="js" className="big" />  
                        </figure>
                        <div className="icons">
                            <Icon name="react" />
                            <Icon name="xd" />
                            <Icon name="css" />
                            <Icon name="html5" />
                        </div>   
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Adobe XD</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>git</li>
                        </ul>
                    </section>
                    <section>
                        <h4>Experienced working in remote teams</h4>
                        <div className="icons">
                            <Icon name="agile" />
                            <Icon name="chingu" />
                            <Icon name="github" />
                        </div>
                        <ul>
                            <li>Agile</li>
                            <li>Chingu</li>
                            <li>GitHub</li>
                        </ul>
                    </section>
                    <section>
                        <h4>Strengths at every stage of development</h4>
                        <ul>
                            <li>Motivated team player</li>
                            <li>Independent thinker</li>
                            <li>Artistic with a User Focus</li>
                            <li>Able to lead</li>
                            <li>Empathetic and Introspective</li>
                            <li>Curious and Persistent</li>
                        </ul>
                    </section>
                </aside>
            </main>
        </div>
        <style jsx>{`
            .cv {
                background: var(--blue-d);
                background: linear-gradient(90deg, 
                    var(--blue-d) calc(50% - 1px), 
                    var(--grey-xl) calc(50%), 
                    var(--blue-d) calc(50% + 1px)
                );
                color: var(--blue-l);
                max-width: 100%;
                overflow-x: hidden;
                font-family: var(--flow-font-family);
            }
            .heading {
                margin: 0;
                margin-top: -1px;
                margin-left: -2%;
                grid-area: header;
                width: 104%;
                display: grid;
                position: relative;
            }
            .heading svg {
                width: 100%;
                height: 150px;
            }
            .heading h1 {
                margin: 0;
                line-height: 100%;
                color: var(--blue-d);
                position: absolute;
                top: 10%;
                text-align: center;
                width: 100%;
                font-size: 86px;
                pointer-events: none;
                letter-spacing: 4px;
            }
            main {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: auto 1fr;
                grid-template-areas: 
                "header header"
                "left right";
                align-items: start;
            }
            article {
                grid-area: left;
                display: grid;
                align-items: center;
                justify-items: end;
                align-content: center;
                margin: 0 5vw;
                text-align: right;
            }
            section {
                max-width: 600px;
            }
            header {
                margin-top: 32px;
            }
            article li {
                list-style-type: none;
            }
            aside {
                grid-area: right;
                display: grid;
                align-items: start;
                justify-items: start;
                align-content: center;
                margin: 0 5vw;
            }
            aside section {
                display: grid;
                align-items: center;
                justify-items: start;
            }
            figure {
                margin: 0;
            }
            figure img {
                width: 100%;
                max-width: 300px;
            }
            .icons {
                padding-top: 0;
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-start;
            } 
            h4 {
                opacity: 0.8;
            }
            .experience h4, .experience h5 {
                margin: 0;
            }
            .title-for-print-media {
                display: none;
            }
            @media print {
                * {
                    color: black;
                }
                .heading {
                    display: none;
                }
                .title-for-print-media {
                    display: block;
                    text-align: center;
                }
            }
            @media only screen and (max-width: 420px) {
                main {
                    grid-template-columns: 1fr;
                    grid-template-areas: 
                    "header"
                    "left" 
                    "right";
                }
                article {
                    margin-top: 10%;
                    margin-left: 0%;
                    background: var(--blue-d);
                    border: 1px solid var(--grey-xl);
                    padding: 5%;
                    width: 70%;
                }
                aside {
                    margin: 10% 0 10% 20%;
                    background: var(--blue-d);
                    border: 1px solid var(--grey-xl);
                    padding: 5%;
                    width: 70%;
                }
            }
        `}</style>
    </Fragment>
    )
  }

  export default Cv