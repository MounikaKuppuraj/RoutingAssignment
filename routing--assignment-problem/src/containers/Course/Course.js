import React, { Component } from 'react';

class Course extends Component {
    state={
        title:''
    }
    componentDidMount(){
        const value=this.queryTitle()
        this.setState({title:value})
    }
    componentDidUpdate(){
        const value=this.queryTitle()
        if(this.state.title!==value){
            this.setState({title:value})
        }
    }
    queryTitle=()=>{
        const query=new URLSearchParams(this.props.location.search)
        for (const [,value] of query.entries()) {
           return value;
        }
    }
    render () {
        return (
            <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;