import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

//components
import { GilroyText, SMIcons } from 'library/components/atoms';

//styles
import styles from './RatingItemCard.styles';
import { RatingItem } from 'library/types/RatingItem.interface';

//types
type RatingItemCardProps = {
	item: RatingItem;
	index: number;
	onPress: () => void;
	style?: StyleProp<ViewStyle>
};

export const RatingItemCard: React.FC<RatingItemCardProps> = ({
	item,
	index,
	onPress,
	style,
}) => {
	const getColor = () => {
		switch (index) {
			case 1:
				return '#FFD70080';
			case 2:
				return '#C0C0C080';
			case 3:
				return '#b08d5780';
			default:
				return '#8CEAFF80'
		}
	}

	return (
		<TouchableOpacity
			style = {[styles.container, style]}
			onPress = {onPress}
		>
			<View style={[styles.indexContainer, {backgroundColor: getColor()}]}>
				<GilroyText
					size = 'g1'
					type = 'Medium'
					style = {styles.header}
				>
					{index}
				</GilroyText>
			</View>
			
			<GilroyText
				size = 'g5'
				type = 'Medium'
				styleText={styles.text}
				style={styles.textContainer}
			>
				{item.name}
			</GilroyText>

			<GilroyText
				size='g5'
				type='Medium'
				styleText={styles.takeCodeText}
				style={styles.takeCode}
			>
				{item.points}
			</GilroyText>

			<SMIcons
				name={'ic_star'}
				size={20}
				style={styles.star_icon}
				color={'#fe7062'}
			/>
		</TouchableOpacity>
	);
};
