import React from 'react';

import editorEvent from './event';

class Editor extends React.Component {
  componentDidMount() {
    editorEvent();
  }

  render() {
    return (
      <div className="container editor">
        <div className="editor-container">
          <div className="editor-menu-container clearfix">
            <div className="menu-group">
              <a className="menu-item" id="show-code" href="javascript:;"><i className="iconfont icon-icon" /></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" id="addTitle" href="javascript:;">
                <i className="iconfont icon-biaoti" />
                <div className="menu-item__drop">
                  <ul>
                    <li><h1>H1</h1></li>
                    <li><h2>H2</h2></li>
                    <li><h3>H3</h3></li>
                    <li><h4>H4</h4></li>
                    <li><h5>H5</h5></li>
                    <li><h6>H6</h6></li>
                    <li><p>正文</p></li>
                  </ul>
                </div>
              </a>
              <a className="menu-item" id="yinyong" href="javascript:;"><i className="iconfont icon-yinyong" /></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" id="cuti" href="javascript:;"><i className="iconfont icon-cuti1" /></a>
              <a className="menu-item" id="xieti" href="javascript:;"><i className="iconfont icon-xieti" /></a>
              <a className="menu-item" id="xiahuaxian" href="javascript:;"><i className="iconfont icon-xiahuaxian" /></a>
              <a className="menu-item" id="deleteline" href="javascript:;"><i className="iconfont icon-shanchuxian" /></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" id="addColor" href="javascript:;"><i className="iconfont icon-editfontcolor" /></a>
              <a className="menu-item" id="addBgc" href="javascript:;"><i className="iconfont icon-wenzibeijingse" /></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" id="addTitle" href="javascript:;">
                <i className="iconfont icon-lianjie" />
                <div className="menu-item__drop">
                  <h5>链接 <i>关闭</i></h5>
                  <p><input type="text" placeholder="链接文字" /></p>
                  <p><input type="text" placeholder="http://" /></p>
                  <p><a href="javascript:;">插入</a></p>
                </div>
              </a>
              <a className="menu-item" id="addTitle" href="javascript:;">
                <i className="iconfont icon-ul" />
                <div className="menu-item__drop">
                  <ul>
                    <li>有序列表</li>
                    <li>无序列表</li>
                  </ul>
                </div>
              </a>
              <a className="menu-item" id="addTitle" href="javascript:;">
                <i className="iconfont icon-alignleft" />
                <div className="menu-item__drop">
                  <ul>
                    <li>左对齐</li>
                    <li>居中对齐</li>
                    <li>右对齐</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div className="editor-content-container">
            <div className="editor-pannel" id="editor-pannel" contentEditable>
              <p>请输入内容...</p>
            </div>
            <textarea className="editor-textarea" id="editor-textarea"></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;