import { apiConfig } from 'api/config';
import { AchievementCard } from 'library/components/molecules/AchievementCard';
import { AchievementCategoryItem } from 'library/types/AchievementCategoryItem.interface';
import React from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import { error, loading, loadingCancel } from 'redux/actions';
import { store } from 'redux/store';

//styles
import styles from './AchievementDetail.styles';

//types
type AchievementDetailViewProps = {
  category: number;
  token: string,
	isLoading: boolean;
	isError: boolean;
	errorMessage: string;
	hideError: () => void;
	onPressItem: (item: AchievementCategoryItem) => void;
};

export const AchievementDetailView: React.FC<AchievementDetailViewProps> = ({
  category, token, isLoading, isError, errorMessage, hideError, onPressItem
}) => {
  //effect
	React.useEffect(() => {
		loadData();
	}, []);

  //state
	const [page, setPage] = React.useState(0);
	const [data, setData] = React.useState([]);

  const loadData = () => {
		store.dispatch(loading());

		loadAchievements();
	}

  const loadAchievements = () => {
    fetch(`${apiConfig.baseUrl}api/Requests?Page=${page}&SearchType=${category}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			      console.log(responseJson);
			    // setData([...data, ...responseJson.achievementRequests]);
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
			<AchievementCard
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

    <FlatList<AchievementCategoryItem>
        data={data}
        renderItem={_renderListItem}
        keyExtractor={(item: AchievementCategoryItem, index: number) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        onEndReached={loadData}
        onEndReachedThreshold ={0.1} 
    />
  
    </View>
  );
};
