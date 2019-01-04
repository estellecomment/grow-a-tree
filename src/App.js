import React, {Component} from 'react';
import treeRoot from './tree-root.svg';
import './App.css';


const Branch = function () {

};

const Node = function ({bottom, top, left, right, children}) {
  return (
      <div className="node"
           style={{
             bottom: bottom,
             top: top,
             left: left,
             right: right
           }}>
        <div className="circle"/>
        {children}
      </div>
  );
};

class Tree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="background">
          <div className="tree-root">
            <img src={treeRoot} width="300" alt="tree root"></img>
            <Node>
            </Node>
          </div>
        </div>
    );
  };
};

class App extends Component {
  render() {
    return (
        <div className="App">
          <Tree/>
        </div>
    );
  }
}

export default App;
