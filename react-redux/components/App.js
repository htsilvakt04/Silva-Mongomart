import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from './shared/navbar';
import Loading from './shared/Loading';
import HomePage from './homepage/HomePage';
import ItemDetail from './ItemDetail/ItemDetail';
import {handleInitialData} from '../actions/init';
import ScrollToTopRoute from './shared/ScrollToTopRoute';

class App extends React.Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData());
    }

    render () {
/*if (this.props.loading) {
            return (
                <div  className="container">
                    <Loading style={{color: '#00D1B2', textAlign: 'center', fontSize: '45px'}} intervalTime={200}/>
                </div>
            )
        }*/

        return (
            <BrowserRouter>
                <Route render={ ({ location, history }) => (
                    <div>
                        <Navbar location={location} history={history}/>
                        <TransitionGroup>
                            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                <Switch location={location}>
                                    <ScrollToTopRoute exact path="/" component={HomePage}/>
                                    <ScrollToTopRoute path="/item/:id" component={ItemDetail}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                )} />
            </BrowserRouter>
        )

    }
}

// function mapStateToProps({categories, items}) {
//     return { // checking the app is loading or not
//         loading:  Object.keys(categories).length < 1 && Object.keys(items).length < 1
//     }
// }
export default connect()(App);