import { useRoute } from '@react-navigation/native';
import { ShopItem } from 'library/types/ShopItem.interface';
import React from 'react';

//views
import {ProductView} from './Product.view';

type ProductScreenProps = {};

export const ProductScreen: React.FC<ProductScreenProps> = ({}) => {
  //navigation
	const route = useRoute();
	const params = route?.params as {details: ShopItem};
	const product = params.details as ShopItem;

	const onPurchasePress = (product: ShopItem) => {
		console.log("buy");
	}
  
  return <ProductView product={product} onPurchasePress={onPurchasePress} />;
};
