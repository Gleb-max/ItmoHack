import { useRoute } from '@react-navigation/native';
import { RatingItem } from 'library/types/RatingItem.interface';
import { ShopItem } from 'library/types/ShopItem.interface';
import React from 'react';

//views
import {RatingItemView} from './RatingItem.view';

type RatingItemScreenProps = {};

export const RatingItemScreen: React.FC<RatingItemScreenProps> = ({}) => {
	//navigation
	const route = useRoute();
	const params = route?.params as {type: 'student' | 'faculty', item: RatingItem};
	const type = params.type;
	const item = params.item as RatingItem;

  return <RatingItemView type={type} item={item} />;
};
