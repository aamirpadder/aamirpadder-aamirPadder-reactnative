import React from 'react';
import {TextInput} from 'react-native';

export const Input = ({value, onChangeText, placeholder, style}: any) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      style={[
        {
          width: '90%',
          padding: 10,
          borderRadius: 10,
          borderColor: '#cccc',
          borderWidth: 1,
          margin: 10,
          alignSelf: 'center',
        },
        style,
      ]}
      default={value}
      multiline
      placeholder={placeholder}
    />
  );
};
