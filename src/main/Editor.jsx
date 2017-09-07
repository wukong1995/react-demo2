import React from 'react';

import editorEvent from '../javascript/editor.js';

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
              <a className="menu-item js-show-code" href="javascript:;"><i className="iconfont icon-icon"></i></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" href="javascript:;"><i className="iconfont icon-yinyong"></i></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" href="javascript:;"><i className="iconfont icon-cuti1"></i></a>
              <a className="menu-item" href="javascript:;"><i className="iconfont icon-xieti"></i></a>
              <a className="menu-item" href="javascript:;"><i className="iconfont icon-xiahuaxian"></i></a>
              <a className="menu-item" href="javascript:;"><i className="iconfont icon-shanchuxian"></i></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" href="javascript:;"><i className="iconfont icon-wenziyanse"></i></a>
              <a className="menu-item" href="javascript:;"><i className="iconfont icon-wenzibeijingse"></i></a>
            </div>
            <div className="menu-group">
              <a className="menu-item" href="javascript:;"><i className="iconfont icon-biaoti"></i></a>
            </div>
          </div>
          <div className="editor-content-container">
            <div className="editor-pannel js-editor-pannel" contentEditable></div>
            <textarea className="editor-textarea js-editor-textarea"></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;