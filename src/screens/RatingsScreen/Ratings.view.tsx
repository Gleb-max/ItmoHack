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
  onPressItem: (type: 'student' | 'faculty', item: RatingItem) => void;
  faculties: {label: string, value: string} [];
};

export const RatingsView: React.FC<RatingsViewProps> = ({
	token, 
	isLoading, 
	isError,
	errorMessage, 
	hideError,
	faculties,
	onPressItem,
}) => {
	//state
	const [switchItem, setSwitchItem] = React.useState('students');
	const [data, setData] = React.useState({data: [], page: 0, isLoading: false});
	const [showFacultyDropDown, setShowFacultyDropDown] = React.useState(false);
	const [extra, setExtra] = React.useState(true);
	const [currentFaculty, setCurrentFaculty] = React.useState('');

	//effect
	React.useEffect(() => {
		loadMoreData("students", 0);
	}, []);
	React.useEffect(() => {
		if (!data.isLoading) return;
		store.dispatch(loadingCancel());
	}, [data]);

  	const activeTextColor = () => {
		return switchItem === 'students' ? '#ff7366' : (switchItem === 'faculty' ? '#4647ed' : '#1A1D5B');
	};

	const updateSwitchItem = (item: string) => {
		if (item === switchItem) return;
		// setData([]);
		setData({data:[], page:0, isLoading: false});
		setSwitchItem(item);
		setShowFacultyDropDown(item === "faculty" ? true : false);
		if (item === "faculty" && currentFaculty === '') return;
		loadMoreData(item, 0);
	}

	const updateFacultyItem = (item: {label: string, value: string}) => {
		if (item.value === currentFaculty) return;
		// setData([]);
		setData({data:[], page:0, isLoading: false});
		setCurrentFaculty(item.value);
		loadFaculty(item.value, 0);
	}

	const addData = (newData: [], force: boolean = false) => {
		if (force) {
			setData({data: newData, page: 1, isLoading: true});
			return;
		}
		setData({data: [...data.data, ...newData], page:data.page + 1, isLoading: true});
	}

  //renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<RatingItemCard
				index={index + 1}
				item={item}
				onPress={() => {onPressItem(switchItem === 'faculties' ? 'faculty' : 'student', item)}}
				key={index}
				style={styles.card} />
		);
	}, [data]);

	const _renderList = React.useCallback(() => {
		return (
			<FlatList<RatingItem>
				data={data.data}
				renderItem={_renderListItem}
				keyExtractor={(item: RatingItem, index: number) => item.id}
				showsVerticalScrollIndicator={false}
				onEndReached={() => loadMoreData(switchItem, data.page)}
				onEndReachedThreshold ={0.1}
				// ItemSeparatorComponent={() => <View style={styles.separator} />}
				contentContainerStyle={styles.flatListContainer}
			/>
		);
	}, [data]);

	const loadMoreData = (item: string, page: number) => {
		if (isLoading) return;
		store.dispatch(loading());

		switch (item) {
			case 'students':
				loadStudents(page);
				break;
			case 'faculty':
				loadFaculty(currentFaculty, page);
				break;
			case 'faculties':
				loadFaculties(page);
				break;
		}
	}

	const loadStudents = (page: number) => {
		if (isLoading) return;
		console.log("loadStudents sosssososo")
		console.log(data.data.length)
		fetch(`${apiConfig.baseUrl}api/User?Page=${page}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  if (responseJson.users.length !== 0) addData(responseJson.users, page === 0)
			  else store.dispatch(loadingCancel());
          })
          .catch(err => {
			store.dispatch(loadingCancel());
			store.dispatch(error({message: 'Ошибка при загрузке'}));
          });
	}

	const loadFaculty = (faculty: string, page: number) => {
		console.log("loadFaculty hshshshshshshshhs")
		console.log(data.data.length)
		// setData([])
		fetch(`${apiConfig.baseUrl}api/User?Page=${page}&InFaculty=true&FacultyId=${faculty}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			setExtra(!extra);
			  if (responseJson.users.length !== 0) addData(responseJson.users, page === 0)
			  else store.dispatch(loadingCancel());
          })
          .catch(err => {
			store.dispatch(loadingCancel());
			store.dispatch(error({message: 'Ошибка при загрузке'}));
          });
	}

	const loadFaculties = (page: number) => {
		console.log("loadFaculies aaaasazzzxxzaaaa")
		console.log(data.data.length)
		// setData([])
		fetch(`${apiConfig.baseUrl}api/faculty/top?Page=${page}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  if (responseJson.faculties.length !== 0) addData(responseJson.faculties, page === 0)
			  else store.dispatch(loadingCancel());

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

		{_renderList()}
		
    </View>
	</>
  );
};
