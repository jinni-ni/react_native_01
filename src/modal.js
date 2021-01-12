import React, {Component} from 'react';
import { View, Text, Button, Modal } from 'react-native';



class ModalComponent extends Component {
    state = {
        modal: false,
    }
    handleModal= () => {
        this.setState({
            modal: this.state.modal ? false : true,

        })
    }
      render() {
        return (
            <View style={{width: '100%'}}>
                <Button
                    title="Open modal"
                    onPress={this.handleModal}
                />
                <Modal
                    visible={this.state.modal}
                    animationType={'slide'}
                    onShow={()=>alert('Warnging!')}
                >
                    <View style={{
                        marginTop: 60,
                        backgroundColor: 'red',
                    }}>
                        <Text>This is Modal content.</Text>
                    </View>
                    <Button
                        title="Go back"
                        onPress={this.handleModal}
                    />
                </Modal>
            </View>
        );
    }
}

export default ModalComponent;
