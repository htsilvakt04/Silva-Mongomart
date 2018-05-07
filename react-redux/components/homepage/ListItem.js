const queryString = require('query-string');
import { withRouter } from 'react-router-dom';
import {calculateItemsToDisplay} from '../../utils/helpers';
import { getItemsByCat } from '../../reducers';
import React from 'react';
import {connect} from 'react-redux';
import Items from './ListItem.js-Children/Items';
import Pagination from './ListItem.js-Children/Pagination';

class ListItem extends React.Component {
    render () {
        let { total, items, page } = this.props;
        return (
            <div className="col-md-10">
                <Items items={items}/>
                <Pagination page={page} total={total} perPage={this.perPage}/>
                <div className="text-center">
                    <i>{total} Products</i>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state, { location }) {
    const perPage = 5;

    const page = state.currentPage;
    const currentCat = queryString.parse(location.search).cat || 'All';
    const items = getItemsByCat(state, currentCat);
    const passedItems = calculateItemsToDisplay(items, perPage, page);

    return {
        items: passedItems,
        total: items.length,
        page,
    }
}
export default withRouter(connect(mapStateToProps)(ListItem));