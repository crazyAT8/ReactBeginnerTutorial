


function ChallengeTutorial16() {
    return (
        <div>
            <header>
                <nav>
                    <img src="ReactImage.png" alt="" width="40px" height="40px"></img>
                </nav>
            </header>
            <h1>
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

ReactDOM.render(<ChallengeTutorial16 />, document.getElementById("root1"));



/*
Mini Challenge
    Move the 'header' element
        from Page into its own component
            called "Header"
*/


function Header() {
    return (
        <header>
            <nav>
                <img src="ReactImage.png" alt="" width="40px" height="40px"></img>
            </nav>
        </header>
    )
}

function Body() {
    return (
        <div>
            <h1>
                Challenge 16
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

ReactDOM.render(<Header />, document.getElementById("root2"));
ReactDOM.render(<Body />, document.getElementById("root3"));

/*===================
        Challenge
===================*/
/*
    - Move the "Footer" into its own component
        called "Footer" 
            and render tjat component
                inside the Page component
    - Mov the "h1" and "ol" together
        into another component
            called "MainContent"
                and render inside 
                    Page as well
*/

function MainContent() {
    return (
        <div>
            <h1>
                Challenge 16
            </h1>
            <ol>
                <li>something</li>
                <li>something</li>
                <li>something</li>  
                <li>something</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer><small>&copy; 20xx Watson development. All rights reserved</small></footer>
    )
}

function Page() {
    return (
        <div>
            <header>
            <nav>
                <img src="ReactImage.png" alt="" width="40px" height="40px"></img>
            </nav>
            </header>
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Page />, document.getElementById("root4"));