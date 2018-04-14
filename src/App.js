import React, {Component} from 'react';
import axios from 'axios';

class App extends React.Component{
    
    constructor(){
        super();
        
        this.state = {
            title : '초기제목',
            name : '초기이름'
        }
    }
    
    getCompany(){
        // axios
        axios.get('http://localhost:4000/company')
             .then(response=>{
                console.log(response.data);
                this.setState({
                    title : response.data.title,
                    name : response.data.name});
                })
             .catch(error=>{
                console.log(error);
                });
     
    }
    
    render(){
        return (
            <div>
                <div>백엔드 통신 해보기</div>
                <button onClick={this.getCompany.bind(this)}>통신시작</button>
                <div>타이틀 {this.state.title}</div>
                <div>이름 {this.state.name}</div>
            </div>
        )
    }
}
export default App;