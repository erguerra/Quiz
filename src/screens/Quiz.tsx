import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import questions from '../data/data'
import { Question, Spacer }  from '../components/';


const Quiz = () => {
    return (
        <ScrollView style={styles.container}>
            { questions.map(question => {
                return <React.Fragment key={question.question}>
                        <Question question={question.question} alternatives={question.alternatives} />
                        <Spacer size={16}/>
                    </React.Fragment>
            })}
        </ScrollView>
        
    );
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});