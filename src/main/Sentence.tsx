import React, { Component } from 'react'
import { Popover } from 'antd'

const htmlStr = '<div>我要从<mark>北京</mark>到<mark>上海</mark></div>'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

class Sentence extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    console.log('ppp')
  }

  render() {
    return (
      <div className="sentence">
        <Popover content={content} title="Title" trigger="click">
          <div className="sentence-item" dangerouslySetInnerHTML={{ __html: htmlStr }} />
        </Popover>
      </div>
    )
  }
}

export default Sentence
