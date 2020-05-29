import Icon from './icon'
import React, { Fragment } from 'react'

export default function Project({title, link, repo, icons, description, index, feature, setFeature}) {
    return (<Fragment>
        <article className={feature === index ? 'active' : ''}>
            <header>
                <h1>{title}</h1>
            </header>
            <nav className="links">
                {link && <Icon name="deploy" link={link} />}
                {repo && <Icon name="repo" link={repo} />}
            </nav>
            <div className="description">
                <h2>{description}</h2>
                {feature === index ?
                    <button onClick={() => setFeature(null)}>show less</button> :
                    <button onClick={() => setFeature(index)}>show more</button>
                }
            </div>
            <section className="icons">
                {icons.map(name => <Icon key={name} name={name} />)}
            </section>
        </article>
        <style jsx>{`
            article {
                order: ${index*10};
                padding: 48px 16px;
                text-align: right;
                width: 100%;
                display: grid;
                grid-template-areas: 
                "header header"
                "links description"
                "icons description";
                margin-right: 24px;
                place-items: center center;
                font-family: t26-carbon, monospace;
                max-width: 550px;
                box-sizing: border-box;
            }
            .active {
                background: var(--blue-d);
            }
            header {
                grid-area: header;
            }
            h1 {
               margin: 0;
               margin-bottom: 8px;
               text-decoration: underline;
               color: var(--grey-m);
            }
            header>a {
                text-decoration: none;
                color: var(--grey-d);
            }
            .icons {
                grid-area: icons;
                display: inline-flex;
                flex-flow: row wrap;
            }
            .screenshot {
                grid-area: screenshot;
                margin-left: 24px;
            }
            .description {
                grid-area: description;
            }
            h2 {
                color: var(--grey-m);
            }
            .links {
                grid-area: links;
                display: inline-flex;
                flex-flow: row wrap;
                padding-bottom: 8px;
                border-bottom: 1px solid var(--grey-l);
            }
            @media only screen and (max-width: 600px) { 
                article {
                    grid-template-areas: 
                    "header header"
                    "links links"
                    "icons icons"
                    "description description";
                    place-items: center end;
                    max-width: 450px;
                }
               
            }
        `}</style>
    </Fragment>)
}