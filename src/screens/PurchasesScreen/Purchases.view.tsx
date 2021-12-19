import { apiConfig } from 'api/config';
import { ErrorAlert, GilroyText, LoaderOverlay, MontserratText, PurchaseCard, StandardButton } from 'library/components';
import { RalewayText } from 'library/components/atoms';
import { DimensionsManager } from 'library/modules';
import { PurchaseItem } from 'library/types/PurchaseItem.interface';
import { ShopItem } from 'library/types/ShopItem.interface';
import React from 'react';
import {View, StatusBar, Image, ScrollView, FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { loading, loadingCancel, error } from 'redux/actions';
import { store } from 'redux/store';

//styles
import styles from './Purchases.styles';

//types

type PurchasesViewProps = {
  token: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  hideError: () => void;
  userData: any;
};

export const PurchasesView: React.FC<PurchasesViewProps> = ({
  token,
  isLoading,
  isError,
  errorMessage,
  hideError,
  userData,
}) => {
  //state
	const [page, setPage] = React.useState(0);
	const [data, setData] = React.useState([]);
  const [qrShowing, setQrShowing] = React.useState<boolean>(false);
  const [qrUrl, setQrUrl] = React.useState<boolean>(false);

	//effect
	React.useEffect(() => {
		loadMoreData();
	}, []);

	const loadMoreData = () => {
		store.dispatch(loading());

		loadProducts();
	}

  const onPress = (item: PurchaseItem) => {
		store.dispatch(loading());

    fetch(`${apiConfig.baseUrl}api/Purchase/${item.id}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
            setQrUrl(`${apiConfig.baseUrl}qr/purchases/${responseJson.qrImageName}`)
            setQrShowing(true);
            
			      store.dispatch(loadingCancel());
          })
          .catch(err => {
			      store.dispatch(loadingCancel());
			      store.dispatch(error({message: 'Ошибка при загрузке'}));
          });
  }

  //renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<PurchaseCard
				item={item}
				onPress={() => onPress(item)}
				key={index}
				style={styles.card} />
		);
	}, [data]);

	const loadProducts = () => {
		fetch(`${apiConfig.baseUrl}api/Purchase?Page=${page}&BuyerId=${userData.id}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  console.log(responseJson);
			  setData([...data, ...responseJson.purchases]);
			  if (responseJson.purchases.length !== 0) setPage(page + 1)
			  store.dispatch(loadingCancel());
          })
          .catch(err => {
			store.dispatch(loadingCancel());
			store.dispatch(error({message: 'Ошибка при загрузке'}));
          });
	}

  const getImageUri = (imageName: string) => {
		return {uri: `${apiConfig.baseUrl}img/products/${imageName}`}
	}
  
  return (
    <>
	{isLoading && <LoaderOverlay isTransparent={true} size={'large'} />}
	<ErrorAlert isShow={isError} onHide={hideError} message={errorMessage} />
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <FlatList<PurchaseItem>
        data={data}
        renderItem={_renderListItem}
        keyExtractor={(item: PurchaseItem, index: number) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        onEndReached={loadMoreData}
        onEndReachedThreshold ={0.1} />
    </View>
    <Modal
				animationType='fade'
				transparent={true}
        statusBarTranslucent
				visible={qrShowing}
				style={styles.modalContainer}
				onRequestClose={() => {
					setQrShowing(false);
				}}
			>
				<TouchableOpacity
					style={styles.qrOpacity}
					activeOpacity={1}
					onPressOut={() => {
						setQrShowing(false);
					}}
				>
					<TouchableWithoutFeedback>
						<View style={styles.qrView}>
							<Image
								source={{uri: qrUrl}}
								style={styles.qrImage} />

							<RalewayText
								size='r1'
								type='Medium'
								style={styles.qrAdvice}
							>
								Покажите этот QR-код при получении
							</RalewayText>

						</View>
					</TouchableWithoutFeedback>
				</TouchableOpacity>
			</Modal>
	</>
  );
};
