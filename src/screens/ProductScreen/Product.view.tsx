import { apiConfig } from 'api/config';
import { GilroyText, MontserratText, StandardButton } from 'library/components';
import { ShopItem } from 'library/types/ShopItem.interface';
import React from 'react';
import {View, StatusBar, Image, ScrollView} from 'react-native';

//styles
import styles from './Product.styles';

//types

type ProductViewProps = {
  product: ShopItem,
  onPurchasePress: (product: ShopItem) => void,
};

export const ProductView: React.FC<ProductViewProps> = ({
  product,
  onPurchasePress,
}) => {
  const getImageUri = (imageName: string) => {
		return {uri: `${apiConfig.baseUrl}img/products/${imageName}`}
	}
  
  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />

        <Image source={getImageUri(product.imageName)} style={styles.image} />

        <View style={styles.contentContainer}>
          <GilroyText size={'g8'} type={'Semibold'} styleText={styles.header}>{product.name}</GilroyText>
          <MontserratText size={'m3'} type={'Medium'}>{product.description}</MontserratText>
          <StandardButton
            text={'Приобрести'}
            onPress={() => onPurchasePress(product)}
            style={styles.purchaseButton}
            reverse={true}
          />
        </View>
        
      </View>

    </ScrollView>
  );
};
