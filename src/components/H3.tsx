import React, { ReactChild } from 'react'
import { StyleSheet, Text } from 'react-native'

interface IProps {
    color?: string
    style?: any
    children: ReactChild
}

const H3 = (props: IProps) => {
    return <Text style={[styles.title, , props.style]}>{props.children}</Text>;
}

export default H3;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "bold",
        justifyContent: "flex-start"
    }
});