import React, { Component } from 'react'
import Resizable from './Resizable'
import '../styles/multi_select'

class MultiSelectArea extends Component {
  constructor(props) {
    super(props)
    const { cropUrl } = props
    this.state = {
      mousedown: false, // state mouse down event
      originImgSize: { // root size image
        w: 0,
        h: 0,
        r: 0
      },
      url: cropUrl,
      posImg: { // position box image in screen
        top: 0,
        left: 0
      },
      scrollLeft: 0,
      scrollTop: 0,
      areas: [
        {
          id: 1,
          x: 100,
          y: 200,
          width: 200,
          height: 100,
          z: 0,
          resizable: false
        }
      ],
      moveTempX: 0,
      moveTempY: 0,
      moveCurrentX: 0,
      moveCurrentY: 0,
      temp: 0,
      dragdown: false, // state mouse event drag,
      move: false
    }
  }

  componentDidMount() {
    this.setSize()
    window.addEventListener('mousemove', this.calcPosOfBox)
    window.addEventListener('scroll', this.calcPosOfBox)
    this.calcPosOfBox()
    window.addEventListener('mouseup', this.mouseUp)
    window.addEventListener('mouseup', this.endMove)
    window.addEventListener('mouseup', this.endDrag)
  }

  setSize = async () => {
    const { url } = this.state
    if (!url) {
      return
    }
    const imgSize = await this.getSize(url)
    this.setState({
      originImgSize: imgSize
    })
  }
  // Get the size of the src image
  getSize = (src) => {
    const img = this.$imgHidden

    return new Promise(resolve => {
      if (src && img) {
        img.onload = () => {
          // Compatible with unacceptable size
          const size = this.getSizeImg(img)
          resolve(size)
        }
        img.src = src
      } else {
        resolve({
          w: 0,
          h: 0,
          r: 0
        })
      }
    })
  }

  getSizeImg = (img) => {
    let w = img.width
    let h = img.height
    let r = w === 0 && h === 0 ? 0 : w / h

    return {
      w: w,
      h: h,
      r: r
    }
  }


  calcPosOfBox = () => { // set posImg static
    let ref = this.$imgArea
    const { scrollTop, scrollLeft, posImg} = this.state

    posImg.top= ref.getBoundingClientRect().top + scrollTop
    posImg.left= ref.getBoundingClientRect().left + scrollLeft

    this.setState({
      scrollLeft : window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop : window.pageYOffset || document.documentElement.scrollTop,
      posImg
    })
  }

