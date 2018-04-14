import React, {Component} from 'react';
import axios from 'axios';

import './Company.css';
import Card from './Card';

class Application extends Component{
    
    constructor(){
        super();
        
        this.state = {
            count : 0,
            company : []
        }
        
        this.getData = this.getData.bind(this);
    }
    
    getData(){
        axios.get('http://localhost:4000/company')
            .then(response=>{
                console.log(response.data);
                this.setState({
                    count : response.data.count,
                    company : response.data.company
                    });
                })
            .catch(error=>{
                console.log(error);
                });
    }
    
    render(){
        
        const {count, company } = this.state;
        return (
            <div>
                <button onClick={this.getData}>데이터 가져오기</button>
                <div>{count}</div>
                <hr style={{margin : '20px 0'}}/>
                <div className="container">
                    {company.map((value)=>{
                    console.log(value.name)
                    return (
                        <Card info={value}/>    
                    )
                })}
                </div>
            </div>
        )
    }
}
export default Application;