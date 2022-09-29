import React, {FunctionComponent, ReactNode} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import style from './styles';

type Props = {
  labels: Array<string>;
  url: string;
  onPress?: () => void;
};

const Card = (props: Props): ReactNode => {
  const {url, labels, onPress} = props || {};
  return (
    <Pressable onPress={onPress} style={style.cardConatiner}>
      <View
        style={{
          paddingVertical: 20,
          width: '100%',
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: url}}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </View>
      <View style={style.bottomCardcontainer}>
        {labels.map((item, index) => {
          return (
            <Text
            numberOfLines={1}
              style={{color: '#ffff', paddingVertical: 3, paddingLeft: 7}}
              key={`${item}${index}`}>
              {item}
            </Text>
          );
        })}
      </View>
    </Pressable>
  );
};

export default Card;
