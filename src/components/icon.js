import React, {Fragment} from 'react';
import agile from '../images/icons/agile.svg';
import arduinologo from '../images/icons/arduinologo.svg';
import bashlogo from '../images/icons/bashlogo.svg';
import c from '../images/icons/c.svg';
import chingu from '../images/icons/chingu.svg';
import cssicon from '../images/icons/cssicon.svg';
import deployed from '../images/icons/deployed.svg';
import discord from '../images/icons/discord.svg';
import figma from '../images/icons/figma.svg';
import giticon from '../images/icons/giticon.png';
import gmail from '../images/icons/gmail.svg';
import html5logo from '../images/icons/html5logo.svg';
import jsicon from '../images/icons/jsicon.svg';
import lilylawicon from '../images/icons/lilylawicon.svg';
import mongodb from '../images/icons/mongodb.svg';
import mygithub from '../images/icons/mygithub.svg';
import mylinkedin from '../images/icons/mylinkedin.png';
import nextjslogo from '../images/icons/nextjslogo.svg';
import nodejs from '../images/icons/nodejs.svg';
import npm from '../images/icons/npm.svg';
import octocat from '../images/icons/octocat.png';
import php from '../images/icons/php.svg';
import reacticon from '../images/icons/reacticon.svg';
import regexicon from '../images/icons/regexicon.svg';
import repo from '../images/icons/repo.svg';
import skype from '../images/icons/skype.svg';
import socketio from '../images/icons/socketio.svg';
import sveltelogo from '../images/icons/sveltelogo.svg';
import typescript from '../images/icons/typescript.svg';
import xdicon from '../images/icons/xdicon.svg';

const icons = {
    js: {
        img: jsicon,
        title:
            'JavaScript - A programming language that conforms to the ECMAScript specification',
        link: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    html5: {
        img: html5logo,
        title:
            'Hypertext Markup Language (HTML) - The standard markup language for documents designed to be displayed in a web browser',
        link: 'https://en.wikipedia.org/wiki/HTML',
    },
    css: {
        img: cssicon,
        title:
            'Cascading Style Sheets (CSS) - A style sheet language used for describing the presentation of a document written in a markup language like HTML',
        link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
    },
    regex: {
        img: regexicon,
        title:
            'Regular expression (regex) - A sequence of characters that define a search pattern',
        link: 'https://en.wikipedia.org/wiki/Regular_expression',
    },
    bash: {
        img: bashlogo,
        title:
            'Bash - An sh-compatible shell that incorporates useful features from the Korn shell (ksh) and C shell (csh)',
        link: 'https://www.gnu.org/software/bash/',
    },
    react: {
        img: reacticon,
        title: 'React - A JavaScript library for building user interfaces',
        link: 'https://reactjs.org/',
    },
    next: {
        img: nextjslogo,
        title: 'Next.js by ZEIT - The React Framework',
        link: 'https://nextjs.org/',
    },
    svelte: {
        img: sveltelogo,
        title: 'Svelte • Cybernetically enhanced web apps',
        link: 'https://svelte.dev/',
    },
    xd: {
        img: xdicon,
        title: 'Adobe XD - A vector-based user experience design tool',
        link: 'https://www.adobe.com/uk/products/xd.html',
    },
    chingu: {
        img: chingu,
        title: 'Chingu - Collaborative learning cohorts for developers',
        link: 'https://www.chingu.io/',
    },
    lilylaw: {
        img: lilylawicon,
        title: 'Lily Law - Developer',
    },
    nodejs: {
        img: nodejs,
        title:
            'Node.js - JavaScript runtime environment that executes JavaScript code outside of a web browser',
        link: 'https://nodejs.org/',
    },
    php: {
        img: php,
        title:
            'PHP - A popular general-purpose scripting language that is especially suited to web development',
        link: 'https://www.php.net/',
    },
    npm: {
        img: npm,
        title:
            'npm - A package manager for the JavaScript programming language',
        link: 'https://www.npmjs.com/',
    },
    repo: {
        img: repo,
        title: 'Repo Link',
    },
    deploy: {
        img: deployed,
        title: 'Deployed App',
    },
    socketio: {
        img: socketio,
        title:
            'Socket.IO - Enables realtime, bi-directional communication between web clients and servers',
        link: 'https://socket.io/',
    },
    arduino: {
        img: arduinologo,
        title: 'Arduino - An open-source hardware and software company',
        link: 'https://www.arduino.cc/',
    },
    c: {
        img: c,
        title:
            'C - A general-purpose, procedural computer programming language',
        link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    mydiscord: {
        img: discord,
        title: "Lily Law's Discord Server - Come in and chat!",
        link: 'https://discord.com/invite/aMzzSBVENg',
    },
    mygithub: {
        img: mygithub,
        title: "Lily Law's GitHub - A student of JavaScript",
        link: 'https://github.com/lily-law',
    },
    myemail: {
        img: gmail,
        title: "Lily Law's Email - Message Me!",
        link: 'mailto:llleaflily@gmail.com',
    },
    myskype: {
        img: skype,
        title: "Lily Law's Skype Address - Say Hi!",
        link: 'https://join.skype.com/invite/dyug0KPaVxb1',
    },
    agile: {
        img: agile,
        title:
            'Agile software development - Advocates adaptive planning, evolutionary development, early delivery, and continual improvement',
        link: 'https://en.wikipedia.org/wiki/Agile_software_development',
    },
    github: {
        img: octocat,
        title:
            "GitHub - Brings together the world's largest community of developers to discover, share, and build better software",
        link: 'https://github.com/',
    },
    mylinkedin: {
        img: mylinkedin,
        title: "Lily Law's Linkedin profile",
        link: 'https://www.linkedin.com/in/lily-law-66602b1a3/',
    },
    git: {
        img: giticon,
        title:
            'Git - A distributed version-control system for tracking changes in source code during software development',
        link: 'https://git-scm.com/',
    },
    typescript: {
        img: typescript,
        title: 'TypeScript - A strict syntactical superset of JavaScript',
        link: 'https://www.typescriptlang.org/',
    },
    mongodb: {
        img: mongodb,
        title:
            'MongoDB - A source-available cross-platform document-oriented database program',
        link: 'https://www.mongodb.com/',
    },
    figma: {
        img: figma,
        title: 'Figma - A vector graphics editor and prototyping tool',
        link: 'https://www.figma.com/',
    },
};

const Icon = ({name, className = '', link}) => {
    if (icons.hasOwnProperty(name)) {
        const {img, title} = icons[name];
        let url =
            typeof link === 'string'
                ? link
                : icons[name].link
                ? icons[name].link
                : null;
        return (
            <Fragment>
                {link && url ? (
                    <a
                        href={url}
                        className={className}
                        target="_blank"
                        rel="noreferrer">
                        <img src={img} alt={name} title={title} />
                    </a>
                ) : (
                    <figure className={className}>
                        <img src={img} alt={name} title={title} />
                    </figure>
                )}
                <style jsx>{`
                    a,
                    figure {
                        position: relative;
                        margin: 8px;
                    }
                    a {
                        cursor: pointer;
                    }
                    img {
                        position: relative;
                        max-width: 100%;
                        height: 40px;
                        margin: 0;
                    }
                    .big img {
                        height: 120px;
                    }
                `}</style>
            </Fragment>
        );
    } else {
        return <div>- {name} -</div>;
    }
};

export default Icon;
