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
              <a className="menu-item" id="show-code" href="javascript:;"><i className="iconfont icon-icon"></i></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" id="yinyong" href="javascript:;"><i className="iconfont icon-yinyong"></i></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" id="cuti" href="javascript:;"><i className="iconfont icon-cuti1"></i></a>
              <a className="menu-item" id="xieti" href="javascript:;"><i className="iconfont icon-xieti"></i></a>
              <a className="menu-item" id="xiahuaxian" href="javascript:;"><i className="iconfont icon-xiahuaxian"></i></a>
              <a className="menu-item" id="deleteline" href="javascript:;"><i className="iconfont icon-shanchuxian"></i></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" id="addColor" href="javascript:;"><i className="iconfont icon-wenziyanse"></i></a>
              <a className="menu-item" id="addBgc" href="javascript:;"><i className="iconfont icon-wenzibeijingse"></i></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" id="addTitle" href="javascript:;"><i className="iconfont icon-biaoti"></i></a>
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