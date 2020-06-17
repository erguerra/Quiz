import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import H2 from './H2';
import Alternative from './Alternative';
import Spacer from './Spacer';

interface IAnswer{
    text: string,
    rightAnswer: boolean,
}

interface IProps{
    question: string,
    alternatives: IAnswer[]
}

const Question = (props: IProps) => {
    const [disabled, setDisabled] = useState<boolean>(false);

    const disableQuestion = () => {
        setDisabled(true);
    }

    return (<View style = { styles.container }>
        <H2>{props.question}</H2>
        {props.alternatives.map((alternative : IAnswer) => {
            return <View key={alternative.text} style={styles.container}>
                    <Spacer size={16}/>
                    <Alternative 
                        text={alternative.text}
                        disabled={disabled}
                        onSelect={disableQuestion}
                        rightAnswer={alternative.rightAnswer}/>
                </View>
                
        })}
    </View>);
}

export default Question;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});