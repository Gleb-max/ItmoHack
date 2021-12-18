import { apiConfig } from 'api/config';
import { CustomDropDown, ErrorAlert, LoaderOverlay, RatingItemCard } from 'library/components';
import { RatingItem } from 'library/types/RatingItem.interface';
import React from 'react';
import {View, StatusBar, FlatList} from 'react-native';

//other deps
import SwitchSelector from 'react-native-switch-selector';
import { error, loading, loadingCancel } from 'redux/actions';
import { store } from 'redux/store';

//styles
import styles from './Ratings.styles';

type RatingsViewProps = {
  token: string,
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  hideError: () => void;
  faculties: {label: string, value: string} [];
};

export const RatingsView: React.FC<RatingsViewProps> = ({
	token, 
	isLoading, 
	isError,
	errorMessage, 
	hideError,
	faculties,
}) => {
	//state
	const [switchItem, setSwitchItem] = React.useState('students');
	const [page, setPage] = React.useState(0);
	const [data, setData] = React.useState([]);
	const [showFacultyDropDown, setShowFacultyDropDown] = React.useState(false);
	const [currentFaculty, setCurrentFaculty] = React.useState('');

	//effect
	React.useEffect(() => {
		loadMoreData();
	}, []);

  	const activeTextColor = () => {
		return switchItem === 'students' ? '#ff7366' : (switchItem === 'faculty' ? '#4647ed' : '#1A1D5B');
	};

	const updateSwitchItem = (item: string) => {
		setSwitchItem(item);
		setData([]);
		setPage(0);
		setShowFacultyDropDown(item === "faculty" ? true : false);
		if (item === "faculty" && currentFaculty === '') return;
		loadMoreData();
	}

	const updateFacultyItem = (item: {label: string, value: string}) => {
		setData([]);
		setPage(0);
		setCurrentFaculty(item.value);
		loadMoreData();
	}

  //renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<RatingItemCard
				index={index + 1}
				item={item}
				onPress={() => console.log(item)}
				key={index}
				style={styles.card} />
		);
	}, [data]);

	const loadMoreData = () => {
		store.dispatch(loading());

		switch (switchItem) {
			case 'students':
				loadStudents();
				break;
			case 'faculty':
				loadFaculty();
				break;
			case 'faculties':
				loadFaculties();
				break;
		}
	}

	const loadStudents = () => {
		fetch(`${apiConfig.baseUrl}api/User?Page=${page}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  console.log(data.length);
			  setData([...data, ...responseJson.users]);
			  if (responseJson.users.length !== 0) setPage(page + 1)
			store.dispatch(loadingCancel());
          })
          .catch(err => {
			store.dispatch(loadingCancel());
			store.dispatch(error({message: 'Ошибка при загрузке'}));
          });
	}

	const loadFaculty = () => {
		fetch(`${apiConfig.baseUrl}api/User?Page=${page}&InFaculty=true&FacultyId=${currentFaculty}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  console.log(data.length);
			  setData([...data, ...responseJson.users]);
			  if (responseJson.users.length !== 0) setPage(page + 1)
			store.dispatch(loadingCancel());
          })
          .catch(err => {
			store.dispatch(loadingCancel());
			store.dispatch(error({message: 'Ошибка при загрузке'}));
          });
	}

	const loadFaculties = () => {
		fetch(`${apiConfig.baseUrl}api/faculty/top?Page=${page}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  setData([...data, ...responseJson.faculties]);
			  if (responseJson.faculties.length !== 0) setPage(page + 1)
			store.dispatch(loadingCancel());
          })
          .catch(err => {
			store.dispatch(loadingCancel());
			store.dispatch(error({message: 'Ошибка при загрузке'}));
          });
	}

  	return (
	<>
	{isLoading && <LoaderOverlay isTransparent={true} color={activeTextColor()} size={'large'} />}
	<ErrorAlert isShow={isError} onHide={hideError} message={errorMessage} />
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <SwitchSelector
			initial={0}
			borderRadius={11.65}
			onPress={(value: string) => {
				updateSwitchItem(value);
			}}
			textColor='#fff'
			selectedColor={activeTextColor()}
			selectedTextStyle={styles.switchText}
			buttonColor='#FFFFFF'
			height={50}
			borderColor='#EEEEEE'
			backgroundColor='#80808060'
			style={styles.switchStyle}
			textStyle={styles.switchText}
			options={[
				{ label: 'Общий', value: 'students' },
				{ label: 'Факультет', value: 'faculty' },
				{ label: 'Все факультеты', value: 'faculties' },
			]}
		/>
		{showFacultyDropDown &&
			<CustomDropDown
				data = {faculties}
				placeHolder={'Факультет'}
				onChange={(el) => {
					updateFacultyItem(el);
				}}
				placeholderStyle={{color: '#4647ed'}}
				containerStyle={styles.dropdownContainer}
				style={styles.dropdown}
			/>
		}
		<FlatList<RatingItem>
			data={data}
			renderItem={_renderListItem}
			keyExtractor={(item: RatingItem, index: number) => item.id}
			showsVerticalScrollIndicator={false}
			onEndReached={loadMoreData}
			onEndReachedThreshold ={0.1}
			// ItemSeparatorComponent={() => <View style={styles.separator} />}
			contentContainerStyle={styles.flatListContainer}
		/>
    </View>
	</>
  );
};
