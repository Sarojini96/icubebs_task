import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import render from './list';
import {connect} from 'react-redux';
import data from './redux/reducer';

const Demo = ({...props}) => {
    
  return (
    <View style={styles.mainBody}>
        <FlatList
        data={props.data}
        renderItem={render}
        keyExtractor={(item) => item.id}
      />
      </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

const mapStateToProps=(state)=>{
    return{
        data:state.data
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        data:()=>{dispatch(data())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Demo);