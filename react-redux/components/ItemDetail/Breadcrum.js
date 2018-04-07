import React from 'react';

class Breadcrum extends React.Component {
    render () {
        let item = this.props.item;
        return (
            <div className="row">
                <div className="col-md-12">
                    <ol className="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li><a >{item.category}</a></li>
                        <li className="active">{item.title}</li>
                    </ol>
                </div>
            </div>
        )
    }
}
export default Breadcrum;