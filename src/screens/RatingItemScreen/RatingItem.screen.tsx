import { useRoute } from '@react-navigation/native';
import { ShopItem } from 'library/types/ShopItem.interface';
import React from 'react';

//views
import {RatingItemView} from './RatingItem.view';

type RatingItemScreenProps = {};

export const RatingItemScreen: React.FC<RatingItemScreenProps> = ({}) => {
  //navigation
	const route = useRoute();
	const params = route?.params as {details: ShopItem};
	const product = params.details as ShopItem;

	const onPurchasePress = (product: ShopItem) => {
		console.log("buy");
	}
  
  return <RatingItemView product={product} onPurchasePress={onPurchasePress} />;
};
