import React from 'react';
import { ReactDOM } from 'react-dom';

class Navbar extends React.Component {
    render() {
        return (<nav className="navbar navbar-dark bg-dark p-2">
            <div className="container-fluid">
                <a className="active" href="#" >
                    Hamro Cart
                </a>
            </div>
        </nav>
        );
    }
}

export default Navbar;




