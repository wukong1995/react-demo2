import React, {
    Component
} from 'react'

import { Link} from 'react-router-dom'

class Index extends Component {
    render() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><Link to="/list">list page</Link></div>
                <div><Link to="/detail">detail page</Link></div>
                 <div><Link to="/color">color page</Link></div>
            </div>
        );
    }
};

export default Index;