const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.classNAme = "header"
console.log(h1)

// <h1 className="header">

// JSX (javascript and XML)
//ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"));
// instead

const element = <h1 className="header">This is JSX</h1>
console.log(element);

/*
{                                           Basically returns a JavaScript Object
    type: "h1",
    key: null, 
    ref: null,
    props: {
        className: "header",
        children: "This is JSX"
    },
    _owner: null,
    _store: {}
}
*/

ReactDOM.render(element, document.getElementById("root"));

// Putting two elements next to one another will produce and Error
/*
Ex:
ReactDOM.render(
    <h1 className="header">This is JSX</h1><p>This is a paragraph</p>
    document.getElementById("root")
)
*/

// Doesn't mean you can't have two elements in the same rendering
    // There is jus a rule in React that
        // if there are multiple elements, 
            // they need to be wrapped in a parent element

ReactDOM.render(
    <div>
        <h1 className="header2">This is also JSX</h1>
        <p>This is the second paragraph</p>
    </div>,
    document.getElementById("root2")
)

// or 

const page = (
    <div>
        <h1 className="header3">This is the thrid JSX Example</h1>
        <p>This is the third paragraph</p>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById("root3")
)

/*                                                    
                                                            =====================
                                                                                Challenge
                                                            ======================
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing", "About", and "Contact"
        - Don't worry about styling yet- it'll just be plain-looking HTML for now
*/

const navBar = (
    <nav>
        <h1>My Website</h1>
        <ul>                                                
            <li>Pricing</li>                            
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navBar,
    document.getElementById("root4")
)

