import React from 'react'
import { StyleSheet} from 'react-native'
import { TextInput as RNTextInput } from 'react-native'

interface IProps{
    value: string,
    onChangeText: (text: string) => (void)
}

const TextInput = (props: IProps) => {
    return <RNTextInput 
    value={props.value}
    onChangeText={props.onChangeText}
    underlineColorAndroid={"black"}
    style={styles.input}/>
}

export default TextInput;

const styles = StyleSheet.create({
    input: {
        fontSize: 24,
    }
});