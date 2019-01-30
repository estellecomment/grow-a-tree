import React, {Component} from 'react';
import treeRoot from './tree-root.svg';
import './App.css';


// props : {id, top, left}
class Node extends Component {
  constructor(props) {
    super(props);
    this.state = { children: [] };
    this.id = props.id;
    this.childIdCounter = 0;

    this.branchSizePx = 500;
  }

  addChild() {
    this.setState((oldState) => {
      let childId = this.id + '-' + this.childIdCounter;
      this.childIdCounter ++;
      let topPx = - Math.random() * this.branchSizePx;
      let leftPx = Math.random() * this.branchSizePx - this.branchSizePx/2;
      oldState.children.push({id : childId, topPx: topPx, leftPx: leftPx});
      return oldState;
    });
  }

  render() {
    return (
        <div className="node"
             style={{
               top: this.props.topPx + "px",
               left: this.props.leftPx + "px"
             }}
             onClick={(e) => {
               e.preventDefault();
               e.stopPropagation();
               console.log('onclick for node ', this.id, 'target:', e.target, 'currentTarget', e.currentTarget);
               this.addChild();
             }}
        >
          <div className="circle"/>
          <div>{this.id}</div>
          {this.state.children.map((child) => {
            return <Node key={child.id}
                         id={child.id}
                         topPx={child.topPx}
                         leftPx={child.leftPx}
            />
          })}
        </div>
    );
  }
};

class Tree extends Component {
  render() {
    return (
        <div className="background">
          <div className="tree-root">
            <img src={treeRoot} width="300" alt="tree root"></img>
            <Node id={0}>
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
