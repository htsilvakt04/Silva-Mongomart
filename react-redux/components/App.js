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
        return (
            <div>
                <LeftBreadcrum/>
                <CategoryList/>
                <ListItem/>
            </div>
        )

    }
}
function mapStateToProps() {
    return {

    }
}
export default connect(mapStateToProps)(App);