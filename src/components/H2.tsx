import React, { ReactChild } from 'react'
import { StyleSheet, Text } from 'react-native'

interface IProps {
    color?: string
    disabled?: boolean
    children: ReactChild
}

const H2 = (props: IProps) => {
    return <Text style={styles.title}>{props.children}</Text>;
}

export default H2;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        justifyContent: "flex-start"
    }
});