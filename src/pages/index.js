import React, {Fragment} from 'react';
import Landing from '../components/landing';
import Cv from '../components/cv';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';

const IndexPage = () => (
    <Fragment>
        <Landing />
        <Cv />
        <Portfolio />
        <Footer />
    </Fragment>
);

export default IndexPage;
