import Icon from './icon'
import React, { Fragment } from 'react'

export default function Project({title, link, repo, icons, description, index, feature, setFeature}) {
    return (<Fragment>
        <button className={feature === index ? 'active' : ''} onClick={feature === index ? () => setFeature(null) : () => setFeature(index)}>
            <header>
                <h1>{title}</h1>
            </header>
            <nav className="links">
                {link && <Icon name="deploy" link={link} />}
                {repo && <Icon name="repo" link={repo} />}
            </nav>
            <div className="description">
                <p>{description}</p>
                {feature === index ?
                    <div>^ less</div> :
                    <div>more...</div>
                }
            </div>
            <section className="icons">
                {icons.map(name => <Icon key={name} name={name} />)}
            </section>
        </button>
        <style jsx>{`
            button {
                background: none;
                border: none;
                outline: none;
                order: ${index*10};
                padding: 48px 32px;
                text-align: right;
                width: 100%;
                display: grid;
                grid-template-areas: 
                "links header"
                "icons description"
                "icons description";
                margin-right: 24px;
                place-items: center center;
                grid-template-columns: 1fr 1fr;
                font-family: t26-carbon, monospace;
                max-width: 550px;
                box-sizing: border-box;
                color: var(--grey-xl);
            }
            .active {
                background: var(--blue-d);
                border: 3px solid var(--yellow-d);
                color: var(--blue-l);
                box-shadow: 1px 1px 16px var(--yellow-l);
            }
            header {
                grid-area: header;
                justify-self: end;
            }
            h1 {
               margin: 0;
               margin-bottom: 8px;
            }
            .active h1 {
                color: var(--yellow-l);
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
                font-weight: 600;
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