import React from 'react';
import {View, StatusBar, ScrollView, Text, FlatList} from 'react-native';

//styles
import styles from './Events.styles';

import { ErrorAlert, EventItemCard, LoaderOverlay } from 'library/components';
import { EventItem } from 'library/types/EventItem.interface';
import { error, loading, loadingCancel } from 'redux/actions';
import { store } from 'redux/store';
import { apiConfig } from 'api/config';

type EventsViewProps = {
  token: string,
	isLoading: boolean;
	isError: boolean;
	errorMessage: string;
	hideError: () => void;
	onPressItem: (item: EventItem) => void,
};

export const EventsView: React.FC<EventsViewProps> = ({token, isLoading, isError, errorMessage, hideError, onPressItem}) => {
  //state
	const [page, setPage] = React.useState(0);
	const [data, setData] = React.useState([]);

	//effect
	React.useEffect(() => {
		loadData();
	}, []);

  const loadData = () => {
		store.dispatch(loading());

		loadEvents();
	}

  const loadEvents = () => {
    fetch(`${apiConfig.baseUrl}api/Advertisement?Page=${page}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  console.log(responseJson);
			  setData([...data, ...responseJson.advertisements]);
			  if (responseJson.advertisements.length !== 0) setPage(page + 1)
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
			<EventItemCard
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
      <FlatList<EventItem>
		data={data}
		renderItem={_renderListItem}
		keyExtractor={(item: EventItem, index: number) => item.id}
		showsVerticalScrollIndicator={false}
		contentContainerStyle={styles.flatListContainer}
		onEndReached={loadData}
        onEndReachedThreshold ={0.1} />
    </View>
	</>
  );
};
