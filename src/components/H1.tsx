import React, { ReactChild } from 'react'
import { StyleSheet, Text } from 'react-native'

interface IProps {
    color?: string
    children: ReactChild
    style?: any
}

const H1 = (props: IProps) => {
    return <Text style={[styles.title, props.style]}>{props.children}</Text>;
}

export default H1;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
        justifyContent: "flex-start"
    }
});