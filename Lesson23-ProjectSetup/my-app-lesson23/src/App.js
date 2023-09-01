import React from 'react';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

export default function App() {
    return(
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById("root"));