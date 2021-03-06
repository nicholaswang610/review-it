import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Signup from './Signup.js';
import About from './About.js';
import CategoryHome from './categories/CategoryHome.js';
import PostHome from './categories/posts/PostHome.js';
import AddTitle from './categories/add/AddTitle.js';
import AddReview from './categories/add/AddReview.js';
import ChooseCategory from './categories/ChooseCategory.js';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/gaming' component={CategoryHome}/>
                    <Route exact path='/movies' component={CategoryHome}/>
                    <Route exact path='/music' component={CategoryHome}/>
                    <Route exact path='/books' component={CategoryHome}/>
                    <Route exact path='/gaming/add-title' component={AddTitle}/>
                    <Route exact path='/movies/add-title' component={AddTitle}/>
                    <Route exact path='/music/add-title' component={AddTitle}/>
                    <Route exact path='/books/add-title' component={AddTitle}/>
                    <Route exact path='/gaming/:title' component={PostHome}/>
                    <Route exact path='/movies/:title' component={PostHome}/>
                    <Route exact path='/music/:title' component={PostHome}/>
                    <Route exact path='/books/:title' component={PostHome}/>
                    <Route exact path='/gaming/:title/add-review' component={AddReview}/>
                    <Route exact path='/movies/:title/add-review' component={AddReview}/>
                    <Route exact path='/music/:title/add-review' component={AddReview}/>
                    <Route exact path='/books/:title/add-review' component={AddReview}/>
                    <Route exact path='/choose-category' component={ChooseCategory}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;