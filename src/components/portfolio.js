import React, {Fragment, useState} from 'react';
import Project from './project.js';
import {Link} from 'gatsby';
import {useSpring, animated} from 'react-spring';
import Feature from './feature';

const projects = [
    {
        title: 'SyncedUp',
        link: 'https://syncedup.live',
        repo: 'https://github.com/chingu-voyages/v25-bears-team-05',
        icons: ['chingu', 'typescript', 'react', 'nodejs', 'mongodb', 'figma'],
        description: 'LinkedIn style developers community PWA',
        points: {
            'Overview': {
                text: [
                    `This is an ongoing Chingu team project. We’re using Typescript, with React and redux on the frontend and a nodeJs Express server with MongoDB as our backend API.`,
                ],
                display: {
                    image: 'syncedup-landing.png',
                },
            },
            'Design': {
                text: [
                    `We’ve used Figma to design our app and also to sketch up plans to help coordinate our data structure and development.`,
                ],
                display: {
                    image: 'syncedup-figma.png',
                },
            },
        },
    },
    {
        title: 'White Raven',
        link: 'https://white-raven.co.uk',
        icons: ['react', 'xd', 'php'],
        description: 'Unique web design and developments for an Animal Communicator',
        points: {
            'Overview': {
                text: [
                    `I allocated a large chunk of the time spent on this project to the design. The client desired something unique, bright, and natureful.`,
                    `The landing page has an easter egg of animated drifting clouds. I’ve used a dual tone background to help break up content. On the Communication page by having the photo overlap the dual tones I’ve created impact. I’ve used my image editing skills to enhance the client's photo of herself and also to create the White Raven logo.`,
                    `For the communications page I’ve created a custom booking system and Q&A search modal.`,
                ],
                display: {
                    image: 'white-raven.png',
                },
            },
            'Booking System': {
                text: [
                    `For each booking the client requires a fair chunk of information from users. To make this less daunting I’ve created a booking system that breaks this down into smaller steps.`,
                    `I’ve scripted a simple PHP backend to handle sending the information and photo as an email to the client and confirmation email to the user.`,
                    `The booking system handles payments using Paypal’s API.`,
                ],
                display: {
                    image: 'white-raven-2.png',
                },
            },
        },
    },
    {
        title: 'Wavy',
        link: 'https://chingu-voyages.github.io/v18-geckos-team-02/',
        repo: 'https://github.com/chingu-voyages/v18-geckos-team-02',
        icons: ['chingu', 'react', 'xd'],
        description: 'A PWA that archives files into a visual timeline',
        points: {
            'Overview': {
                text: [
                    'Voyage 18: Team project on Chingu',
                    `The project prototype centers around a cool timeline view of user uploaded files. Users are able to add files, view them in the timeline and download a save file.`,
                    `In retrospect I would have done a lot on this project differently. It’s very frontend focused and would benefit by having a well designed service worker to handle the IndexedBD operations. This approach would also mean the prototype would more readily adapt to having a backend.`,
                ],
                display: {
                    image: 'wavy.jpg',
                },
            },
        },
    },
    {
        title: 'Dashy',
        link: 'https://v16-geckos-2-production.netlify.com/',
        repo: 'https://github.com/chingu-voyages/v16-geckos-team-02',
        icons: ['chingu', 'svelte', 'xd'],
        description: 'v16-geckos-team-02 - A Chingu team project',
        points: {
            'Overview': {
                text: [
                    'Voyage 16: Team project on Chingu.',
                    'This prototype allows users to create named dash boards with resizable and draggable text sticky widgets. Svelte, a new framework for everyone on the team made this project interesting to work on.',
                ],
                display: {
                    image: 'dashy.gif',
                },
            },
        },
    },
    {	
        title: 'grid',	
        repo: 'https://github.com/lily-law/grid',	
        icons: ['npm', 'typescript'],	
        description: 'A JavaScript grid arrays constructor',	
        points: {	
            'Overview': {	
                text: [	
                    'I made this grid constructor utility while working on implementing a sudoku engine/generator.',	
                    'It translates a given array into grid constructs which means you can access and edit a grid of items via rows/columns/diagonals/blocks/nths.',
                ],
                display: {
                    image: 'npm.svg',
                },
            }	
        }	
    },
    {
        title: 'U Buzz Tap',
        link: 'https://u-buzz-tap.herokuapp.com/',
        repo: 'https://github.com/lily-law/u-buzz-tap',
        icons: ['nodejs', 'socketio', 'react'],
        description: 'Simple buzzer SPA for multiple remote players',
        points: {
            'Overview': {
                text: [
                    `During the lockdown we’ve been doing a weekly video chat quiz and it was
                    suggested that we could use a buzzer app that accounts for the connection delays.`,
                    `Anyone can create a session and using the url can invite anyone to join. In session
                    users get a simple view of who's joined and a big button to buzz in with.`,
                    `My aim for this app was to make it to the point, simple, and cheap to host`,
                    `Each session url contains everything needed to revive it's self without the server
                    needing to store anything.`,
                ],
                display: {
                    image: 'u-buzz-tap.png',
                },
            },
            'The Buzz Process': {
                text: [
                    `When a user hits the buzzer and the server receives a 'buzzed' event, it sends
                    out a ping to each client. Once each client has responded to the ping
                    the server can end the round and announce the winner.`,
                    `If between the ping process the server
                    receives a 'buzzed' event from another user it calculates when their buzzer was activated,
                    accounting for connection delays and then announces all who buzzed and how many milliseconds
                    runner ups were out by`,
                ],
                display: {
                    image: 'u-buzz-tap-2.png',
                },
            },
        },
    },
    {
        title: 'Mars Photo API',
        link: 'https://chingu-solo-mars-rover-api.herokuapp.com/',
        repo: 'https://github.com/lily-law/chingu-solo-mars-rover-project',
        icons: ['nodejs', 'react'],
        description: 'Web app to search and view photos taken by mars rovers. A Chingu solo project',
        points: {
            'Overview': {
                text: [
                    `A simple node.js express server forms the backend. It has two main routes exposed, /api/photos/ and /api/manifests/.`,
                    `These are used as a gateway to NASA's Mars Photos API (NMPA), protecting my private API key and reducing any unnecessary outbound requests.`,
                    `These two routes call on four API methods:
                    `,
                    `- getPhotoList fetches photo data from NMPA and returns: `,
                    `  - An array of upto 25 photo data objects`,
                    `  - A URL used by the client for pagination (a shortcut link to request the next set of photos)`,
                    `- getManifest fetches manifest data from NMPA and returns a summary of the data available on a given rover. This summary is used in the client to limit the available filters and queries. A users search will never return an empty result`,
                    `- validatePhotosRequest checks if any of the request parameters are invalid and returns user friendly error messages`,
                    `- validateManifestRequest checks a given rover name against a list of valid rover names`,
                ],
                display: {
                    image: 'mars-photo-api.png',
                },
            },
            'Design': {
                text: [
                    `For the frontend I've kept it simple and clean. By creating a collapsible sidebar UI, development on this was quick and easy. Users are able to search for Mars rover photos, scroll through all results (pagination is automatically triggered), and click on results for a full view. A status component keeps users informed about the apps current processes, completed tasks, and any errors.`,
                ],
                display: {
                    image: "mars-photo-api-2.png",
                },
            },
        },
    },
    {
        title: 'Solo-Koala-54',
        link: 'https://chingu-solo.github.io/solo-koala-54/',
        repo: 'https://github.com/Chingu-Solo/solo-koala-54',
        icons: ['chingu', 'svelte', 'xd'],
        description: 'A reimplementation of Google Fonts',
        points: {
            'Overview': {
                text: [
                    'I created this for my Chingu pre-work project. While having fun coding the workings of this site, it felt appropriate to bring a little bit of fun into the design.',
                ],
                display: {
                    image: 'solo-koala-54.jpg',
                },
            },
        },
    },
    {
        title: 'Big Button Timer',
        repo: 'https://github.com/lily-law/bigButtonTimer',
        icons: ['c', 'arduino'],
        description:
            'A physical device with a big button and an 8 segment display',
        points: {
            'Overview': {
                text: [
                    'Programmed in C/Arduino, I made this with three modes stopwatch/pomodoro/counter.',
                    'Simple and reliable bit of code I use everyday. The big button makes this device, giving it an ease of use a notch above commercial devices I could find.',
                ],
                display: {
                    image: 'big-button-timer.jpg',
                },
            },
        },
    },
];

