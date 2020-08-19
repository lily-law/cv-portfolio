import React, { Fragment, useState } from "react"
import Project from "./project.js"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import Feature from "./feature"

const projects = [
    {
        title: 'Mars Photo API',
        link: 'https://chingu-solo-mars-rover-api.herokuapp.com/',
        repo: 'https://github.com/lily-law/chingu-solo-mars-rover-project',
        icons: ['nodejs', 'react'],
        description: 'Web app to search and view photos taken by mars rovers. A Chingu solo project.',
        points: {
            'Overview': {
                text: [
                    `Backend on this is a simple node.js express server, which 
                    expose two main routes: /api/photos/ and /api/manifests/.`,
                    `These are used as a gateway to NASA's Mars Photos API, 
                    protecting my private API key and reducing any unnecessary 
                    outbound requests.
                    Behind these two routes I've created 
                    four API methods:`,
                    ` - getPhotoList: calls NASA's API and returns an array of 
                     upto 25 photo data objects and a url used by the client for 
                     pagenation (shortcut link to the next set of upto 25)
                    `,` - getManifest: calls NASA's API and returns a summary of 
                     the data available on given rover, this is used in the 
                     client to limit the avalible filters and queries, this way a 
                     users search will never return an empty result 
                    `,` - validatePhotosRequest and validateManifestRequest: checks 
                     if any of the request parameters are invalid and returns 
                     user friendly error messages
                    `
                ],
                display: {
                    image: 'mars-photo-api.png'
                },
            },
            'Design': {
                text: [
                    `For the frontend I've kept it simple and clean. By creating a 
                    collapsable sidebar UI, development on this was quick and easy. 
                    Users are able to search for Mars rover photos, scroll through
                    all result (pagination is automatically triggered), and click 
                    on results for a full view. A status component keeps users 
                    informed about the apps current processes, completed tasks, and
                    any errors.`
                ],
                display: {
                    image: 'mars-photo-api-2.png'
                }
            },
            
        }
    },
    {
        title: 'White Raven', 
        link: 'https://white-raven.co.uk', 
        icons: ['react', 'xd'], 
        description: 'Unique web design and developments for an Animal Communicator',
        points: {
            'Overview': {
                text: [
                    `The landing page has animated drifting clouds as an easter egg.`,
                    `I allocated a large chunk of the time spent on this project to the design.
                    The client desired something unique, bright, and natureful`
                ],
                display: {
                    image: 'white-raven.png'
                } 
            },
            'Booking System': {
                text: [
                    `For each booking the client requires a fair chunk of infomation from users, 
                    so make this less daunting I created a booking modal that breaks this down 
                    into smaller steps.`,
                ],
                display: {
                    image: 'white-raven-2.png'
                }
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
                    needing to store anything.`
                ],
                display: {
                    image: 'u-buzz-tap.png'
                } 
            },
            'The Buzz Process' : {
                text: [
                    `When a user hits the buzzer and the server recieves a 'buzzed' event, it sends 
                    out a ping to each client. Once each client has responded to the ping
                    the server can end the round and announce the winner.`, `If between the ping process the server 
                    recieves a 'buzzed' event from another user it calculates when their buzzer was activated, 
                    accounting for connection delays and then announces all who buzzed and how many milliseconds 
                    runner ups were out by`
                ],
                display: {
                    image: 'u-buzz-tap-2.png'
                } 
            }
        }
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
                    `During this project I learnt how to work transparently with others, while improving 
                    my communication and planning skills.`,
                ],
                display: {
                    image: 'wavy.jpg'
                } 
            }
        }
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
                    'Voyage 16: Team project on Chingu. Working with and learning a new framework, Svelte made this project interesting to work on.',
                    'This ended as a solo effort and it taught me about the value of momentum and perseverance.'
                ],
                display: {
                    image: 'dashy.jpg'
                } 
            }
        }
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
                    'I created this for my Chingu pre-work project. While having fun coding the workings of this site, it felt appropriate to bring a little bit of fun into the design.'
                ],
                display: {
                    image: 'solo-koala-54.jpg'
                } 
            }
        }
    },
    {
        title: 'Big Button Timer',
        repo: 'https://github.com/lily-law/bigButtonTimer',
        icons: ['c', 'arduino'],
        description: 'A physical device with a big button and an 8 segment display',
        points: {
            'Overview': {
                text: [
                    'Programmed in C/Arduino, I made this with three modes stopwatch/pomodoro/counter.',
                    'Simple and reliable bit of code I use everyday. The big button makes this device, giving it an ease of use a notch above commercial devices I could find.'
                ],
                display: {
                    image: 'big-button-timer.jpg'
                } 
            }
        }
    },
]

const Portfolio = () => {
    const [feature, setFeature] = useState(null)
    const flickeringAnimation = useSpring({
        to: async (next, cancel) => {
            async function flicker() {
                let nTimes = Math.floor((Math.random() * 9) + 3)
                const flick = async () => {
                    if (Math.floor(Math.floor((Math.random() * 2) + 0))) {
                        await next({background: "radial-gradient(var(--yellow-d), black, black)"})
                    }
                    else {
                        await next({background: "radial-gradient(var(--yellow-l), black, black)"})
                    }
                    await next({background: "var(--black)"})
                    if (--nTimes > 0) {
                        setTimeout(flick, (Math.floor((Math.random() * 20) + 5) * 10))
                    }
                }
                await flick()
                setTimeout(flicker, (Math.floor((Math.random() * 50) + 5) * 100) + 2000)
            }
            flicker()
        },
        from: {background: "var(--black)"}
    })
    const [animationProps, setAnimationProps] = useState(flickeringAnimation);
    const handleSetFeature = p => {
        if (Number.isInteger(p)) {
            setAnimationProps(null)
        }
        else {
            setAnimationProps(flickeringAnimation)
        }
        setFeature(p)
    }
    return (
    <Fragment>
        <div className={"portfolio-page"+(Number.isInteger(feature) ? " feature-active" : "")} id="portfolio">
            <header>
                <animated.div style={animationProps} className="portfolio-page__header__overlay">
                    <h1>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="98.426" height="98.426" viewBox="0 0 98.426 98.426"><path d="M2.618-23.188V0h2.55V-10.438h3.6c4.964,0,7.888-2.04,7.888-6.358,0-4.046-2.822-6.392-7.446-6.392Zm2.55,2.244H8.7c3.774,0,5.338,1.462,5.338,4.08,0,2.652-1.428,4.182-5.338,4.182H5.168ZM17.986-7.514A7.715,7.715,0,0,0,25.942.306a7.735,7.735,0,0,0,7.99-7.922,7.69,7.69,0,0,0-7.922-7.956A7.7,7.7,0,0,0,17.986-7.514Zm2.38-.1c0-3.57,2.414-5.882,5.474-5.882A5.514,5.514,0,0,1,31.552-7.65c0,3.366-2.244,5.882-5.576,5.882A5.493,5.493,0,0,1,20.366-7.616Zm24.072-7.956c-1.53,0-3.094,1.19-4.828,3.978v-3.672H37.3V0H39.61V-8.772c.612-2.924,2.618-4.59,4.114-4.59A4.7,4.7,0,0,1,46.58-11.9l1.258-2.006A5.061,5.061,0,0,0,44.438-15.572Zm4.556,2.38h2.958v8.16c0,3.842,1.258,5.338,4.216,5.338a7.382,7.382,0,0,0,3.5-.918V-2.788a6.3,6.3,0,0,1-3.2.986c-1.9,0-2.21-1.36-2.21-3.23v-8.16H58.99v-2.074H54.264v-4.692l-2.312,1.326v3.366H48.994ZM68.408-23.46c-3.2,0-5.2,2.346-5.2,6.6v1.6H60.962v2.074h2.244V0h2.312V-13.192h3.23v-2.074h-3.23V-16.83c0-3.162,1.054-4.454,3.23-4.454a5.288,5.288,0,0,1,1.938.34V-23.12A7.822,7.822,0,0,0,68.408-23.46ZM70.04-7.514A7.715,7.715,0,0,0,78,.306a7.735,7.735,0,0,0,7.99-7.922,7.69,7.69,0,0,0-7.922-7.956A7.7,7.7,0,0,0,70.04-7.514Zm2.38-.1c0-3.57,2.414-5.882,5.474-5.882A5.514,5.514,0,0,1,83.606-7.65c0,3.366-2.244,5.882-5.576,5.882A5.493,5.493,0,0,1,72.42-7.616ZM89.488-23.188V0H91.8V-23.188ZM96.288,0H98.6V-15.266H96.288Zm0-21.352v2.958H98.6v-2.958ZM102.1-7.514a7.715,7.715,0,0,0,7.956,7.82,7.735,7.735,0,0,0,7.99-7.922,7.69,7.69,0,0,0-7.922-7.956A7.7,7.7,0,0,0,102.1-7.514Zm2.38-.1c0-3.57,2.414-5.882,5.474-5.882a5.514,5.514,0,0,1,5.712,5.848c0,3.366-2.244,5.882-5.576,5.882A5.493,5.493,0,0,1,104.482-7.616Z" transform="translate(14.738 100.061) rotate(-45)"/></svg>  
                        </Link>
                    </h1>
                </animated.div>
            </header>
            <main>
                {projects.map((data, index) => <Project key={data.title} {...{...data, index, feature, setFeature: handleSetFeature}} />)}
                {Number.isInteger(feature) && <Feature key={'feature'+feature} {...{feature, projects}} />}
            </main>
        </div>
        <style jsx global>{`
            .portfolio-page__header__overlay {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 1px;
                clip-path: polygon(50% 0, 0 100%, 100% 100%);
                shape-outside: polygon(50% 100%, 0 0, 100% 0);
                background: var(--black);
            }
            .feature-active .portfolio-page__header__overlay {
                background: linear-gradient(to right, black, var(--yellow-l), black);
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
                background: linear-gradient(to right, black, var(--yellow-l), black);
            }
            header {
                width: 100%;
                height: 200px;
                position: relative;
                left: 0;
                top: 0;
                background: var(--blue-d);
                display: grid;
                place-items: start center;
            }
            header h1 {
                margin: 0;
                width: 100%;
                height: 100px;
                clip-path: polygon(50% 0, 0 100%, 100% 100%);
                shape-outside: polygon(50% 100%, 0 0, 100% 0);
                background: var(--grey-xd);
                display: grid;
                place-items: end center;
            }
            header svg {
                transform: scaleY(-1) rotate(45deg);
                fill: var(--black);
                margin-top: 25px;
            }
            main {
                position: relative;
                display: grid;
                place-items: end center;
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
            }
            
        `}</style>
    </Fragment>);
  }

  export default Portfolio