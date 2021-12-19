import React from 'react';
import { format } from "date-fns";
import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

//components
import { GilroyText, MontserratText, SMIcons } from 'library/components/atoms';

//styles
import styles from './EventItemCard.styles';
import { apiConfig } from 'api/config';
import { EventItem } from 'library/types/EventItem.interface';

//types
type EventItemCardProps = {
	item: EventItem;
	onPress: (item: EventItem) => void;
	style?: StyleProp<ViewStyle>
};

export const EventItemCard: React.FC<EventItemCardProps> = ({
	item,
	onPress,
	style,
}) => {
	const getImageUri = (imageName: string) => {
		return {uri: `${apiConfig.baseUrl}img/products/${imageName}`}
	}

	const prettyDate = (dateStr: string) => {
		// var date = new Date(dateStr);
		// return format(date, "MMMM do, yyyy H:mma");
		const options = { year: "string", month: "string", day: "string" };
  		return new Date(dateStr).toLocaleDateString(undefined, options);
	}

	return (
		<TouchableOpacity
			style={[styles.container, style]}
			onPress={() => onPress(item)}
		>
			<GilroyText size={'g5'} type={'Semibold'} styleText={styles.header}>{item.topic}</GilroyText>
			<MontserratText style={styles.dateText} lines={2} size={'m3'} type={'Medium'}>{prettyDate(item.publishDate)}</MontserratText>
		</TouchableOpacity>
	);
};
