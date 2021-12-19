import React from 'react';
import {View, StatusBar, FlatList} from 'react-native';

//styles
import styles from './Notifications.styles';

import { LoaderOverlay } from 'library/components';
import { store } from 'redux/store';
import { error, loading, loadingCancel } from 'redux/actions';
import { apiConfig } from 'api/config';
import { NotificationItem } from 'library/types/NotificationItem.interface';

type NotificationsViewProps = {
  token: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  hideError: () => void;
	onPressItem: (item: NotificationItem) => void,
};

export const NotificationsView: React.FC<NotificationsViewProps> = ({token, isLoading, isError, errorMessage, hideError}) => {
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
    fetch(`${apiConfig.baseUrl}api/Application?Page=${page}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  console.log(responseJson);
			  setData([...data, ...responseJson.applications]);
			  if (responseJson.applications.length !== 0) setPage(page + 1)
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
			<NotificationItemCard
				item={item}
				onPress={() => onPressItem(item)}
				key={index}
				style={styles.card} />
		);
	}, [data]);

  
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />

    <FlatList<NotificationItem>
      data={data}
      renderItem={_renderListItem}
      keyExtractor={(item: NotificationItem, index: number) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={loadData}
      onEndReachedThreshold ={0.1} />
    </View>
  );
};
