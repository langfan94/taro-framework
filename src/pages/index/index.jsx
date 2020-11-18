import React from 'react'
import { connect } from 'react-redux';
import { View, Text } from '@tarojs/components'
import './index.less'

const Index = (props) => {
  const {
    loading,
    loginInfo,
    getInfo,
  } = props;

  console.log(loading, loginInfo, getInfo);

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}

const mapState = (state) => {
  return {
    loading: state.loading.effects.common.getInfo,
    loginInfo: state.common.loginInfo,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getInfo: dispatch.common.getInfo,
  };
};

export default connect(mapState, mapDispatch)(Index);
