import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ counter: state.counter })

// function mapDispatchToProps() {
//     return {

//     }
// }

class MainSection extends Component {
  render() {
    const { counter } = this.props;
    console.log(counter);
    return (
      <div>
        <div>MainSection</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MainSection);