import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { getUserSearchText } from '../../reducers';
import { handleSearch } from '../../actions/items';

class Navbar extends React.Component {
    handleSearch = (event) => {
        let val = event.target.value;
        // dispatch here
        this.props.handleSearch(val);
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
                        <Link className="navbar-brand" to="/" style={{color: '#fff'}}>MongoMart</Link>
                    </div>
                    {this.props.location.pathname.indexOf('/item') === -1
                        ? <form className="navbar-form navbar-left" onKeyUp={this.handleSearch} style={{float: 'none', width: '400px', marginLeft: '12em'}}>
                            <div className="form-group">
                                <input type="text" value={this.props.searchText}  className="form-control" placeholder="Search" style={{width: '400px'}}/>
                            </div>
                          </form>
                        : <form className="navbar-form navbar-left" onKeyUp={this.moveUserToHomePage} style={{float: 'none', width: '400px', marginLeft: '12em'}}>
                            <div className="form-group">
                                <input type="text" value={this.props.searchText}  className="form-control" placeholder="Search" style={{width: '400px'}}/>
                            </div>
                        </form>
                    }
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
    moveUserToHomePage = () => {
        this.props.history.push('/');
    }
}

function mapStateToProps(state) {
    return {
        searchText: getUserSearchText(state)
    }
}
export default connect(null, { handleSearch })(Navbar);
