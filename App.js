import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import { Images, Profiles } from './App/Themes';


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
            <TouchableOpacity onPress={this._onPressButton} >
              <Image style = {[styles.navicon, { tintColor: '#C5C5C5'}]} source={require('./App/Images/gear.png')} /> 
            </TouchableOpacity>
            <Image style = {styles.navicon} source={require('./App/Images/tinder-logo.png')} /> 
            <TouchableOpacity onPress={this._onPressButton} >
              <Image style = {[styles.navicon, { tintColor: '#C5C5C5'}]} source={require('./App/Images/chatting.png')} /> 
            </TouchableOpacity>
          </View> 

          <View style = {styles.center}>
            <View style = {styles.profile} >
              <Image style = {styles.profpic} source={this.state.profileImage} />  
              <Text style={ { fontWeight: 'bold', fontSize: 24, marginLeft: 10 }} >
                {this.state.name + ", "} 
                <Text style={ {fontWeight: 'normal', marginLeft: 10 }}>
                {this.state.age}
                </Text>
              </Text>  
              <Text style={ { color: 'gray', fontSize: 16, marginLeft: 10, paddingBottom: 10  } }>{this.state.occupation}</Text>
            </View>
          </View>

          <View style ={styles.buttonsbar} >
            <TouchableOpacity onPress={this._onPressButton} style={styles.smallcircle}>
              <Image style = {styles.buttonicon} source={require('./App/Images/rewind.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton} style={styles.largecircle}>
              <Image style = {styles.buttonicon} source={require('./App/Images/nope.png')} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton} style={styles.smallcircle}>
              <Image style = {styles.buttonicon} source={require('./App/Images/boost.png')} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton} style={styles.largecircle}>
              <Image style = {styles.buttonicon} source={require('./App/Images/like.png')} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton} style={styles.smallcircle}>
              <Image style = {styles.buttonicon} source={require('./App/Images/super-like.png')} /> 
            </TouchableOpacity>
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
    flex: .5,
    flexDirection: 'row',
    height: Platform.OS==='ios'? 44: 56,
    marginTop: Platform.OS==='ios'? 5: 20,
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent:'space-between',
  },

  navicon: {
    width: Dimensions.get('window').width * .2,
    height: '60%',
    resizeMode: 'contain',
  },

  center:{
    flex: 4,
    flexDirection: 'column',
    alignItems: 'stretch', 
    justifyContent: 'center',
  },

  profile: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
  },

  profpic: {
    justifyContent: 'center',
    width: Dimensions.get('window').width * .9 -2, //to account for 5% margin and 1px border on either side
    height: Dimensions.get('window').width * .9 -2,
    marginBottom: '2%',
    alignSelf: 'center'
  },

  buttonsbar: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:'center',
    marginBottom: '5%'
  },

  buttonicon:{
    alignSelf: 'center',
    width: '50%',
    height: '50%',
    resizeMode: 'center',
  },

  smallcircle:{
    width: 40,
    height: 40,  
    borderRadius: 40/2,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',   
    marginHorizontal: '2%',
  },
  
  largecircle:{
    width: 50,
    height: 50,  
    borderRadius: 50/2,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2%',
  },

});