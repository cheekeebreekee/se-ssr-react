import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrice } from '../actions';


class PricesList extends Component {
  componentDidMount() {
    // this.props.fetchPrice(); TODO: needed if user enter direct url?!
  }

  renderPrices() {
      console.log(this.props.prices);
      return <li key={this.props.prices.date}>Price: {this.props.prices.value} Market: {this.props.prices.place}</li>
  }

  render() {
    return (
      <div>
        List of prices:
        <ul>{this.renderPrices()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { prices: state.prices }
}

function loadData(store) {
  return store.dispatch(fetchPrice());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchPrice })(PricesList)
};

