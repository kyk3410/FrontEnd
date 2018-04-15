import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import './Company.css';

// 라이플 사이클

class Company extends Component{
    
    constructor(){
        super();
        
        this.state = {
            count : 0,
            company : []
        }
    }
    
    componentDidMount(){
        // 통신을 해서 카운트가 13이 되게 해줘야 한다.
        axios.get('http://localhost:4000/company')
            .then(response=>{
            this.setState({
                count : response.data.count,
                company : response.data.company
            })
        }).catch(error=>{
            console.log(error)
        })
                   
    }
    
    companyDetails(id){
//        this.props.history.push('/company/' +id);
        //es6 방식
        this.props.history.push(`/company/${id}`);
    }
    
    render(){
        const { company, count } = this.state;
        
        return (
            <div className="container">
                    {company.map((value)=>{
                    return (
                        <div key={value.id} onClick={this.companyDetails.bind(this, value.id)}>
                            <Card info={value} />
                        </div>  
                    )
                    
                })}
                
                      
                {/*Company 전체 리스트
                <Link to="/company/1">1번 상세내역 보기</Link>
                <div onClick={this.companyDetails.bind(this,2)}>2번 상세내역 보기</div>
                <div onClick={this.companyDetails.bind(this,3)}>3번 상세내역 보기</div>
                */}
            </div>
        )
    }
}
export default Company;