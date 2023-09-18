import React from 'react';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ProfilePic from './Components/ProfilePic';
import Links from './Components/Links';
import Title from './Components/Title';

export default function App() {
    return(
        <div className="container1">
            <div className="container2">
                <ProfilePic />
                <Title />
                <Links />
                <Main />
                <Footer />
            </div>
        </div>
    )
}