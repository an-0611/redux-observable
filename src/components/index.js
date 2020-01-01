import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import fetchHero from './fetchHero';

const mapStateToProps = state => ({
  products: state.productsReducer.products,
  pending: state.productsReducer.pending,
})

const mapDispatchToProps = dispatch => {
  return {
    fetchHero: () => dispatch(fetchHero()),
    dispatch,
  }
}

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getData = this.getData.bind(this);
  }

  getData() {
    const { fetchHero } = this.props;
    fetchHero();
  }

  render() {
    const { products, pending } = this.props;
    const Loading = ({ type = 'spinningBubbles', color = '#fff' }) => (
      <ReactLoading type={type} color={color} height={'50%'} width={'25%'} delay={2} />
      // https://github.com/fakiolinho/react-loading
    );
    console.log('products:', products);
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);