function Navbar() {
    return ( 
        <nav className="navbar bavbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="narbar-toggle" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggle-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item"> 
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li>
                        <a className="nav-link dropdown-togle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="bavbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    )
}

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple h1 element that says "I'm learning React!"
// Afterward, render it below the Navbar (which you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />,
        <MainContent />,
    </div>,
    document.getElementById("example1L6")
)

/*
Challenge- recreate the above line of code in vanilla JS 
by creating and appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root 
*/ 

//Vanilla JavaScript
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

// Same as

//React
ReactDOM.render(<h1 className="header">Hello React!</h1>, document.getElementById("root2"));