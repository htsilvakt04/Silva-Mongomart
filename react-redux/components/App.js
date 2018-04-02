import React from 'react'
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/init';

class App extends React.Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData());
    }

    render () {
        return (
            <div>App</div>
        )

    }
}
function mapStateToProps() {
    return {

    }
}
export default connect(mapStateToProps)(App);