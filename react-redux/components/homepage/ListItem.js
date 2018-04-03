import React from 'react';
import {connect} from 'react-redux';
import Items from './ListItem.js-Children/Items';
import Pagination from './ListItem.js-Children/Pagination';

class ListItem extends React.Component {
    perPage = 5 // if we want, can move this var to the store's state as well

    render () {
        let {total, page} = this.props;

        return (
            <div className="col-md-10">
                <Items perPage={this.perPage}/>
                <Pagination perPage={this.perPage}/>
                <div className="text-center">
                    <i>{total} Products</i>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({items}) {
    return {
        total: Object.keys(items).length
    }
}
export default connect(mapStateToProps)(ListItem);