import React, { Fragment, useState, useEffect } from "react"
import Project from "./project.js"
import { Link } from "gatsby"

const projects = [
    {
        title: 'this website',
        description: 'My CV + Portfolio',
        icons: ['react', 'xd'], 
        repo: 'https://github.com/lily-law/cv-portfolio',
        text: ['']
    },
    {
        title: 'Wavy',
        link: 'https://chingu-voyages.github.io/v18-geckos-team-02/',
        repo: 'https://github.com/chingu-voyages/v18-geckos-team-02',
        icons: ['chingu', 'react', 'xd'],
        description: 'A PWA that archives files into a visual timeline',
        text: [
            'Voyage 18: Team project on Chingu',
            'During this project I learnt how to work transparently with others, while improving my communication and planning skills.',
        ],
        screenshot: 'wavy.jpg'
    }, 
    {
        title: 'Dashy', 
        link: 'https://v16-geckos-2-production.netlify.com/', 
        repo: 'https://github.com/chingu-voyages/v16-geckos-team-02',
        screenshot: 'dashy.jpg', 
        icons: ['chingu', 'svelte', 'xd'], 
        description: 'v16-geckos-team-02 - A Chingu team project',
        text: [
            'Voyage 16: Team project on Chingu. Working with and learning a new framework, Svelte made this project interesting to work on.',
            'This ended as a solo effort and it taught me about the value of momentum and perseverance.'
        ]
    },
    {
        title: 'Solo-Koala-54', 
        link: 'https://chingu-solo.github.io/solo-koala-54/', 
        repo: 'https://github.com/Chingu-Solo/solo-koala-54',
        screenshot: 'solo-koala-54.jpg', 
        icons: ['chingu', 'svelte', 'xd'], 
        description: 'A reimplementation of Google Fonts',
        text: [
            'I created this for my Chingu pre-work project. While having fun coding the workings of this site, it felt appropriate to bring a little bit of fun into the design.'
        ]
    },
    {
        title: 'White Raven', 
        link: 'https://white-raven.co.uk', 
        screenshot: 'white-raven.jpg', 
        icons: ['react', 'xd'], 
        description: 'SPA/website for Animal Communicator',
        text: [
            'I was given free rein in creating the design. I developed the website using ReactJS while creating the backend in PHP so it could be easily hosted on any shared hosting plan.', 
            'The landing features a logo that I drew myself and an easter egg of drifting clouds in the background.',
            'For the contact page I created a step by step booking system that collects the users information, processes a paypal payment, and sends out emails.'
        ]
    },
    {
        title: 'U Buzz Tap',
        link: 'https://u-buzz-tap.herokuapp.com/',
        repo: 'https://github.com/lily-law/u-buzz-tap',
        icons: ['nodejs', 'socketio', 'react'],
        description: 'Simple buzzer SPA for multiple remote players',
        text: [
            'During the lockdown we’ve been doing a weekly video chat quiz and it was suggested that we could use a buzzer app that accounts for the connection delays.', 
            'I put this together recently over a couple of weekends.'
        ],
        screenshot: 'u-buzz-tap.jpg'
    },
    {
        title: 'Big Button Timer',
        repo: 'https://github.com/lily-law/bigButtonTimer',
        icons: ['c', 'arduino'],
        screenshot: 'big-button-timer.jpg',
        description: 'A physical device with a big button and an 8 segment display',
        text: [
            'Programmed in C/Arduino, I made this with three modes stopwatch/pomodoro/counter.',
            'Simple and reliable bit of code I use everyday. The big button makes this device, giving it an easy of use a notch above commercial devices I could find.'
        ]
    },
    {
        title: 'grid',
        repo: 'https://github.com/lily-law/grid',
        icons: ['npm', 'js'],
        description: 'A JavaScript grid arrays constructor',
        text: [
            'I made this while working on implimenting a sudoku engine/generator.',
            'It\'s API will translate a given array into rows/coloumns/diagonals/blocks/nths and convert an index to coordinate and vice versa.'
        ]
    },
]

