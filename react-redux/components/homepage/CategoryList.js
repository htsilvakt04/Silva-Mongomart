import React from 'react';

class CategoryList extends React.Component {
    state = {
        clickedItem: 'All'
    }
    render () {
        
        let categories = [ { _id: 'Stickers', num: 2 },
            { _id: 'Umbrellas', num: 2 },
            { _id: 'Office', num: 2 },
            { _id: 'Swag', num: 2 },
            { _id: 'Books', num: 3 },
            { _id: 'Kitchen', num: 3 },
            { _id: 'Electronics', num: 3 },
            { _id: 'Apparel', num: 6 },
            { _id: 'All', num: 23 } ];

        return (
            <div className="col-md-2">
                <div className="list-group">
                    {categories.map(item => {
                        let {_id, num} = item;
                        return (
                            <a key={_id} className={this.state.clickedItem === _id ? 'list-group-item active' : 'list-group-item inactive'}>
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
export default CategoryList;