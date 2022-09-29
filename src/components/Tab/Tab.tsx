import React, {FunctionComponent, ReactNode} from 'react';
import {Pressable, Text, Image} from 'react-native';
import style from './styles';

type Props = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

const Tab = (props: Props) => {
  const {label, onPress, isSelected} = props || {};
  const bgColor = isSelected
    ? {
        backgroundColor: '#ffff',
      }
    : null;
  return (
    <Pressable onPress={onPress} style={[style.cardConatiner, bgColor]}>
      <Text style={{color: isSelected ? 'black' : 'white'}}>{label}</Text>
    </Pressable>
  );
};

export default Tab;
