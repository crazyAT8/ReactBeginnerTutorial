/*=======================
        Challenge
=========================

- Add an "ul"
    inside the Header's "nav"
        and create the following
            "li's": "Pricing", "About", & "Contact"
- Using flexbox,
    line up the nav items horizontally,
        and put them inline with the 
            React Logo
*/



function Header() {
    return (
        <div>
            <header>
                <nav className="nav-whole">
                    <img src="ReactImage.png" alt="reactLogo" id="reactLogo"></img>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <MainContent />
            <Footer />
        </div>
    )
}

function MainContent() {
    return (
        <div>
            <h1>
                Challenge 17
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

ReactDOM.render(<Header />, document.getElementById("root1"));