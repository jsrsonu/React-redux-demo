
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { fetchPeopleFromAPI } from './actions';

let styles
const App = (props) => {
  const { container,button,text,buttonText } = styles

  const { people, isFetching } = props.people
  console.log("people", props.people);
    return(
      <View style={container}>
        <Text style={text}>
            Redux App
        </Text>
        <TouchableHighlight onPress={props.getPeople} style={button}>
          <Text style={buttonText}>Fetch Data</Text>
        </TouchableHighlight>
     
      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person,index) => {
            return(
              <View key={index}>
                <Text>Name : {person.name}</Text>
              </View>
            )
          })
         ) : null
      }
      </View>
    )
}

styles = StyleSheet.create({
  container: {
    marginTop : 100,
    paddingLeft : 20,
    paddingRight : 20
  },
  text : {
    textAlign : 'center'
  },
  button:{
      backgroundColor : 'lightblue',
      height : 50,
      justifyContent : 'center',
      alignItems : 'center'
  },
  buttonText : {
    color : 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

function mapStateToProps(state){
  return {
    people: state.people
  }
} 

function mapDispatchToProps(dispatch){
  return {
    getPeople : () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
