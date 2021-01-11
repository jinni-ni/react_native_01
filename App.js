import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header'

class App extends Component {
    state = {
        appName: 'My first app',
    }

    render() {
        return (
            <View style={styles.mainView}>
               {/*<Header name={this.state.appName}/>*/}
               <Text
                   style={styles.mainText}
                onPress={()=>alert('text touch event')}>
                   Hello world
               </Text>
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
        justifyContent: 'center'
    },
    subView: {

        backgroundColor:'yellow',
        marginBottom: 10,

    },
    anotherSubView: {
        flex: 2,
        backgroundColor:'yellow',
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
    }
})

export default App;
