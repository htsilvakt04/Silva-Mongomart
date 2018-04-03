import React from 'react';
import {connect} from 'react-redux';
import Items from './ListItem.js-Children/Items';

function Pagination(props) {
    let {perPage, currentPage, total} = props;

    let numberOfPages = 1;
    if (total > perPage) {
        numberOfPages = Math.ceil(total / perPage);
    }

    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
       pages.push (
            <li key={i} className={currentPage === i ? 'active' : 'inactive'}>
                <a>{i}</a>
            </li>
       )
    }

    return (
        <div className="row text-center">
            <div className="col-lg-12">
                <ul className="pagination">
                    {pages}
                </ul>
            </div>
        </div>
    )
}
class ListItem extends React.Component {
    state = {
        currentPage: 1
    }
    perPage = 5;

    render () {
        let total = this.props.total;
        let currentPage = this.state.currentPage;

        return (
            <div className="col-md-10">
                <Items />
                <Pagination total={total} perPage={this.perPage} currentPage={currentPage}/>
                <div className="text-center">
                    <i>{total} Products</i>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({items}, currentProps) {
    return {
        total: Object.keys(items).length
    }
}
export default connect(mapStateToProps)(ListItem);