import React, { Component } from 'react'

class Resizable extends Component {
  state = {
    pos: null
  }

  componentDidUpdate(prevProps) {
    if (this.props.item.resizable !== prevProps.item.resizable && this.props.item.resizable) {
      window.addEventListener('mouseup', document.removeEventListener('mousemove', this.doDrag))
    }
  }

  starDrag = (type) => {
    this.setState({
      pos: type
    })

    document.addEventListener('mousemove', this.doDrag)
    this.props.startDrag()
  }

  doDrag = () => {
    this.props.doDrag(this.item, this.pos, e);
  }

  render() {
    const { item, posImg} = this.props

    return (
      <div className="handler">
        {
          item.resizable ? (
            <>
              <div className="select-areas-resize-handler w"
                style={{
                  opacity: 0.5,
                  position: 'absolute',
                  cursor: 'w-resize',
                  display: 'block',
                  left: (item.x + posImg.left - 6) + 'px',
                  top: (item.y + posImg.top + item.height / 2 - 4) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('w') }}
              />
              <div
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('sw') }}
              />
              <div
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('s') }}
              />
              <div
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('se') }}
              />
              <div
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('e') }}
              />
              <div
                className="select-areas-resize-handler ne"
                style={{
                  opacity: 0.5,
                  position: 'absolute',
                  cursor: 'ne-resize',
                  display: 'block',
                  left: (item.x + posImg.left + item.width - 6) + 'px',
                  top: (item.y + posImg.top - 4) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('ne') }}
              />
              <div
                className="select-areas-resize-handler n"
                style={{
                  opacity: 0.5,
                  position: 'absolute',
                  cursor: 'n-resize',
                  display: 'block',
                  left: (item.x + posImg.left + item.width / 2 - 4) + 'px',
                  top: (item.y + posImg.top - 4) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('n') }}
              />
              <div
                className="select-areas-resize-handler nw"
                style={{
                  opacity: 0.5,
                  position: 'absolute',
                  cursor: 'nw-resize',
                  display: 'block',
                  left: (item.x + posImg.left - 4) + 'px',
                  top: (item.y + posImg.top - 4) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('nw') }}
              />
            </>
          ) : null
        }
      </div>
    );
  }
}

Resizable.defaultProps = {
  item: {
    id: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    z: 0,
    resizable: false
  },
  posImg: null
}

export default Resizable;

