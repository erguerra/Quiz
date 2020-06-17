import React, { useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import questions from '../data/data'
import { Question, Spacer }  from '../components/';
import { SafeAreaView } from 'react-native-safe-area-context';



const Quiz = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            { questions.map(question => {
                return <React.Fragment key={question.question}>
                        <Question 
                            question={question.question}
                            alternatives={question.alternatives} 
                            />
                        <Spacer size={16}/>
                    </React.Fragment>
            })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    }
});