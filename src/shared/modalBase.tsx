import React from 'react'
import { Modal, TouchableWithoutFeedback, Keyboard, View } from 'react-native';


export default (props: {visible: boolean, transparent?: boolean, children: any}) => {
    const { visible, transparent, children } = props;
    return (
        <Modal visible={visible} animationType='fade' transparent={transparent ? true : false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                { children }
            </TouchableWithoutFeedback>
        </Modal>
    )
}