const Portfolio = () => {
    const [feature, setFeature] = useState(null);
    const flickeringAnimation = useSpring({
        to: async (next, cancel) => {
            async function flicker() {
                let nTimes = Math.floor(Math.random() * 9 + 3);
                const flick = async () => {
                    if (Math.floor(Math.floor(Math.random() * 2 + 0))) {
                        await next({
                            background:
                                'radial-gradient(var(--yellow-d), transparent, transparent)',
                        });
                    } else {
                        await next({
                            background:
                                'radial-gradient(var(--yellow-l), transparent, transparent)',
                        });
                    }
                    await next({background: 'var(--transparent)'});
                    if (--nTimes > 0) {
                        setTimeout(
                            flick,
                            Math.floor(Math.random() * 20 + 5) * 10
                        );
                    }
                };
                await flick();
                setTimeout(
                    flicker,
                    Math.floor(Math.random() * 50 + 5) * 100 + 2000
                );
            }
            flicker();
        },
        from: {background: 'var(--black)'},
    });
    const [animationProps, setAnimationProps] = useState(flickeringAnimation);
    const handleSetFeature = (p) => {
        if (Number.isInteger(p)) {
            setAnimationProps(null);
        } else {
            setAnimationProps(flickeringAnimation);
        }
        setFeature(p);
    };
    return (
        <Fragment>
            <div
                className={
                    'portfolio-page' +
                    (Number.isInteger(feature) ? ' feature-active' : '')
                }
                id="portfolio">
                <header>
                    <animated.div
                        style={animationProps}
                        className="portfolio-page__header__overlay">
                        <svg
                            className="portfolio-page__header__overlay__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 360 100"
                            preserveAspectRatio="none">
                            <g id="portfolio" transform="translate(0 -1582)">
                                <path
                                    id="Subtraction_5"
                                    data-name="Subtraction 5"
                                    d="M706,44H616L526-56H706V44ZM436,44H346V-56H526L436,44Z"
                                    transform="translate(-346 1638)"
                                    fill="#003"
                                />
                                <Link to="/">
                                    <path
                                        d="M90,0l90,100H0Z"
                                        transform="translate(90 1582)"
                                        fill="#505050"
                                    />
                                </Link>
                            </g>
                        </svg>
                        <h1>Portfolio</h1>
                    </animated.div>
                    <svg
                        className="portfolio-page__header__background"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 360 100"
                        preserveAspectRatio="none">
                        <path d="M180,0,360,100H0Z" />
                    </svg>
                </header>
                <main>
                    {projects.map((data, index) => (
                        <Project
                            key={data.title}
                            {...{
                                ...data,
                                index,
                                feature,
                                setFeature: handleSetFeature,
                            }}
                        />
                    ))}
                    {Number.isInteger(feature) && (
                        <Feature
                            key={'feature' + feature}
                            {...{feature, projects}}
                        />
                    )}
                </main>
            </div>
            <style jsx global>{`
                .portfolio-page__header__overlay {
                    content: '';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    display: grid;
                    justify-items: center;
                    z-index: 50;
                    clip-path: polygon(50% 0, 0 100%, 100% 100%);
                    shape-outside: polygon(50% 100%, 0 0, 100% 0);
                }
                .feature-active .portfolio-page__header__overlay {
                    background: linear-gradient(
                        to right,
                        transparent,
                        var(--yellow-l),
                        transparent
                    );
                }
            `}</style>
            <style jsx>{`
                .portfolio-page {
                    position: relative;
                    background: var(--black);
                    color: #464646;
                    min-height: 75vh;
                    padding-bottom: 120px;
                    max-width: 100%;
                    overflow-x: hidden;
                }
                .feature-active {
                    background: linear-gradient(
                        to right,
                        transparent,
                        var(--yellow-l),
                        transparent
                    );
                }
                header {
                    width: 100%;
                    height: 200px;
                    position: relative;
                    left: 0;
                    top: 0;
                    background: var(--blue-d);
                    display: grid;
                    align-items: start;
                    justify-items: center;
                }
                .portfolio-page__header__overlay__svg {
                    margin: -2px;
                    width: 100%;
                    height: 100px;
                    padding-bottom: 16px;
                    z-index: 75;
                }
                header h1 {
                    margin: 0;
                    line-height: 100%;
                    position: absolute;
                    top: 25%;
                    color: var(--black);
                    text-align: center;
                    width: 100%;
                    pointer-events: none;
                    font-family: var(--flow-font-family);
                    z-index: 100;
                    letter-spacing: 2px;
                    font-size: 38px;
                }
                .portfolio-page__header__background {
                    width: 100%;
                    height: 200px;
                    fill: var(--black);
                    z-index: 25;
                }
                main {
                    position: relative;
                    display: grid;
                    align-items: end;
                    justify-items: center;
                    grid-template-columns: repeat(3, auto);
                    padding: 5vw;
                }
                @media only screen and (max-width: 1800px) {
                    main {
                        grid-template-columns: repeat(2, auto);
                    }
                }
                @media only screen and (max-width: 1200px) {
                    main {
                        grid-template-columns: repeat(1, auto);
                    }
                    header h1 {
                        font-size: calc(14px + 2vw);
                        top: calc(35% - 2vw);
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

export default Portfolio;
