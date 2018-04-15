import React, {Component} from 'react';
import axios from 'axios';



class Details extends React.Component{
    
    constructor(){
        super();
        
        this.state = {
            details : []
        }
    }
    
    componentDidMount(id){
        console.log(this.props.match.params.id)
//        axios.get(`http://localhost:4000/company/${this.props.match.params.id}`)
        axios.get('http://localhost:4000/company/'+this.props.match.params.id)
            .then(response=>{   
            console.log(response.data);
            this.setState({details : response.data.details});
            }).catch(error=>{console.log(error)});
                   
    }
    
    render(){
        
        const {details} = this.state
        
        return (
            <div>
                Company {this.props.match.params.id}번 상세내용
                {details.map((value)=>{
                    return (
                    <div>{value.name}</div>
                    )
                })}
            </div>
        )
    }
}
export default Details;