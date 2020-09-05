import Icon from './icon'
import React, { Fragment } from 'react'

export default function Project({title, icons, description, index, feature, setFeature}) {
    return (<Fragment>
        <button className={feature === index ? 'active' : ''} onClick={feature === index ? () => setFeature(null) : () => setFeature(index)}>
            <header>
                <h1>{title}</h1>
            </header>
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
                "header icons"
                "description icons"
                "description icons";
                margin-right: 24px;
                align-items: center;
                justify-items: center;
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
            @media only screen and (max-width: 600px) { 
                article {
                    grid-template-areas: 
                    "header header"
                    "icons icons"
                    "description description";
                    align-items: center;
                    justify-items: end;
                    max-width: 450px;
                }
               
            }
        `}</style>
    </Fragment>)
}