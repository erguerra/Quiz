import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

interface IProps {
    text: string
    style?: any
    textStyle?: any
    disabled?: boolean
    onPress?: () => (void)
}

const Button = (props: IProps) => {

    return (
        <TouchableOpacity 
        style={props.style? [styles.container, props.style] : styles.container}
        onPress={props.onPress}
        disabled={props.disabled}>
            <Text style={[styles.text, props.textStyle]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: "#00A99C",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'baseline',
        elevation: 5,
    },

    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
});