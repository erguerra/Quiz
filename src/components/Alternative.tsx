import React, { useState } from 'react'
import { StyleSheet, View, LayoutAnimation } from 'react-native'
import Button from './Button';


interface IProps{
    rightAnswer: boolean,
    text: string,
    onSelect?: () => (void),
    disabled?: boolean
}

const Alternative = (props: IProps) => {

    const [isSelected, setIsSelected] = useState<boolean>(false);


    const getStyle = () => {

        if(props.disabled && props.rightAnswer){
            return [styles.rightAnswer, styles.button]
        }

        if(isSelected && !props.rightAnswer){
            return [styles.wrongAnswer, styles.button];
        }
        
        return styles.button;
    }

    const getTextStyle = () => {
        if(props.disabled && props.rightAnswer){
            return styles.text;
        }

        if(isSelected && !props.rightAnswer){
            return styles.text;
        }
        
        return null;
    }

    const selectAnswer = () => {
        setIsSelected(true);
        if(props.onSelect){
            props.onSelect()
        }
    }

    return <View style={{flexDirection: 'row'}}>
            <Button 
                text={props.text}
                style={getStyle()}
                textStyle={getTextStyle()}
                disabled={props.disabled}
                onPress={selectAnswer}
            />
        </View>

}

export default Alternative;


const styles = StyleSheet.create({
    button: {
        flex: 1
    },

    rightAnswer: {
        borderColor: "#09E446",
        borderWidth: 3,
        backgroundColor: "#FFFFFF",
    },

    wrongAnswer: {
        borderColor: "#F40A0A",
        borderWidth: 3,
        backgroundColor: "#FFFFFF",
    },

    text: {
        color: '#006960'
    }
}); 