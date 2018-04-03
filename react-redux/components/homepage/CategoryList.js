import React from 'react';
import {connect} from 'react-redux';
import {ITEM} from '../../actions/items';
import {PAGE} from '../../actions/page';

class CategoryList extends React.Component {
    state = {
        clickedItem: 'All'
    }
    handleClick =  (event, id) => {
        event.preventDefault();
        this.setState((state) => ({clickedItem: id}));

        this.props.dispatch(
            ITEM.change(id)
        )
        this.props.dispatch(
            PAGE.change(1)
        )
    }
    render () {
        let {categories} = this.props;
        return (
            <div className="col-md-2">
                <div className="list-group">
                    {Object.keys(categories).map( key => {
                        let {_id, num} = categories[key];

                        return (
                            <a key={_id} onClick={(event) => this.handleClick(event, _id)} className={this.state.clickedItem === _id ? 'list-group-item active' : 'list-group-item inactive'}>
                                {_id}
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

function mapStateToProps({categories}) {
    return {
        categories
    }
}

export default connect(mapStateToProps)(CategoryList);