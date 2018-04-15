import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Company from './Company';
import Details from './Details';
import CompanyList from './CompanyList'

class Web extends React.Component{
    
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/company" component={Company} />
                    <Route path="/company/:id" component={Details} />
                    {/*<Route path="/company/:id" component={CompanyList} />*/}
                </div>
            </Router>
        )
    }
}
export default Web;