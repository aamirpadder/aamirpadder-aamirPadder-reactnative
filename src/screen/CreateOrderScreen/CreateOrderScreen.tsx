// disable-eslint
import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, TextInput, View} from 'react-native';
import Tab from '../../components/Tab/Tab';
import {Input} from '../../components/TextInput';
import http from '../../api/';
import {addProduct} from '../../api/Categories';
type Props = {};

class CreateOrderScreen extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: '',
      isSelected: '',
      form: {
        title: '',
        description: '',
        imgLink: '',
        price: '',
      },
      loading: false,
    };
  }

  onChange = (value: string, key: string) => {
    this.setState({
      form: {
        [key]: value,
        ...this.state.form,
      },
    });
  };

  saveData = () => {
    const {form, selectedCategory} = this.state;

    const data = {
      Name: form.title,
      Price: form.price,
      Category: selectedCategory,
      Description: form.description,
      Avatar: form.imgLink,
      DeveloperEmail: 'aamir.paddar@gmail.com',
    };

    this.setState({
      loading: true,
    });
    addProduct(data)
      .then(res => {
        this.props.navigation.navigate.goBack();
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    const {selectedCategory, isSelected, form, loading} = this.state || {};
    const {route, navigation} = this.props || {};
    const {categories} = route.params || {};

    return (
      <View style={{flex: 1}}>
        {loading && (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator />
          </View>
        )}

        <Input
          placeholder={'Product title'}
          value={form.title}
          onChangeText={value => {
            this.onChange(value, 'title');
          }}
        />

        <Input
          placeholder={'Price'}
          value={form.price}
          onChangeText={value => {
            this.onChange(value, 'price');
          }}
        />
        <Input
          placeholder="Description"
          value={form.description}
          style={{height: 120}}
          onChangeText={value => {
            this.onChange(value, 'description');
          }}
        />

        <Input
          placeholder="Image Link"
          value={form.imgLink}
          onChangeText={value => {
            this.onChange(value, 'imgLink');
          }}
        />

        <Text style={{paddingLeft:10}}>Selected category: {selectedCategory}</Text>
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
                      selectedCategory: item.name,
                    });
                  }}
                />
              )}
              keyExtractor={item => item._id}
              // contentContainerStyle={{height: 50}}
            />
          </View>
        ) : null}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Tab
            isSelected={false}
            onPress={() => {
              // selectedCategory;
              saveData()
            }}
            label="Add Product"
          />
        </View>
      </View>
    );
  }
}
export default CreateOrderScreen;
