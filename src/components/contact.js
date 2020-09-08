import React, { Fragment } from 'react';
import Icon from './icon';
import { animated as a } from 'react-spring'

const Links = ({nav, interpIcon}) => {
    const icons = [
        "mygithub",
        "myemail",
        "myskype",
        "mydiscord"
    ];
    const addMotion = icon => ( // TODO link in rotation animation 
        <a.div className="landing__contact__link" style={{transform: interpIcon}} >
            <Icon name={icon} link />
        </a.div>
    );
    return (<Fragment>
        {icons.map(icon => nav ? <Fragment key={icon+'motionicon'}>{addMotion(icon)}</Fragment> : <Icon key={icon+'icon'} name={icon} link />)}
        <style jsx global>{`
            .landing__contact__link {
                display: grid;
                align-items: center;
                justify-items: center;
            }
        `}</style>
    </Fragment>);
}

export default Links