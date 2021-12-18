import { ErrorAlert, LoaderOverlay, ShopItemCard } from 'library/components';
import { ShopItem } from 'library/types/ShopItem.interface';
import React from 'react';
import {View, StatusBar, FlatList} from 'react-native';

//styles
import styles from './Shop.styles';

//redux
import { error, loading, loadingCancel } from 'redux/actions';
import { store } from 'redux/store';
import { apiConfig } from 'api/config';

type ShopViewProps = {
	token: string,
	isLoading: boolean;
	isError: boolean;
	errorMessage: string;
	hideError: () => void;
	onPressItem: (item: ShopItem) => void,
};

export const ShopView: React.FC<ShopViewProps> = ({token, isLoading, isError, errorMessage, hideError, onPressItem}) => {
	//state
	const [page, setPage] = React.useState(0);
	const [data, setData] = React.useState([]);

	//effect
	React.useEffect(() => {
		loadMoreData();
	}, []);

	const loadMoreData = () => {
		store.dispatch(loading());

		loadProducts();
	}

	const loadProducts = () => {
		fetch(`${apiConfig.baseUrl}api/Product?Page=${page}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  console.log(responseJson);
			  setData([...data, ...responseJson.products]);
			  if (responseJson.products.length !== 0) setPage(page + 1)
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
			<ShopItemCard
				item={item}
				onPress={() => onPressItem(item)}
				key={index}
				style={styles.card} />
		);
	}, [data]);

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
      <FlatList<ShopItem>
		data={data}
		renderItem={_renderListItem}
		keyExtractor={(item: ShopItem, index: number) => item.id}
		showsVerticalScrollIndicator={false}
		contentContainerStyle={styles.flatListContainer}
		onEndReached={loadMoreData}
        onEndReachedThreshold ={0.1} />
    </View>
	</>
  );
};
