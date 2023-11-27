import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }

    render(){
        // console.log("Parent Render");
        return (
            <div>
                <h1>This is about page</h1>
                <h2>This is Namaste react series</h2>
                <h2><UserContext.Consumer>
                    {({loggedInUser})=><h2>{loggedInUser}</h2>}
                    </UserContext.Consumer></h2>
               
                <UserClass name={"First"} 
                    location={"Delhi"}/>
                    
            </div>
        )
    }
}

export default About;