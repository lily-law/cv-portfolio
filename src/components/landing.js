import {Link} from 'gatsby';
import React, {Fragment, useEffect, useCallback} from 'react';
import cv from '../images/nav/cv.svg';
import portfolio from '../images/nav/portfolio.svg';
import lilyLaw from '../images/nav/lily-law.svg';
import logo from '../images/logo.svg';
import Contact from './contact';
import {useSpring, animated as a, interpolate} from 'react-spring';
import SEO from './seo';

const Landing = () => {
    const [{st}, set] = useSpring(() => ({st: 0}));
    const interpIcon = interpolate(
        [st],
        (st) => `rotate(-${Math.ceil(st)}deg)`
    );
    const interpNav = interpolate([st], (st) => `rotate(${Math.floor(st)}deg)`);
    const onScroll = useCallback(
        (e) =>
            set({
                st: Math.min(
                    window.scrollY * (180 / (window.innerHeight / 2)),
                    180
                ),
            }),
        [set]
    );
    useEffect(() => {
        window.onscroll = onScroll;
    });
    return (
        <Fragment>
            <div className="wrapper">
                <SEO title="Lily Law" />
                <a.nav className="landing__nav" style={{transform: interpNav}}>
                    <div className="overlay">
                        <a.img
                            className="landing__logo"
                            src={logo}
                            alt=""
                            style={{transform: interpIcon}}
                        />
                        <img className="cv" src={cv} alt="CV" />
                        <img
                            className="portfolio"
                            src={portfolio}
                            alt="Portfolio"
                        />
                        <img
                            className="lily-law"
                            src={lilyLaw}
                            alt="Lily Law"
                        />
                        <section className="links">
                            <Contact nav {...{interpIcon}} />
                        </section>
                    </div>
                    <svg
                        className="background"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 720 720">
                        <g transform="translate(-207 -8)">
                            <g transform="translate(387 188)">
                                <g transform="translate(0 0)" fill="#737373">
                                    <path
                                        d="M -179.5 538.7929077148438 L -179.5 -178.7929077148438 L 109.4998168945313 110.206184387207 L 109.4998168945313 249.7923583984375 L -179.5 538.7929077148438 Z"
                                        stroke="none"
                                    />
                                    <path
                                        d="M -179 537.5858154296875 L 108.9998168945313 249.5852661132813 L 108.9998168945313 110.4132766723633 L -179 -177.5858154296875 L -179 537.5858154296875 M -180 540 L -180 -180 L 109.9998168945313 109.9990921020508 L 109.9998168945313 249.9994506835938 L -180 540 Z"
                                        stroke="none"
                                    />
                                </g>
                            </g>
                            <Link to="/#portfolio">
                                <g transform="translate(437 238.112)">
                                    <g
                                        transform="translate(0 -0.112)"
                                        fill="#505050">
                                        <path
                                            d="M 259.5000305175781 259.4978637695313 L 1.207168936729431 259.4978637695313 L 130.3535614013672 130.3522338867188 L 259.5000305175781 1.207124352455139 L 259.5000305175781 259.4978637695313 Z"
                                            stroke="none"
                                        />
                                        <path
                                            d="M 259.0000305175781 258.9978637695313 L 259.0000305175781 2.41418194770813 L 130.7070922851563 130.7057647705078 L 2.414240598678589 258.9978637695313 L 259.0000305175781 258.9978637695313 M 260.0000305175781 260 L 260.0000305175781 259.9978637695313 L 3.0517578125e-05 259.9978637695313 L 130 129.9986724853516 L 260.0000305175781 0 L 260.0000305175781 259.9978637695313 L 260.0000305175781 260 Z"
                                            stroke="none"
                                        />
                                    </g>
                                </g>
                            </Link>
                            <g transform="translate(697 187)">
                                <g transform="translate(0 -179)" fill="#737373">
                                    <path
                                        d="M 229.5 718.9180297851563 L 0.5 489.8775634765625 L 0.5 230.2477874755859 L 229.5 1.207242012023926 L 229.5 718.9180297851563 Z"
                                        stroke="none"
                                    />
                                    <path
                                        d="M 229 717.7108154296875 L 229 2.414484024047852 L 1 230.4548645019531 L 1 489.6705017089844 L 229 717.7108154296875 M 230 720 L 229.8747253417969 720 L 0 490.0846252441406 L 0 230.0407257080078 L 230 0 L 230 720 Z"
                                        stroke="none"
                                    />
                                </g>
                            </g>
                            <Link to="/#cv">
                                <g transform="translate(387 188)">
                                    <g
                                        transform="translate(540 180) rotate(180)"
                                        fill="#a6a6a6">
                                        <path
                                            d="M 718.7929077148438 359.5 L 1.207090854644775 359.5 L 360 0.7070909142494202 L 718.7929077148438 359.5 Z"
                                            stroke="none"
                                        />
                                        <path
                                            d="M 360 1.4141845703125 L 2.4141845703125 359 L 717.5858154296875 359 L 360 1.4141845703125 M 360 0 L 720 360 L 0 360 L 360 0 Z"
                                            stroke="none"
                                        />
                                    </g>
                                </g>
                            </Link>
                            <g transform="translate(495 296.106)">
                                <g transform="translate(72 -0.106) rotate(90)">
                                    <path
                                        d="M 142.7929077148438 71.5 L 1.207090854644775 71.5 L 72 0.7070909142494202 L 142.7929077148438 71.5 Z"
                                        stroke="none"
                                    />
                                    <path
                                        d="M 72 1.414199829101563 L 2.414199829101563 71 L 141.5858001708984 71 L 72 1.414199829101563 M 72 0 L 144 72 L 0 72 L 72 0 Z"
                                        stroke="none"
                                    />
                                </g>
                            </g>
                            <g transform="translate(387 498.242)">
                                <g
                                    transform="translate(0 -0.242)"
                                    fill="#a6a6a6">
                                    <path
                                        d="M 538.3538818359375 229.0621490478516 L -178.3537902832031 229.0621490478516 L 50.35068130493164 0.499960720539093 L 309.6482238769531 0.499960720539093 L 538.3538818359375 229.0621490478516 Z"
                                        stroke="none"
                                    />
                                    <path
                                        d="M 537.1461791992188 228.5621490478516 L 309.4411315917969 0.999960720539093 L 50.55777359008789 0.999960720539093 L -177.1460723876953 228.5621490478516 L 537.1461791992188 228.5621490478516 M 539.5615234375 229.5621490478516 L -179.5614013671875 229.5621490478516 L 50.14368057250977 -3.927334910258651e-05 L 309.855224609375 -3.927334910258651e-05 L 539.5615234375 229.5621490478516 Z"
                                        stroke="none"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </a.nav>
            </div>
            <style jsx global>{`
                .landing__nav {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                }
                .landing__logo {
                    width: 15vh;
                    margin-top: 7vh;
                    margin-left: 1vh;
                    grid-area: logo;
                    align-self: start;
                    align-items: center;
                    justify-self: start;
                }
                @media (orientation: portrait) {
                    .landing__logo {
                        width: 15vw;
                        margin-top: 6vw;
                        margin-left: 0;
                    }
                }
            `}</style>
            <style jsx>{`
                .wrapper {
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                    background: var(--grey-m);
                }
                @media (orientation: portrait) {
                    .wrapper {
                        background: var(--grey-l);
                    }
                }
                .background {
                    position: absolute;
                    margin-left: calc(50% - 100vh);
                    margin-top: calc(50vh - 100vh);
                    width: 200vh;
                    height: 200vh;
                }
                @media (orientation: portrait) {
                    .background {
                        margin-left: -50%;
                        margin-top: calc(0 - 100%);
                        width: 200%;
                        height: 200%;
                    }
                }
                .overlay {
                    position: absolute;
                    margin-left: calc(50% - 50vh);
                    margin-top: calc(50vh - 50vh);
                    width: 100vh;
                    height: 100vh;
                    z-index: 200;
                    font-family: gill-sans-nova, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    white-space: nowrap;
                    pointer-events: none;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    grid-template-columns: 3fr 2fr 3.6fr 1.4fr;
                    grid-template-rows: 3.5fr 1.5fr 3.5fr 1.5fr;
                    grid-template-areas:
                        'lily-law cv cv links'
                        'lily-law logo portfolio links'
                        'lily-law logo portfolio links'
                        '. . . links';
                }
                @media (orientation: portrait) {
                    .overlay {
                        margin-left: 0;
                        margin-top: calc(50vh - 50%);
                        width: 100vw;
                        height: 100vw;
                    }
                }
                .cv {
                    grid-area: cv;
                    width: 30vh;
                    margin-left: -14vh;
                }
                @media (orientation: portrait) {
                    .cv {
                        width: 30vw;
                        margin-left: -14vw;
                    }
                }
                .portfolio {
                    grid-area: portfolio;
                    width: 30vh;
                    margin-left: -14vh;
                    fill: var(--grey-l);
                }
                @media (orientation: portrait) {
                    .portfolio {
                        width: 30vw;
                        margin-left: -14vw;
                    }
                }
                .links {
                    grid-area: links;
                    display: flex;
                    flex-direction: column;
                    align-content: space-around;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                    margin: 12vh 0;
                    align-self: stretch;
                    justify-self: stretch;
                    pointer-events: auto;
                }
                .lily-law {
                    grid-area: lily-law;
                    width: 10vh;
                    margin-top: 14vh;
                }
                @media (orientation: portrait) {
                    .lily-law {
                        width: 10vw;
                        margin-top: 14vw;
                    }
                }
                @media print {
                    * {
                        display: none;
                    }
                }
            `}</style>
        </Fragment>
    );
};
export default Landing;
