import React from 'react';
import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

//components
import { GilroyText, MontserratText, SMIcons } from 'library/components/atoms';

//styles
import styles from './ShopItemCard.styles';
import { apiConfig } from 'api/config';
import { ShopItem } from 'library/types/ShopItem.interface';
import { StandardButton } from 'library/components';

//types
type ShopItemCardProps = {
	item: ShopItem;
	onPress: (item: ShopItem) => void;
	style?: StyleProp<ViewStyle>
};

export const ShopItemCard: React.FC<ShopItemCardProps> = ({
	item,
	onPress,
	style,
}) => {
	const getImageUri = (imageName: string) => {
		return {uri: `${apiConfig.baseUrl}img/products/${imageName}`}
	}

	return (
		<View style={styles.container}>
			<Image source={getImageUri(item.imageName)} style={styles.image} />
			
			<View style={styles.contentContainer}>
				<GilroyText size={'g8'} type={'Semibold'} styleText={styles.header}>{item.name}</GilroyText>
				<MontserratText lines={2} size={'m3'} type={'Medium'}>{item.description}</MontserratText>
				<StandardButton
					text={'Подробнее'}
					onPress={() => onPress(item)}
					style={styles.moreButton}
					reverse={true}
				/>
			</View>
		</View>
	);
};
