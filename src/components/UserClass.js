import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            userInfo:{
                name:"dummy",
            }
        }
        // console.log(this.props.name + "child Constructor");

    }

    async componentDidMount(){
        // console.log(this.props.name + "child Component Did Mount");
        //Api call
        
        const data= await fetch("https://api.github.com/users/amananurag20");
        const json= await data.json();

        this.setState({
            userInfo:json,
        })
        
        console.log(json);
    } 
componentDidUpdate(){ 
    console.log("Component Did update");
}
componentWillUnmount(){
    console.log("componenet will Unmount");
}
    render() {
        const { name, location, avatar_url } = this.state.userInfo;
          
        // console.log(this.props.name + "child Render");
        return (
            <div className="user-card">
                              
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <img src={avatar_url}/>
                <h4>Contact: @amananurag</h4>
            </div>
        );
    };
};

export default UserClass;