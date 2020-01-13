import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from "styled-components";

// import * as productAction from '../actions/fetchHeroActions';
import * as productAction from '../reducers/hero';
// import { fetchHero } from './fetchHero'; // thunk action method to fetch data , contain 3 actions

import ShowData from './ShowData';
import Loading from './common/Loading';

const RedBtn = styled.button`
    padding: 12px 24px;
    border: 1px solid;
    color: #ec4646;
    background: transparent;
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease all;
`;

const mapStateToProps = state => ({
  products: state.productsReducer.products,
  pending: state.productsReducer.pending,
})

const mapDispatchToProps = dispatch => {
  return {
    // fetchHero: () => dispatch(fetchHero()),// thunk
    dispatch,
    actions: bindActionCreators({ ...productAction }, dispatch),
  }
}

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [
            {
                id: '1',
                text: "Learn React"
            },
            {
                id: '2',
                text: "Learn Redux"
            },
            {
                id: '3',
                text: "Watch TV"
            }
        ]
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    // redux-thunk
    // const { fetchHero } = this.props; 
    // fetchHero();

     // redux-saga
    const { dispatch, actions } = this.props;
    actions.fetchProductsPending(); // method 1
    // dispatch({type: 'FETCH_PRODUCTS_PENDING', payload: {} }); // method 2

    // redux-observable


    // 2020/1/2 // http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
    // line login popup window
    // https://dotblogs.com.tw/shadow/2019/10/13/011033
    // https://www.quackit.com/javascript/popup_windows.cfm
    // https://redux.js.org/introduction/three-principles/
    // https://medium.com/@max80713/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e
  }

  render() {
    const { products, pending } = this.props;
    console.log('products:', products);
    return (
      <Fragment>
        <h2>getData with redux middleware</h2>
        <div>
            <RedBtn onClick={() => { this.getData() }}>
                { !pending && 'getData'}
                { products.length === 0 && pending && <Loading /> }
            </RedBtn>
        </div>
        
        <ShowData
            pending={pending}
            products={products}
        />
        <RedBtn onClick={() => { this.props.actions.fetchProductsPending() }}>test</RedBtn>
        {/* <style jsx>{`
            .card {
                position: relative;
            }
        `}</style> */}
        
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);

 {/* thunk: https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao */}
        {/* redux-middleware structure */}
        {/* http://hahow-recruit.herokuapp.com/frontend */}
        {/* https://medium.com/@max80713/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e */}
        {/* https://redux.js.org/introduction/three-principles/ */}
        {/* https://medium.com/enjoy-life-enjoy-coding/react-%E5%9C%A8-hooks-%E4%B8%AD%E4%BB%A5-usecontext-%E8%88%87-usereducer-%E5%AF%A6%E7%8F%BE-redux-3a8aa403d9e4 */}
        {/* https://medium.com/@nightspirit622/%E8%A9%B2%E4%B8%8D%E8%A9%B2%E7%94%A8context-api-%E4%BE%86%E5%8F%96%E4%BB%A3-redux-4d7395d5c8da */}
        {/* https://progressbar.tw/courses/13?from=fb&fbclid=IwAR3WIOCF44Ol4AdORclr8qJbMp0JQBcgjcQwoQ44sLYTfjMbdknakx_o0d8 */}
        {/* https://blog.patw.me/archives/1310/write-frontend-unit-tests-with-jest/ */}
        {/* https://blog.techbridge.cc/2018/03/31/react-fiber-and-lifecycle-change/ */}
        {/* https://overreacted.io/?fbclid=IwAR1KBP7HM2txy3VFsB866LjAjsxLlyL7OLwARCoNA-o7Bsg__DjfEKF8Sak */}
        {/* https://www.niusnews.com/event/niussalon20200112?fbclid=IwAR01N0LpoUtaM5BzOtt4LI_tg5XRe9YK3nzJ4UMkWoJA6HVBZZBuhq6luNE */}
        {/* https://medium.com/@xinhe998/2019-frontend-internship-interview-ba79d896ee37 */}
        {/* https://fe-driver.github.io/vue-beauty/#/components/rate */}
        {/* Inside look at modern web browser (part 1)
        https://tinyurl.com/y957ow8c
        Inside look at modern web browser (part 2)
        https://tinyurl.com/y3jd2dzh
        Inside look at modern web browser (part 3)
        https://tinyurl.com/y42fjacn
        Inside look at modern web browser (part 4)
        https://tinyurl.com/ybscss6q
        跨來源資源共用（CORS）
        https://tinyurl.com/yyjbz72r
        循序漸進理解 HTTP Cache 機制
        https://tinyurl.com/y3aj5q4z
        我知道你懂 hoisting，可是你了解到多深？
        https://tinyurl.com/y2eqzebx
        彻底搞懂HTTPS的加密机制
        https://tinyurl.com/y3u4ksam
        浏览器的工作原理：新式网络浏览器幕后揭秘
        https://tinyurl.com/y2ykkgqx */}

    {/* https://react-beautiful-dnd.netlify.com/?path=/story/board--simple */}
    {/* https://codesandbox.io/s/9z7qwmmr7r */}
    {/* https://codesandbox.io/s/y31owyopwv?from-embed */}

    {/* https://blog.techbridge.cc/2018/06/27/advanced-react-component-patterns-note/ */}
    {/* https://blog.techbridge.cc/2018/07/21/advanced-react-component-patterns-note-II/ */}
    {/* https://www.niusnews.com/event */}
    {/* https://medium.com/@as790726/%E5%A6%82%E4%BD%95%E7%B5%84%E7%B9%94%E4%BD%A0%E7%9A%84-react-redux-%E7%9A%84%E6%AA%94%E6%A1%88%E6%9E%B6%E6%A7%8B-e000a1afdd1 */}
    {/* https://medium.com/@max80713/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e */}
    {/* https://medium.com/hulis-blog/english-174bd9b7c0ce */}
    {/* https://github.com/nicehorse06/frontend-practice-course */}
    {/* https://jerryc8080.gitbooks.io/understand-tcp-and-udp/chapter2.html */}
    {/* https://github.com/goodjack/developer-roadmap-chinese#%E5%89%8D%E7%AB%AF-frontend-%E8%B7%AF%E7%B7%9A%E5%9C%96 */}
    {/* https://free.com.tw/checklist-design/?utm_content=buffer6fe5f&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer&fbclid=IwAR3H9bBuZhOMJHMgoDLz8Sben_t8tilbw6-s4KbYxwwsN4-D8i0TzhQ6oq8 */}
    {/* https://dribbble.com/shots/6803035-TimeNote-Login?ref=checklist.design */}
    {/* https://www.checklist.design/pages/onboarding */}
    {/* https://blog.techbridge.cc/2017/12/08/rxjs/ */}
