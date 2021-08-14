import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../config/Colors';

export default function BottomDots(props) {
  const handleSlide = props.slide;
  return (
    <View style={{width:'25%'}}>
      {handleSlide === 1 ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Icon name="checkbox-blank-circle" size={15} color={color.primary} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
        </View>
      ) : handleSlide === 2 ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.primary} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
        </View>
      ) : handleSlide === 3 ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.primary} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.circle} />
          <Icon name="checkbox-blank-circle" size={15} color={color.primary} />
        </View>
      )}
    </View>
  );
}
