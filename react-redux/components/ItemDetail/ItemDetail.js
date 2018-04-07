import React from 'react';
import {connect} from 'react-redux';
import BreadCrum from './Breadcrum';
import Heading from './Heading';
import Item from './Item';
import LatestReview from './LatestReview';
import CommentForm from './CommentForm';
import RelatedItems from './RelatedItems';

class ItemDetail extends React.Component {
    render () {
        let {item} = this.props;
        return (
           <div className="container">
                <div className="row">
                    <BreadCrum item={item}/>
                    <Heading item={item}/>
                    <Item item={item}/>
                    <LatestReview item={item}/>
                    <CommentForm item={item}/>
                    <hr/>
                    <RelatedItems cat={item.category}/>
                </div>
           </div>
        )
    }
}
function mapStateToProps({items}, currentProps) {
    let id = Number(currentProps.match.params.id);

    return {
        item: items[id]
    }
}
export default connect(mapStateToProps)(ItemDetail);