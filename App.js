import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Platform, SafeAreaView } from 'react-native';
import { Images, Profiles } from './App/Themes';


/*class ActionItems extends React.Component{
  render(){
    return(
      <View 
        style = {{
          flexDirection: 'row',
        }}>
        <View style = {{        
          width: 40,
          height: 40,
          borderRadius: 40/2,
          backgroundColor: 'white',}} />
        <Image style = {styles.buttonpic} source={require('./App/Images/super-like.png')} /> 
      </View>
    );
  }
}*/

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <View style={styles.container} > 
          <View style ={styles.navbar} >
            <Image style = {[styles.navpic, { tintColor: '#C5C5C5'}]} source={require('./App/Images/gear.png')} /> 
            <Image style = {styles.navpic} source={require('./App/Images/tinder-logo.png')} /> 
            <Image style = {[styles.navpic, { tintColor: '#C5C5C5'}]} source={require('./App/Images/chatting.png')} /> 

          </View> 

          <View style = {styles.center}>
            <View style = {styles.profile} >
              <Image style = {styles.profpic} source={this.state.profileImage} />  
              <Text style={ { fontWeight: 'bold', fontSize: 24, marginLeft: 10 }} >
                {this.state.name + ", "} 
                <Text style={ {fontWeight: 'normal', marginLeft: 20 }}>
                {this.state.age}
                </Text>
              </Text>  
              <Text style={ { color: 'gray', fontSize: 16, marginLeft: 10  } }>{this.state.occupation}</Text>
            </View>
          </View>


          <View style ={styles.buttonsbar} >
            <View style = {styles.smallCircle}>
              <Image style = {styles.buttonpic} source={require('./App/Images/rewind.png')} />
            </View> 
            <View style = {styles.largeCircle}>
              <Image style = {styles.buttonpic} source={require('./App/Images/nope.png')} /> 
            </View>
            <View style = {styles.smallCircle}>
              <Image style = {styles.buttonpic} source={require('./App/Images/boost.png')} /> 
            </View>
            <View style = {styles.largeCircle}>
              <Image style = {styles.buttonpic} source={require('./App/Images/like.png')} /> 
            </View>
            <View style = {styles.smallCircle}>
              <Image style = {styles.buttonpic} source={require('./App/Images/super-like.png')} /> 
            </View>
          </View>         
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#F0F0F0',
  },

  navbar: {
    flex: 1,
    flexDirection: 'row',
    height: Platform.OS==='ios'? 44: 56,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent:'space-between',
    paddingTop: '3%',
  },

  navpic: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },

  center:{
    flex:3,
    flexDirection: 'column',
    alignItems: 'stretch', 
    justifyContent: 'center',

  },

  profile: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },

  profpic: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: '2%'
  },

  buttonsbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:'center',
  },

  buttonpic:{
    alignSelf: 'center',
    width: '50%',
    height: '50%',
    resizeMode: 'center',
  },

  smallCircle:{
    width: 40,
    height: 40,  
    borderRadius: 40/2,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginHorizontal: '2%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
  largeCircle:{
    width: 60,
    height: 60,  
    borderRadius: 60/2,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2%',

  },

});