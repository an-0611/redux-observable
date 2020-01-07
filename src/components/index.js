import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { bindActionCreators } from 'redux';
// import * as productAction from '../actions/fetchHeroActions';
import * as productAction from '../reducers/hero';
// import { fetchHero } from './fetchHero'; // thunk action method to fetch data , contain 3 actions

import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 8px;
`;

const Item = styled.div`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 8px;
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
    // const { fetchHero } = this.props;
    // fetchHero(); // redux-thunk

    this.props.dispatch({type: 'FETCH_PRODUCTS_PENDING', payload: {} }); // redux-saga

    // 2020/1/2 // http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
    // line login popup window
    // https://dotblogs.com.tw/shadow/2019/10/13/011033
    // https://www.quackit.com/javascript/popup_windows.cfm
    // https://redux.js.org/introduction/three-principles/
    // https://medium.com/@max80713/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e
  }

  render() {
    const { products, pending } = this.props;
    const Loading = ({ type = 'spinningBubbles', color = '#fff' }) => (
      <ReactLoading type={type} color={color} height={'50%'} width={'25%'} delay={2} /> // https://github.com/fakiolinho/react-loading
    );
    console.log('products:', products);
    // console.log('actions: ', this.props.actions)
    return (
      <div>
        <div>MainSection</div>
        { products.length === 0 && <button onClick={() => { this.getData() }}>getData</button> }
        { pending && <Loading /> }
        { !pending && products.length === 0 && <div>no mapping hero data</div>}
        { !pending && products.length > 0 &&
          products.map(hero => (
            <div key={hero.id} style={{ display: 'inline-block' }} >
              <img src={hero.image} alt={hero.name} style={{ width: '30px', height: '30px' }} />
              <span>{hero.name}</span>
            </div>
          ))
        }
        <button onClick={() => { this.props.actions.fetchProductsPending() }}>test</button>
        {/* <style jsx>{`
					.card {
						position: relative;
					}
			  `}</style> */}
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
        


        <DragDropContext
            onDragEnd={result => {
                console.log(result);
                const { source, destination, draggableId } = result;
                if (!destination) return;

                let arr = Array.from(this.state.todos);
                console.log(arr);
                const [remove] = arr.splice(source.index, 1);
                arr.splice(destination.index, 0, remove);
                this.setState({
                    todos: arr
                });
            }}
        >
            <Droppable droppableId="d12--312321321">
                {provided => (
                    <Container ref={provided.innerRef} {...provided.droppableProps} style={{ border: '1px solid #ddd', borderRadius: '3px', padding: '8px' }}>
                        {this.state.todos.map((t, i) => (
                            <Draggable draggableId={t.id} index={i}>
                                {p => (
                                    <Item ref={p.innerRef}
                                        {...p.draggableProps}
                                        {...p.dragHandleProps}
                                        key={t.id}
                                    >
                                        {t.text}
                                    </Item>
                                )}
                            </Draggable>
                        ))}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>



      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);