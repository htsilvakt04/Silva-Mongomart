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
        let {categories} = this.props;
        let categoriesLength = Object.keys(categories).length;

        if (categoriesLength < 1) {
            return <h3>Loading</h3>
        }
        return (
            <div>
                <LeftBreadcrum/>
                <CategoryList categories={categories}/>
                <ListItem/>
            </div>
        )

    }
}
function mapStateToProps(state) {
    let {categories} = state;
    return {
        categories
    }
}
export default connect(mapStateToProps)(App);