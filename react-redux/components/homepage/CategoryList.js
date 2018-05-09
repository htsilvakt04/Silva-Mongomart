const queryString = require('query-string');
import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCatNameAndTotal } from '../../reducers';
import {handleChangeCat} from '../../actions/share';

class CategoryList extends React.Component {
    handleClick =  (event, id) => {
        event.preventDefault();
        this.setState((state) => ({clickedItem: id}));
        this.props.changeCat(id);
    }
    render () {
        let {categories, currentCat} = this.props;
        return (
            <div className="col-md-2">
                <div className="list-group">
                {Object.keys(categories).map( key => {
                    let {name, num} = categories[key];
                    
                    return (
                        <a key={name} onClick={(event) => this.handleClick(event, name)} className={currentCat === name ? 'list-group-item active' : 'list-group-item inactive'}>
                            {name}
                            <span className="badge">
                                {num}
                            </span>
                        </a>
                    )
                })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, { location }) {
    const currentCat = queryString.parse(location.search).cat || 'All';

    return {
        categories: getCatNameAndTotal(state),
        currentCat
    }
}
function mapDispatchToProps (dispatch) {
    return {
        changeCat: (id) => {
            dispatch(handleChangeCat(id))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryList));