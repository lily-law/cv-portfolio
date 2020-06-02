import React, {Fragment} from "react"
import Icon from "./icon"
import { Link } from "gatsby"
import cv from "../images/nav/cv.svg"
import me from "../images/me.png"

const Cv = () => {
    return (
    <Fragment>
        <div id="cv" className="cv">
            <header className="heading">
                <Link to="/">
                    <h1><img src={cv} alt="CV" /></h1>
                </Link>
            </header>
            <main>
                <article>
                    <figure>
                        <img src={me} alt="me" />
                        <figcaption><Icon name="lilylaw" /></figcaption>
                    </figure> 
                    <section>
                        <p>I began learning to code with some downtime after having surgery and I've been hooked since.</p>

                    </section>
                    <section>
                        <header>
                            <h2>Strengths at every stage of development.</h2>
                        </header>
                        <ul>
                            <li>Artistic with a User Focus</li>
                            <li>Empathetic and Introspective</li>
                            <li>Curious and Persistent</li>
                            <li>The Ideal Team Member</li>
                        </ul>
                    </section>
                </article>
                <aside>
                    <section>
                        <header>
                            <h2>Proficient Frontend Developer</h2>
                        </header>
                        <figure>
                            <Icon name="js" className="big" />
                        </figure>
                        <div className="icons">
                            <Icon name="css" />
                            <Icon name="html5" />
                            <Icon name="react" />
                            <Icon name="xd" />
                        </div>   
                    </section>
                    <section>
                        <header>
                            <h2>Progressing in Backend Development</h2>
                        </header>
                        <figure>
                            <Icon name="nodejs" className="big" />
                        </figure>
                    </section>
                    <section>
                        <h3>Experianced working in remote teams</h3>
                        <div className="icons">
                            <Icon name="agile" />
                            <Icon name="chingu" />
                            <Icon name="github" />
                        </div>
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
            }
            .heading {
                margin: 0;
                grid-area: header;
                width: 100%;
                height: 150px;
                clip-path: polygon(50% 100%, 0 0, 100% 0);
                shape-outside: polygon(50% 100%, 0 0, 100% 0);
                background: var(--grey-l);
                display: grid;
                place-items: center center;
            }
            .heading img {
                transform: scaleY(-1) rotate(180deg);
            }
            main {
                min-height: calc(100vh - 150px);
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: auto 1fr;
                grid-template-areas: 
                "header header"
                "left right";
                align-items: stretch;
            }
            article {
                grid-area: left;
                display: grid;
                place-items: center end;
                align-content: center;
                margin: 0 5vw;
                text-align: right;
            }
            section {
                max-width: 300px;
            }
            header {
                margin-top: 32px;
                word-break: break-word;
            }
            li {
                list-style-type: none;
            }
            aside {
                grid-area: right;
                display: grid;
                place-items: start start;
                align-content: center;
                margin: 0 5vw;
            }
            aside section {
                display: grid;
                place-items: center start;
            }
            aside section header {
                display: flex;
                flex-flow: row wrap;
                align-items: baseline;
                justify-content: space-around;
            }
            figure {
                text-align: center;
                margin: 0;
            }
            figure img {
                width: 100%;
                max-width: 300px;
            }
            .icons {
                padding: 8px;
                padding-top: 0;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
            }
            figcaption {
                margin-top: -10%;
            }  
        `}</style>
    </Fragment>
    )
  }

  export default Cv