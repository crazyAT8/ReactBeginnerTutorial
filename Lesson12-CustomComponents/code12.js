// This is considered a componenet

function Page12() {
    return (
        <div>
            <img src="ReactImage.png" alt="" width="40px" height="40px"></img>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jorden Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<Page12 />, document.getElementById("root1"));

/*
==================
            Challenge

*/