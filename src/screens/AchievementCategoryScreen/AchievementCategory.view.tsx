import { apiConfig } from 'api/config';
import { LoaderOverlay } from 'library/components';
import { RalewayText } from 'library/components/atoms';
import { AchievementCard } from 'library/components/molecules/AchievementCard';
import { AchievementCategoryItem } from 'library/types/AchievementCategoryItem.interface';
import React from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import { error, loading, loadingCancel } from 'redux/actions';
import { store } from 'redux/store';

//styles
import styles from './AchievementCategory.styles';

//types
type AchievementCategoryViewProps = {
  category: number;
  token: string,
	isLoading: boolean;
  userData: {id: '', name: '', photo: ''}
	isError: boolean;
	errorMessage: string;
	hideError: () => void;
	onPressItem: (item: AchievementCategoryItem) => void;
};

export const AchievementCategoryView: React.FC<AchievementCategoryViewProps> = ({
  category, token, isLoading, isError, errorMessage, hideError, onPressItem, userData,
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
    fetch(`${apiConfig.baseUrl}api/Achievement?Page=${page}&Sphere=${category}&OwnerId=${userData.id}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			      setData([...data, ...responseJson.achievements]);
            if (responseJson.achievements.length !== 0) setPage(page + 1)
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
    <>
    {isLoading && <LoaderOverlay isTransparent={true} size={'large'} />}
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
        ListEmptyComponent={() => {
          return (
            <RalewayText
              type={'Semibold'}
              size={'r3'}
              style={styles.emptyText}>
              Здесь пока пусто
            </RalewayText>
          )
        }}
        onEndReachedThreshold ={0.1} 
    />
    </View>
    </>
  );
};
