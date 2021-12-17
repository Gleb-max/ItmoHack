import React from 'react';

//navigation
import {useNavigation} from '@react-navigation/native';

//redux
import {connect} from 'react-redux';
import {store} from 'redux/store';

//actions
import {searchBegan} from 'redux/actions';

//views
import {SearchView} from './Search.view';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {MissingPet} from 'library/types';

type SearchScreenProps = {
  isSearchBegan?: boolean;
};

const cards: MissingPet.Info[] = [
  {
    title: 'Пропал пёс!',
    content:
      'Пропал пёс породы пудель. Вышел из дома 24.02 и не вернулся. Отзывается на имя Ройт.',
    address: 'Ленинский р-н, г. Екатеринбург, ул. Большакова 90',
    author: 'paruraztudasuda',
    photo:
      'https://dl.dropboxusercontent.com/s/s6ut77xoq0nrqh3/Rectangle%2065.png',
  },
  {
    title: 'Ушел мой компаньон!',
    content:
      'Федя пошел погулять, но к сожалению все еще не вернулся. Нашедшему вознаграждение.',
    address: 'Верх - Исестский р-н, г. Екатеринбург, ул. Токарей 12',
    author: 'beautifulmouse112',
    photo:
      'https://dl.dropboxusercontent.com/s/w3nwfxc1npxt29z/Rectangle%2065%281%29.png?dl=0',
  },
  {
    title: 'Пропал бульдог!',
    content:
      'Сорвался с поводка, не успела догнать. Английский бульдог, отзывается на Шерлок',
    address: 'Верх - Исетский р-н, г. Екатеринбург, ул. Репина 44',
    author: 'greenkoala518',
    photo:
      'https://dl.dropboxusercontent.com/s/pt3sujhrf44wght/Rectangle%2065%282%29.png?dl=0',
  },
];

const userData = {
  photo: 'https://dl.dropboxusercontent.com/s/9tn5z54d72m1egr/Ellipse%2016.png',
};

const SearchScreen: React.FC<SearchScreenProps> = ({isSearchBegan = false}) => {
  //navigation
  const navigation = useNavigation();

  //callbacks
  const _onSearchBegan = () => store.dispatch(searchBegan());

  const _onProfile = React.useCallback(() => {
    navigation.navigate('main/profile');
  }, [navigation]);

  const _onAddMissingPet = React.useCallback(() => {
    navigation.navigate('add_missing_pet');
  }, [navigation]);

  return (
    <SearchView
      onSearchBegan={_onSearchBegan}
      isSearchBegan={isSearchBegan}
      onProfile={_onProfile}
      onAddMissingPet={_onAddMissingPet}
      userData={userData}
      cards={cards}
    />
  );
};

const mapStateToProps = (state: any) => {
  const searchReducer = state.searchReducer;
  return {
    isSearchBegan: searchReducer.isSearchBegan || false,
  };
};

export default connect(mapStateToProps)(SearchScreen);
