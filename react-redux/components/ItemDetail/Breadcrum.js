import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CATEGORY} from '../../actions/category';

class Breadcrum extends React.Component {
    render () {
        let item = this.props.item;
        return (
            <div className="row">
                <div className="col-md-12">
                    <ol className="breadcrumb">
                        <li><Link to="/" onClick={() => this.handleChangeCat('All')}>Home</Link></li>
                        <li><Link to="/" onClick={() => this.handleChangeCat(item.category)}>{item.category}</Link></li>
                        <li className="active">{item.title}</li>
                    </ol>
                </div>
            </div>
        )
    }
    handleChangeCat = (cat) => {
        let {dispatch} = this.props;
        dispatch(
            CATEGORY.change(cat)
        )
    }
}
export default connect()(Breadcrum);