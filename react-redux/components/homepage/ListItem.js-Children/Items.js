import React from 'react';
import {connect} from 'react-redux';
import {Fragment} from 'react';

class Items extends React.Component {
    render () {
        let items = this.props.items;
        return (
            items.map( item => {
                let id = item._id;

                return (
                    <Fragment key={id}>
                        <div className="row">
                            <div className="col-md-7">
                                <a href={'/item/' + id}>
                                    <img className="img-responsive" src={'/static/' + item.img_url} alt=""/>
                                </a>
                            </div>
                            <div className="col-md-5">
                                <h3><a href={'/item/' + id}>{item.title}</a></h3>
                                <h4>{item.slogan}</h4>
                                <p>{item.description}</p>
                                <a className="btn btn-primary" href={'/item/' + id}>View Product <span className="glyphicon glyphicon-chevron-right"></span></a>
                            </div>
                        </div>
                        <hr/>
                    </Fragment>
                )
            })
        )
    }
}
function mapStateToProps ({items}) {
    return {
        items
    }
}
export default connect(mapStateToProps)(Items);