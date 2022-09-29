import {ComponentType} from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Home from '../screen/Home/Home';
import DetailsScreen from '../screen/DetailsScreen/DetailsScreen';
import CreateOrderScreen from '../screen/CreateOrderScreen/CreateOrderScreen';
export interface Routemodal {
  name: string;
  component: ComponentType;
  options?: NativeStackNavigationOptions;
}

export const MainRoute: Routemodal[] = [
  {
    name: 'Home',
    component: Home,
    options: {headerShown: false},
  },
  {
    name: 'DetailsScreen',
    component: DetailsScreen,
  },
  {
    name: 'CreateOrderScreen',
    component: CreateOrderScreen,
  },
];
