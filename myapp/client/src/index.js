import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from './components/Home/home';
import Layout from './components/Loyout/Loyout'
import List from './components/List/list';
import Product from './components/produkt/produkt';


// Componnents

class App extends React.Component {
    state = {}
    render() {
        return ( 
        <Router>
            <div className='container-fluid index '>
                <Layout/>
                <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/list' component={List}/>
                <Route exact path='/product' component={Product}/>
                
            </Switch>
            </div>
        </Router>
        );};
    };
ReactDOM.render( <App /> , document.getElementById('root')); 