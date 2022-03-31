ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById("root"));
                                    //first thing is what do you want to render to the screen
                                        //second is where you want to render it

ReactDOM.render(<p>Hi, my name is Bob!</p>, document.querySelector("#root2"));
    // so render grabs the document object id
        // and in normal javascript its using something like
            // .append or .appendChild to insert the <p> element