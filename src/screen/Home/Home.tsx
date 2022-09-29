import React from 'react';
import {FlatList, Text, View, Pressable, ActivityIndicator} from 'react-native';
import {getCategories} from '../../api/Categories';
import {GetProducts, getProducts} from '../../api/products';
import Card from '../../components/card/card';
import Tab from '../../components/Tab/Tab';

type Props = {};
type State = {
  categories: Array<Object>;
  isLoading: boolean;
  isSelected: string;
  products: Array<GetProducts | unknown>;
};

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      categories: [],
      isLoading: true,
      isSelected: '',
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    Promise.all([getCategories(), getProducts()])
      .then(res => {
        this.setState({
          categories: res[0].categories,
          products: res[1].products,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const {categories, isSelected, products, isLoading} = this.state || {};
    if(isLoading){
      return (<View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
        <ActivityIndicator/>
      </View>)
    }
    return (
      <View style={{flex: 1}}>
        {categories.length ? (
          <View style={{}}>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <Tab
                  isSelected={item._id === isSelected}
                  label={item.name}
                  onPress={() => {
                    this.setState({
                      isSelected: item._id,
                    });
                  }}
                />
              )}
              keyExtractor={item => item._id}
              // contentContainerStyle={{height: 50}}
            />
          </View>
        ) : null}
        <FlatList
          data={products}
          ListEmptyComponent={() => <Text>no data</Text>}
          numColumns={2}
          renderItem={({item}) => (
            <Card
              onPress={() => {
                this.props.navigation.navigate('DetailsScreen', {...item});
              }}
              url={item.avatar}
              labels={[item.name, `$${item.price}`]}
            />
          )}
          keyExtractor={item => item._id}
          // contentContainerStyle={{height: 50}}
          columnWrapperStyle={{alignItems: 'center', justifyContent: 'center'}}
        />
        <Pressable
          onPress={() => {this.props.navigation.navigate('CreateOrderScreen',{categories});}}
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            backgroundColor: '#CCCC',
            right: 20,
            height: 50,
            width: 50,
            bottom: 20,
          }}>
          <Text style={{fontSize: 30}}>+</Text>
        </Pressable>
      </View>
    );
  }
}
export default Home;
