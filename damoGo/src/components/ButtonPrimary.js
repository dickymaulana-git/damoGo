import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ButtonPrimary(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={props.styleText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
