import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: ""
    }
  }

  updateAge = (age) => {
    this.setState({ age: age })
  }

  render() {
    var age = []
    {
      for (let i = 1; i <= 100; i++) {
        age[i] = "" + i;
      }
    }

    return (
      <View style={style.Container} >
        <Text style={style.Text}>
          Select an age
          </Text>
        <Picker selectedValue={this.state.age}
          onValueChange={this.updateAge}
        >{
            age.map((item, key) => (
              <Picker.Item key={key} label={item} value={item} />
            ))
          }
        </Picker>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    alignSelf: "center",
   justifyContent:'center',
   flex:1
  },
  Text: {
    fontSize: 20,
    color: "blue"
  }

})