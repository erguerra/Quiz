import React from 'react';
import {
  View
} from 'react-native';

interface IProps{
    size: number
}

const Spacer = (props: IProps) => {
    return <View style={{height: props.size, width: props.size}}/>
}

export default Spacer;