const Portfolio = () => {
    const [feature, setFeature] = useState();
    const [cols, setCols] = useState(1);
    useEffect(() => {
        const findNCols = () => window.innerWidth <= 1200 ? 1 : window.innerWidth <= 1800 ? 2 : 3;
        setCols(findNCols());
        window.onresize = () => setCols(findNCols());
    }, []);
    return (
    <Fragment>
        <div className="portfolio" id="portfolio">
            <header>
                <h1>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="98.426" height="98.426" viewBox="0 0 98.426 98.426"><path d="M2.618-23.188V0h2.55V-10.438h3.6c4.964,0,7.888-2.04,7.888-6.358,0-4.046-2.822-6.392-7.446-6.392Zm2.55,2.244H8.7c3.774,0,5.338,1.462,5.338,4.08,0,2.652-1.428,4.182-5.338,4.182H5.168ZM17.986-7.514A7.715,7.715,0,0,0,25.942.306a7.735,7.735,0,0,0,7.99-7.922,7.69,7.69,0,0,0-7.922-7.956A7.7,7.7,0,0,0,17.986-7.514Zm2.38-.1c0-3.57,2.414-5.882,5.474-5.882A5.514,5.514,0,0,1,31.552-7.65c0,3.366-2.244,5.882-5.576,5.882A5.493,5.493,0,0,1,20.366-7.616Zm24.072-7.956c-1.53,0-3.094,1.19-4.828,3.978v-3.672H37.3V0H39.61V-8.772c.612-2.924,2.618-4.59,4.114-4.59A4.7,4.7,0,0,1,46.58-11.9l1.258-2.006A5.061,5.061,0,0,0,44.438-15.572Zm4.556,2.38h2.958v8.16c0,3.842,1.258,5.338,4.216,5.338a7.382,7.382,0,0,0,3.5-.918V-2.788a6.3,6.3,0,0,1-3.2.986c-1.9,0-2.21-1.36-2.21-3.23v-8.16H58.99v-2.074H54.264v-4.692l-2.312,1.326v3.366H48.994ZM68.408-23.46c-3.2,0-5.2,2.346-5.2,6.6v1.6H60.962v2.074h2.244V0h2.312V-13.192h3.23v-2.074h-3.23V-16.83c0-3.162,1.054-4.454,3.23-4.454a5.288,5.288,0,0,1,1.938.34V-23.12A7.822,7.822,0,0,0,68.408-23.46ZM70.04-7.514A7.715,7.715,0,0,0,78,.306a7.735,7.735,0,0,0,7.99-7.922,7.69,7.69,0,0,0-7.922-7.956A7.7,7.7,0,0,0,70.04-7.514Zm2.38-.1c0-3.57,2.414-5.882,5.474-5.882A5.514,5.514,0,0,1,83.606-7.65c0,3.366-2.244,5.882-5.576,5.882A5.493,5.493,0,0,1,72.42-7.616ZM89.488-23.188V0H91.8V-23.188ZM96.288,0H98.6V-15.266H96.288Zm0-21.352v2.958H98.6v-2.958ZM102.1-7.514a7.715,7.715,0,0,0,7.956,7.82,7.735,7.735,0,0,0,7.99-7.922,7.69,7.69,0,0,0-7.922-7.956A7.7,7.7,0,0,0,102.1-7.514Zm2.38-.1c0-3.57,2.414-5.882,5.474-5.882a5.514,5.514,0,0,1,5.712,5.848c0,3.366-2.244,5.882-5.576,5.882A5.493,5.493,0,0,1,104.482-7.616Z" transform="translate(14.738 100.061) rotate(-45)"/></svg>  
                    </Link>
                </h1>
            </header>
            <main>
                {projects.map((data, index) => <Project key={data.title} {...{...data, index, feature, setFeature}} />)}
                {Number.isInteger(feature) &&
                <aside className="feature">
                    <figure>
                        <a href={projects[feature].link}  target="_blank" rel="noreferrer">
                            <img src={"/projects/"+projects[feature].screenshot} alt="" />
                        </a>
                    </figure>
                    <section className="text">
                        {projects[feature].text.slice(0).map(paragraph => (typeof paragraph === "string") ? <p key={paragraph }>{paragraph}</p> : paragraph)}
                    </section>
                </aside>}
            </main>
        </div>
        <style jsx>{`
            .portfolio {
                position: relative;
                background: var(--black);
                color: #464646;
                min-height: 75vh;
                padding-bottom: 120px;
                max-width: 100%;
                overflow-x: hidden;
            }
            main {
                position: relative;
                display: grid;
                place-items: end center;
                grid-template-columns: repeat(3, auto);
            }
            header {
                width: 100%;
                height: 200px;
                left: 0;
                top: 0;
                background: var(--blue-d);
                display: grid;
                place-items: start center;
            }
            header::before {
                content: '';
                width: 100%;
                height: 200px;
                position: absolute;
                clip-path: polygon(50% 0, 0 100%, 100% 100%);
                shape-outside: polygon(50% 100%, 0 0, 100% 0);
                background: var(--black);
            }
            header h1 {
                margin: 0;
                width: 50%;
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
            .feature {
                order: ${(cols*10)*(1 + Math.floor(feature/cols))-9};
                width: calc(550px * ${cols});
                max-width: 80vw;
                grid-column-start: span 3;
                display: grid;
                grid-template-columns: 1fr 1fr;
                place-items: center center;
                background: var(--blue-d);
                color: var(--blue-l);
                border: 3px solid var(--yellow-d);
                margin-top: -3px;
                box-shadow: 1px 1px 16px var(--yellow-l);
                padding: 16px;
            }
            .feature section {
                margin: 2vw;
            }
            img {
                max-width: 100%;
            }
            @media only screen and (max-width: 1800px) {
                main {
                    grid-template-columns: repeat(2, auto);
                }
                .feature {
                    grid-column-start: span 2;
                }
            }
            @media only screen and (max-width: 1200px) {
                main {
                    grid-template-columns: repeat(1, auto);
                }
                .feature {
                    grid-column-start: span 1;
                    grid-template-columns: 1fr;
                }
            }
            
        `}</style>
    </Fragment>);
  }

  export default Portfolio