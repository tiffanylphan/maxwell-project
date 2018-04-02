import React, { PropTypes } from 'react';
import MainWidget from '../components/MainWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActionCreators from '../actions/mainActionCreators';

function select(state) {
  return { mainStore: state.mainStore };
}

const Main = (props) => {
  const { dispatch, mainStore } = props;
  const actions = bindActionCreators(mainActionCreators, dispatch);
  const { } = actions;

  return (
    <MainWidget {...{ }} />
  );
};

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(select)(Main);
