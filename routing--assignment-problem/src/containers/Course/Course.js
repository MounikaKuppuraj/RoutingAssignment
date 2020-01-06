import React, { Component } from 'react';

class Course extends Component {
    state={
        title:''
    }
    componentDidMount(){
        this.queryTitle()
    }
    queryTitle=()=>{
        const query=new URLSearchParams(this.props.location.search)
        for (const [key,value] of query.entries()) {
           this.setState({title:value})
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