  // draw rectangle on image mouseDown mouseMove mouseUp
  mouseDown = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      mousedown: true
    })

    let temp = 0
    const { areas, posImg } = this.state
    if (areas.length > 0) {
      let idArea = areas.slice(-1).pop().id // get last areas
      if (idArea) {
        areas.push({
          id: idArea + 1,
          x: e.pageX - posImg.left,
          y: e.pageY - posImg.top,
          width: 0,
          height: 0,
          z: 0,
          resizable: false
        })
        temp = idArea + 1
      }
    } else {
      areas.push({
        id: 1,
        x: e.pageX - posImg.left,
        y: e.pageY - posImg.top,
        width: 0,
        height: 0,
        z: 0,
        resizable: false
      })
      temp = 1
    }
    this.setState({
      areas,
      posImg,
      temp
    })
  }


  mouseMove = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (this.state.mousedown) {
      const { areas, temp, posImg } = this.state
      areas.filter(x => x.id === temp).map(item => {
        if (e.pageX - item.x < 0 || e.pageY - item.y < 0) {
          item.width = 50
          item.height = 50
        } else {
          item.width = (e.pageX - item.x - posImg.left) - 8
          item.height = (e.pageY - item.y - posImg.top) - 8
        }
      })
      this.setState({
        areas
      })
    }
  }

  mouseUp = () => {
    const { areas } = this.state

    this.setState({
      mousedown: false,
      areas: areas.filter(item => item.width !== 0 || item.height !== 0)
    })
  }

  // after click rectangle area select active resizable and dragable
  changeResizable = (id) => {
    const { areas } = this.state

    areas.filter(item => item.id === id).map(item => {
      item.resizable = true
      item.z = 100
    })
    areas.filter(item => item.id !== id).map(item => {
      item.resizable = false
      item.z = 0
    })

    this.setState({
      areas
    })
  }

  // delete item area
  deleteSelected = (id) => {
    const { areas } = this.state

    this.setState({
      areas: areas.filter(item => item.id !== id)
    })
  }

  // drag point around rectangle on image startDrag doDrag endDrag
  startDrag = () => {
    this.setState({
      dragdown: true
    })
  }

  doDrag = (item, type, e) => {
    const { dragdown, posImg, areas} = this.state
    if (dragdown) {
      switch (type) {
      case 'w':
        // fix drag outside box w position
        if (e.pageX - posImg.left >= 0) {
          item.width = item.width + item.x - e.pageX + posImg.left
          item.x = e.pageX - posImg.left
        }
        // fix minimum area
        if (item.width < 10) {
          item.x = item.x - 10
          item.width = item.width + 10
        }
        break
      case 'sw':
        // fix drag outside box sw position
        if (e.pageX - posImg.left >= 0) {
          item.width = item.width + item.x - e.pageX + posImg.left
          item.x = e.pageX - posImg.left
        }
        if (e.pageY - posImg.top <= originImgSize.h) {
          item.height = e.pageY - posImg.top - item.y
        }
        // fix minimum area
        if (item.width < 10) {
          item.x = item.x - 10
          item.width = item.width + 10
        }
        if (item.height < 10) {
          item.height = item.height + 10
        }
        break
      case 's':
        // fix drag outside box s position
        if (e.pageY - posImg.top <= originImgSize.h) {
          item.height = e.pageY - posImg.top - item.y
        }
        // fix minimum area
        if (item.height < 10) {
          item.height = item.height + 10
        }
        break
      case 'se':
        // fix drag outside box se position
        if (e.pageX - posImg.left <= originImgSize.w) {
          item.width = e.pageX - posImg.left - item.x
        }
        if (e.pageY - posImg.top <= originImgSize.h) {
          item.height = e.pageY - posImg.top - item.y
        }
        // fix minimum area
        if (item.width < 10) {
          item.x = item.x - 10
          item.width = item.width + 10
        }
        if (item.height < 10) {
          item.height = item.height + 10
        }
        break
      case 'e':
        // fix drag outside box e position
        if (e.pageX - posImg.left <= originImgSize.w) {
          item.width = e.pageX - posImg.left - item.x
        }
        // fix minimum area
        if (item.width < 10) {
          item.x = item.x - 10
          item.width = item.width + 10
        }
        break
      case 'ne':
        // fix drag outside box ne position
        if (e.pageX - posImg.left <= originImgSize.w) {
          item.width = e.pageX - posImg.left - item.x
        }
        if (e.pageY - posImg.top >= 0) {
          item.height = item.height + ((item.y + posImg.top) - e.pageY)
          item.y = e.pageY - posImg.top
        }
        // fix minimum area
        if (item.width < 10) {
          item.x = item.x - 10
          item.width = item.width + 10
        }
        if (item.height < 10) {
          item.height = item.height + 10
        }
        break
      case 'n':
        // fix drag outside box n position
        if (e.pageY - posImg.top >= 0) {
          item.height = item.height + ((item.y + posImg.top) - e.pageY)
          item.y = e.pageY - posImg.top
        }
        // fix minimum area
        if (item.height < 10) {
          item.height = item.height + 10
        }
        break
      case 'nw':
        // fix drag outside box nw position
        if (e.pageY - posImg.top >= 0) {
          item.height = item.height + ((item.y + posImg.top) - e.pageY)
          item.y = e.pageY - posImg.top
        }
        if (e.pageX - posImg.left >= 0) {
          item.width = item.width + item.x - e.pageX + posImg.left
          item.x = e.pageX - posImg.left
        }
        // fix minimum area
        if (item.width < 10) {
          item.x = item.x - 10
          item.width = item.width + 10
        }
        if (item.height < 10) {
          item.height = item.height + 10
        }
        break
      default:
        break
      }
    }
    this.setState({
      areas
    })
  }

  endDrag = () => {
    this.setState({
      dragdown: false
    })
  }

  // move rectangle area startMove doMove endMove
  startMove = (item, e) => {
    this.setState({
      move: true,
      moveTempX: e.clientX,
      moveTempY: e.clientY,
      moveCurrentX: item.x,
      moveCurrentY: item.y,
    })
  }

  doMove = (item, e) => {
    const { move, moveTempX, moveTempY, moveCurrentX, moveCurrentY, originImgSize, areas } = this.state
    if (move) {
      let x = moveCurrentX + (e.clientX - moveTempX)
      let y = moveCurrentY + (e.clientY - moveTempY)
      let maxX = originImgSize.w - item.width
      let maxY = originImgSize.h - item.height
      if (x > 0 && y > 0 && x < maxX && y < maxY) {
        item.x = x
        item.y = y
      }
    }

    this.setState({
      areas
    });
  }

  endMove = () => {
    this.setState({
      move: false
    });
  }

  // send data from child to parent $emit
  getListAreas = () => {
    // this.$emit('getListAreas', this.areas)
  }

  // watch = {
  //   cropUrl (val) {
  //     this.url = val
  //     setTimeout(() => {
  //       this.setSize()
  //     }, 200)
  //   },
  //   // send data to parent when list areas change
  //   areas () {
  //     setTimeout(() => {
  //       this.getListAreas()
  //     }, 200)
  //   }
  // },

  render() {
    const { url, areas, posImg, originImgSize } = this.state
    const { opacityOverlay, opacityOutline } = this.props

    return (
      <div>
        <div className="image-decorator" ref={ref => this.$imgArea = ref}>
          <div style={{ positon: 'relative' }}>
            <img
              className="original-image"
              src={url}
              alt="Original Image"
              width="100%"
            />
            <div
              className="select-areas--overlay"
              style={{
                opacity: opacityOverlay,
                position: 'absolute',
                width: originImgSize.w + 'px',
                height: originImgSize.h + 'px',
                display: 'block'
              }}
            />

            <div
              style={{
                backgroundColor: 'rgb(0, 0, 0)',
                opacity: 0,
                position: 'absolute',
                width: originImgSize.w + 'px',
                height: originImgSize.h + 'px',
                cursor: 'crosshair'
              }}
              onMouseDown={this.mouseDown}
              onMouseMove={this.mouseMove}
            />
            {
              areas.map(item => (
                <div key={item.id}>
                  <div
                    onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.startMove(item, e) }}
                    onMouseMove={(e) => this.doMove(item, e)}
                  >
                    <div
                      className="select-areas--outline"
                      style={{
                        opacity: opacityOutline,
                        position: 'absolute',
                        cursor: 'default',
                        width: item.width + 4 + 'px',
                        height: item.height + 4 + 'px',
                        left: item.x + posImg.left - 2 + 'px',
                        top: item.y + posImg.top - 2 + 'px',
                        zIndex: item.z
                      }}
                    />
                    <div
                      className="select-areas--background_area"
                      style={{
                        background: `#fff url('${url}') -${item.x}px -${item.y}px / ${originImgSize.w}px ${originImgSize.h}px no-repeat`,
                        position: 'absolute',
                        cursor: 'move',
                        width: item.width + 'px',
                        height: item.height + 'px',
                        left: item.x + posImg.left + 'px',
                        top: item.y + posImg.top + 'px',
                        zIndex: item.z + 2
                      }}
                      onClick={() => this.changeResizable(item.id)}
                    />
                    {
                      item.resizable ? (
                        <div
                          className="delete-area"
                          style={{
                            display: 'block',
                            left: item.x + posImg.left + item.width + 'px',
                            top: item.y + posImg.top - 25 + 'px',
                            zIndex: item.z + 2
                          }}
                          onClick={() => this.deleteSelected(item.id)}
                        >
                          <div className="select-areas--delete_area"></div>
                        </div>
                      ) : null
                    }

                    <Resizable item={item} posImg={posImg} startDrag={this.startDrag} doDrag={this.doDrag} />
                  </div>
                </div>
              ))
            }

            <div className="c-crop--hide_main">
              <img id="c-crop--hide_img" ref={ref => this.$imgHidden = ref} src={url} alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MultiSelectArea.defaultProps = {
  cropUrl: 'https://aibici-test.oss-cn-beijing.aliyuncs.com/0c41bb61-18fa-4ab4-89ee-bb6696aad654.png',
  width: 1500,
  opacityOutline: 0.5,
  opacityOverlay: 0.5
}

export default MultiSelectArea
