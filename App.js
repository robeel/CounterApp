import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
//import { Constants } from 'expo';

export default class App extends Component {
  state={
    count:0
  }
    onplus = () =>
      {
          this.setState(
            {
              count: this.state.count +1
            }
          )
      }
      onMinus = () =>{
        this.setState(
          {
            count: this.state.count-1
          }
        )
      }
    
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{this.state.count}</Text>
        </View>
        
        <View style={styles.btnsContainer}>
          <TouchableOpacity style={[styles.btn,styles.btnsContainer]}
          onPress ={this.onMinus}>
            <Text style={styles.btnText}>Minus Button</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={[styles.btn,styles.btnsContainer]}
          onPress={this.onplus}>
            <Text style={styles.btnText}>Plus Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#41C746',
  },
  countContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  count: {
    fontSize: 150,
     color: 'white'
  },
  btnsContainer: {
    flexDirection: 'row',
    
  },
  btn: {
    width: 150,
    height: 150,
  },
  btnText: {
    fontSize: 32,
    color: 'red'
  }
});