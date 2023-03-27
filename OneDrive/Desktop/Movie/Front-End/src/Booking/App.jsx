import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Final from './Final';
import Nav from './Nav';
import Heading from './Heading';
import Footer from './Footer';
import './Mediaquery.css';

const App=()=>{
    return(
        <>
        <Nav/>
        <Heading/>
        <Final/>
        <Footer/>
        </>
    )
}
export default App;