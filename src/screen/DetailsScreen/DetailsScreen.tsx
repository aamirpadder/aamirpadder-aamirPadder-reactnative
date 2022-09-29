import React from 'react';
import {Text, View, Image} from 'react-native';
type Props = {};
class DetailsScreen extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {route, navigation} = this.props || {};
    const {name,price,description,avatar} =  route.params || {}
    return ( 
      <View style={{flex: 1,justifyContent:'space-between'}}>
        <View style={{flex: 0.4}}>
          <Image style={{width: '100%', height: '100%',}}  resizeMode='contain' source={{uri: avatar}} />
        </View>
        <View
          style={{
            flex: 0.5,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: 'black',
            paddingHorizontal:10,
            paddingTop: 5
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 20
            }}>
            <Text style={{color:"#ffff",paddingVertical: 3,paddingLeft:7}}>{name}</Text>
            <Text style={{color:"#ffff",paddingVertical: 3,paddingLeft:7}}>${price}</Text>
          </View>
          <Text style={{color:"#ffff",paddingVertical: 3,paddingLeft:7}}>{description}</Text>
        </View>
      </View>
    );
  }
}
export default DetailsScreen;
