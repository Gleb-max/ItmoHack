import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, ViewStyle, TouchableOpacity, Image} from 'react-native';

//components
import {GilroyText, MontserratText, SMIcons} from 'library/components/atoms';

//other deps
import LinearGradient from 'react-native-linear-gradient';

//styles
import styles from './PurchaseCard.styles';
import { PurchaseItem } from 'library/types/PurchaseItem.interface';

type PurchaseCardProps = {
  item: PurchaseItem;
  style?: StyleProp<ViewStyle>;
  onPress: (item: any) => void;
};

export const PurchaseCard: React.FC<PurchaseCardProps> = ({
  item,
  style,
  onPress,
}) => {
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
			<GilroyText size={'g5'} type={'Semibold'} styleText={[styles.header]}>{item.productName} - {prettyDate(item.date)}</GilroyText>
		</TouchableOpacity>
  );
};
