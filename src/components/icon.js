import React, {Fragment} from "react"

const icons = {
    js: {
        img: 'jsicon.svg',
        title: 'JavaScript - A programming language that conforms to the ECMAScript specification',
        link: 'https://en.wikipedia.org/wiki/JavaScript'
    },
    html5: {
        img: 'html5logo.svg',
        title: 'Hypertext Markup Language (HTML) - The standard markup language for documents designed to be displayed in a web browser',
        link: 'https://en.wikipedia.org/wiki/HTML'
    },
    css: {
        img: 'cssicon.svg',
        title: 'Cascading Style Sheets (CSS) - A style sheet language used for describing the presentation of a document written in a markup language like HTML',
        link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'
    },
    regex: {
        img: 'regexicon.svg',
        title: 'Regular expression (regex) - A sequence of characters that define a search pattern',
        link: 'https://en.wikipedia.org/wiki/Regular_expression'
    },
    bash: {
        img: 'bashlogo.svg', 
        title: 'Bash - An sh-compatible shell that incorporates useful features from the Korn shell (ksh) and C shell (csh)',
        link: 'https://www.gnu.org/software/bash/'
    },
    react: {
        img: 'reacticon.svg',
        title: 'React - A JavaScript library for building user interfaces',
        link: 'https://reactjs.org/'
    },
    next: {
        img: 'nextjslogo.svg',
        title: 'Next.js by ZEIT - The React Framework',
        link: 'https://nextjs.org/'
    },
    svelte: {
        img: 'sveltelogo.svg',
        title: 'Svelte • Cybernetically enhanced web apps',
        link: 'https://svelte.dev/'
    },
    xd: {
        img: 'xdicon.svg',
        title: 'Adobe XD - A vector-based user experience design tool',
        link: 'https://www.adobe.com/uk/products/xd.html'
    },
    chingu: {
        img: 'chingu.svg',
        title: 'Chingu - Collaborative learning cohorts for developers',
        link: 'https://www.chingu.io/'
    },
    lilylaw: {
        img: 'lilylawicon.svg',
        title: 'Lily Law - Developer'
    },
    nodejs: {
        img: 'nodejs.svg',
        title: 'Node.js - JavaScript runtime environment that executes JavaScript code outside of a web browser',
        link: 'https://nodejs.org/'
    },
    php: {
        img: 'php.svg',
        title: 'PHP - A popular general-purpose scripting language that is especially suited to web development',
        link: 'https://www.php.net/'
    },
    npm: {
        img: 'npm.svg',
        title: 'npm - A package manager for the JavaScript programming language',
        link: 'https://www.npmjs.com/'
    },
    repo: {
        img: 'repo.svg',
        title: 'Repo Link',
    },
    deploy: {
        img: 'deployed.svg',
        title: 'Deployed App',
    },
    socketio: {
        img: 'socketio.svg',
        title: 'Socket.IO - Enables realtime, bi-directional communication between web clients and servers',
        link: 'https://socket.io/'
    },
    arduino: {
        img: 'arduinologo.svg',
        title: 'Arduino - An open-source hardware and software company',
        link: 'https://www.arduino.cc/'
    },
    c: {
        img: 'c.svg',
        title: 'C - A general-purpose, procedural computer programming language',
        link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    mydiscord: {
        img: 'discord.svg',
        title: 'Lily Law\'s Discord Server - Come in and chat!',
        link: 'https://discord.com/invite/aMzzSBVENg'
    },
    mygithub: {
        img: 'mygithub.svg',
        title: 'Lily Law\'s GitHub - A student of JavaScript',
        link: 'https://github.com/lily-law'
    },
    myemail: {
        img: 'gmail.svg',
        title: 'Lily Law\'s Email - Message Me!',
        link: 'mailto:llleaflily@gmail.com'
    },
    myskype: {
        img: 'skype.svg',
        title: 'Lily Law\'s Skype Address - Say Hi!',
        link: 'https://join.skype.com/invite/dyug0KPaVxb1'
    },
    agile: {
        img: 'agile.svg',
        title: 'Agile software development - Advocates adaptive planning, evolutionary development, early delivery, and continual improvement',
        link: 'https://en.wikipedia.org/wiki/Agile_software_development'
    },
    github: {
        img: 'octocat.png',
        title: 'GitHub - Brings together the world\'s largest community of developers to discover, share, and build better software',
        link: 'https://github.com/'
    }
}

const Icon = ({name, className='', link}) => {
    if (icons.hasOwnProperty(name)) {
        const {img, title} = icons[name]
        let url = typeof link === 'string' ? link : icons[name].link ? icons[name].link : null
        return (<Fragment>
            {link && url ? <a href={url} className={className} target="_blank" rel="noreferrer">
                <img src={'/icons/'+img} alt={name} title={title} />
            </a> : <figure className={className}>
                <img src={'/icons/'+img} alt={name} title={title} />
            </figure>}
            <style jsx>{`
            a, figure {
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
        </Fragment>)
    }
    else {
        return <div>- {name} -</div>
    }
}

export default Icon