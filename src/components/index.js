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
    pending: state.productsReducer.pending,
    products: state.productsReducer.products,

    productsDetail: state.productsReducer.productsDetail,
    detailPending: state.productsReducer.detailPending,
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
        ],
        heroId: null,
    };
    this.getData = this.getData.bind(this);
    this.clearData = this.clearData.bind(this);
    this.getDetail = this.getDetail.bind(this);
  }

  getData() {
    // redux-thunk
    // const { fetchHero } = this.props; 
    // fetchHero();

     // redux-saga
    const {
        // dispatch,
        actions,
    } = this.props;
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

  clearData() {
      const { actions } = this.props;
      actions.clearProductsSuccess();
  }

  getDetail(id) {
        this.setState({ heroId: null });
        const { actions, dispatch } = this.props;
        // https://stackoverflow.com/questions/52677991/how-do-i-dispatch-the-id-in-redux-saga
        // https://codesandbox.io/s/ojlyzyq5oy
        //   dispatch("GET_DATA", id)
        // dispatch(actions.fetchProductsDetailPending, id);
        dispatch({type: 'FETCH_PRODUCTS_DETAIL_PENDING', payload: { id } });
        //   actions.fetchProductsDetailPending(id);
        this.setState({ heroId: id });
  }

  render() {
    const { heroId } = this.state;
    const { pending, products, productsDetail, detailPending } = this.props;
    // console.log('products:', products);
    console.log('productsDetail: ', productsDetail);
    return (
      <Fragment>
        <h2>getData with redux middleware</h2>
        <div>
            <RedBtn onClick={this.getData}>
                { !pending && 'getData'}
                { products.length === 0 && pending && <Loading /> }
            </RedBtn>
        </div>
        
        <ShowData
            pending={pending}
            products={products}
            getDetail={this.getDetail}

            productsDetail={productsDetail}
            heroId={heroId}
            detailPending={detailPending}
        />
        {/* <RedBtn onClick={() => { this.props.actions.fetchProductsPending() }}>test</RedBtn> */}
        { products.length > 0 &&
            <RedBtn onClick={this.clearData}>Clear</RedBtn>
        }
        {/* <RedBtn onClick={() => {this.getDetail(1); }}>getDetail</RedBtn> */}
        
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

