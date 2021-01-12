import React, {Component} from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TextInput, Image} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Steak from './assets/images/steak.jpg';
import Modal from './src/modal';

class App extends Component {
    state = {
        myTextInput: '',
        alphabet: ['a', 'b', 'c', 'd']
    }
    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }
    onAddTextInput = () => {
        this.setState(prevState =>{
            return {
                myTextInput: '',
                alphabet: [...prevState.alphabet, prevState.myTextInput],
            }
        })
    }

    render() {
        return (
          <View style={styles.mainView}>
              <Modal />
              {/*<Image*/}
              {/*    style={styles.image}*/}
              {/*    source={{uri: 'https://picsum.photos/id/237/200/300'}}*/}
              {/*    resizeMode='contain'*/}
              {/*    onLoadEnd={()=>alert('image Loaded!!')}*/}
              {/*/>*/}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10,
    },
    subView: {

        backgroundColor: 'yellow',
        marginBottom: 10,

    },
    anotherSubView: {
        flex: 2,
        backgroundColor: 'yellow',
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'red',
        padding: 20,
        backgroundColor: 'pink',
        margin: 10,
    },
    image: {
        backgroundColor: 'red',
        width: '100%',
        height: 500,
    }
});

export default App;
