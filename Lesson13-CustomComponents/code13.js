// Custom Components

// This is considered a componenet

function Page13() {
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

ReactDOM.render(<Page13 />, document.getElementById("root1"));


/*==================
       Challenge
===================*/
/*
Part 1: Create a page of your own using a custom Page compnenet
    - It should return an ordered list
        that says something
    - Render your list to the page
Part 2: 
    - Add a "header" element with a nested "nav" element.
        Inside the "nav", include a "img" element with the image of the React logo
            inside (src="./react-logo.png")
                and make sure to set the width to a reasonable size
    - Add an "h1" with some text 
        describing the page
            placed above the ordered list
    - Add a "footer" after the list that says:
        "copyright symbol 20xx <last name here> development. All rights reserved."
*/

function ChallengeTutorial13() {
    return (
        <div>
            <h1>
                <nav>
                    <img src="ReactImage.png" alt="" width="40px" height="40px"></img>
                </nav>
                Challenge 13
            </h1>
            <ol>
                <li>something</li>
                <li>something</li>
                <li>something</li>
                <li>something</li>
            </ol>
            <footer><small>&copy; 20xx Watson development. All rights reserved</small></footer>
        </div>
        
    )
}

ReactDOM.render(<ChallengeTutorial13 />, document.getElementById("root2"));


