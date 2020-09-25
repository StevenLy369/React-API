import React from 'react';

makeApiCall = () => {
    fetch (`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(
        (jsonifiedResponse) => {
            this.setState({
                isloaded:true,
                headlines:jsonifiedResponse.results
            });
        })
        .catch((error) => {
            this.setState({
                isloaded:true,
                error
            })
        })
}





class Headlines extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                error:null,
                isLoaded:false,
                headlines:[]
            }
        
    }

    render(){
        return(
            <h1>HI</h1>
        )




    }
}