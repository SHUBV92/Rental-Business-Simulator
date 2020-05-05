import React, { Component } from "react";
import Axios from 'axios';

class Bookings extends React.component {
    constructor(props) {
        super(props)
        this.state = {
            message : "this is a template component",
            response : ""
        }
    }

    handleRequest = async () => { 
        let response = await Axios.get('/home')
        this.setState({response : response.data })
    }

    componentDidMount() {
        this.handleRequest()
    }

    render () {
        return (
            <div>
                <h1>Rental Car Service</h1>
                {/* <p>{this.state.message}</p> */}
                {/* <p>{this.state.response}</p> */}
            </div>
        )
    }
}

export default Bookings 