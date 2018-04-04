import React from 'react';
import {connect} from 'react-redux';
import {handlechangeBySearch} from '../../actions/items';

class Navbar extends React.Component {
    state = {
        search: ''
    }
    handleSearch = (event) => {
        let val = event.target.value;
        this.setState(() => ({search: val}));

        this.props.dispatch(
            handlechangeBySearch(val)
        )
        // dispatch here
    }
    render () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/" style={{color: '#fff'}}>MongoMart</a>
                    </div>
                    <form className="navbar-form navbar-left" onChange={this.handleSearch} style={{float: 'none', width: '400px', marginLeft: '12em'}}>
                        <div className="form-group">
                            <input type="text" value={this.state.search}  className="form-control" placeholder="Search" style={{width: '400px'}}/>
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/cart" style={{color: '#fff'}}>
                                <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default connect()(Navbar);