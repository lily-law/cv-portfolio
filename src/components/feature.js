import React, {Fragment, useState, useEffect} from 'react';
import Icon from './icon';

const Feature = ({feature, projects}) => {
    const [cols, setCols] = useState(1);
    const firstTab =
        projects[feature].points && Object.keys(projects[feature].points)[0];
    const [activeTab, setActiveTab] = useState(firstTab);
    let activeProject = projects[feature].points?.[activeTab];
    useEffect(() => {
        const findNCols = () =>
            window.innerWidth <= 1200 ? 1 : window.innerWidth <= 1800 ? 2 : 3;
        setCols(findNCols());
        window.onresize = () => setCols(findNCols());
    }, []);
    return (
        <Fragment>
            <aside className="feature">
                <figure>
                    {activeProject?.display?.image && (
                        <img
                            src={'/projects/' + activeProject.display.image}
                            alt=""
                        />
                    )}
                </figure>
                <section>
                    <nav className="links">
                        {projects[feature].points &&
                            Object.keys(projects[feature].points).map(
                                (title) => (
                                    <button
                                        key={title}
                                        className={
                                            title === activeTab ? 'active' : ''
                                        }
                                        onClick={() => setActiveTab(title)}>
                                        {title}
                                    </button>
                                )
                            )}
                        {projects[feature].link && (
                            <Icon name="deploy" link={projects[feature].link} />
                        )}
                        {projects[feature].repo && (
                            <Icon name="repo" link={projects[feature].repo} />
                        )}
                    </nav>
                    {activeProject?.text?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </section>
            </aside>
            <style jsx>{`
                .feature {
                    order: ${cols * 10 * (1 + Math.floor(feature / cols)) - 9};
                    width: calc(550px * ${cols});
                    max-width: 80vw;
                    grid-column-start: span 3;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: start;
                    justify-items: center;
                    background: var(--blue-d);
                    color: var(--blue-l);
                    border: 3px solid var(--yellow-d);
                    margin-top: -3px;
                    box-shadow: 1px 1px 16px var(--yellow-l);
                    padding: 16px;
                }
                figure {
                    align-self: center;
                }
                section {
                    margin: 2vw;
                    max-width: 100%;
                }
                button {
                    width: 80px;
                    color: var(--grey-xl);
                    background: var(--blue-d);
                }
                .active {
                    color: var(--blue-d);
                    background: var(--blue-l);
                }
                img {
                    max-width: 100%;
                }
                .links {
                    grid-area: links;
                    display: inline-flex;
                    flex-flow: row wrap;
                    padding-bottom: 8px;
                    border-bottom: 1px solid var(--grey-l);
                }
                @media only screen and (max-width: 1800px) {
                    .feature {
                        grid-column-start: span 2;
                    }
                }
                @media only screen and (max-width: 1200px) {
                    .feature {
                        grid-column-start: span 1;
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </Fragment>
    );
};

export default Feature;
