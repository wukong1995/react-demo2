import React, {
    Component
} from 'react'

import { Link} from 'react-router-dom'

class List extends Component {
    render() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><Link to="/">返回首页</Link></div>
                <div>这是列表页</div>
            </div>
        );
    }
};


export default List;