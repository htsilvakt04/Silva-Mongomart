import React from 'react'
import {connect} from 'react-redux';
import CategoryList from './homepage/CategoryList';
import LeftBreadcrum from './homepage/LeftBreadcrum';
import ListItem from './homepage/ListItem';


import {handleInitialData} from '../actions/init';

class App extends React.Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData());
    }

    render () {
        if (this.props.loading) {
            return <h3>Loading</h3>
        }

        return (
            <div>
                <LeftBreadcrum/>
                <CategoryList/>
                <ListItem/>
            </div>
        )

    }
}

function mapStateToProps({categories, items}) {
    return { // checking the app is loading or not
        loading:  Object.keys(categories).length < 1 && Object.keys(items).length < 1
    }
}
export default connect(mapStateToProps)(App);