/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/no-redundant-should-component-update */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-constant-condition */
import React, { createElement, Component } from 'react';
import classNames from 'classnames';
// classNames({ name: true, name2: false })  ==> 'name'
import config from './config';
import styles from './index.less';
/**
 * 模版组件
 * @description 模版组件
 * @class Persion
 * @extends {Component}
 * @author: unicom
 *
 */

const defaultProps = {
  name: "unicom",
};

interface IProps {
  name: string;
}

interface IState {
  color: string;
}
class Template extends React.Component<IProps, IState> {

  static defaultProps = defaultProps
    
  constructor(props: IProps){
    super(props);
    this.state = {
      color: "red"
    }
  }

/**
   * @description:  它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()
   *                初始化数据后，但是还未渲染DOM时。
   */
  componentWillMount() {
    console.log('componentWillMount')
  }

  /**
   * @description:  组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，
   *                返回数据setState后组件会重新渲染
   */
  componentDidMount() {
    console.log('componentDidMount')
  }

  /**
   * @description:  父组件改变后的props进行渲染
   */
  componentWillReceiveProps(newProps:IProps) {
    console.log('componentWillReceiveProps'+newProps)
  }

  /**
   * @description:  主要用于性能优化(部分更新) return false可以阻止组件的更新
   */
  shouldComponentUpdate(newProps:IProps, newState:IState) {
    console.log('shouldComponentUpdate')
    return true;
  }

  /**
   * @description:  shouldComponentUpdate返回true 组件进入重新渲染的流程
   */
  componentWillUpdate(newProps:IProps, newState:IState) {
    console.log('componentWillUpdate')

  }

  /**
   * @description:  react只会在第一次初始化成功会进入componentDidmount,
   *                之后每次重新渲染后都会进入这个生命周期
   */
  componentDidUpdate(newProps:IProps, newState:IState) {
    console.log('componentDidUpdate')
  }

  /**
   * @description:  清除 setTimeout,setInterval 和一些监听事件  removeEventListener
   */
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }


  public onClickColorPublic =  (ev: React.MouseEvent<HTMLButtonElement>) => {
    const { color } = this.state;
    if (color === "red") {
      this.setState({
        color: "blueviolet"
      });
    }
    if (color === "blueviolet") {
      this.setState({
        color: "red"
      });
    }
  }

  onClickColor = () => {
    console.log('onClickColor')
  }

  public render(){
    const { name } = this.props;
    const { color } = this.state;
    return (
      <div>
        HelloWord<span  onClick={this.onClickColorPublic}  className={styles.parent} style={{ color }}>{ name }</span>
      </div>
    );
  }
}


export default Template;
