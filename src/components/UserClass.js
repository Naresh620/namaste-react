import React from "react"
class UserClass extends React.Component{
    constructor(props){
        // super(props)

        this.state={
            count:0,
        };
    }
    render(){
        return(
            <div className="userclass">
                <h1>{this.props.name}</h1>
                <h3>{this.props.Location}</h3>
                <button
                onClick={
                    this.state.count+1
                }
                ></button>
            </div>
        )
    }
};

export default UserClass;