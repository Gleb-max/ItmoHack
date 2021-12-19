import { useRoute } from '@react-navigation/native';
import { AchievementCategoryItem } from 'library/types/AchievementCategoryItem.interface';
import React from 'react';
import { connect } from 'react-redux';
import { errorCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {AchievementCategoryView} from './AchievementCategory.view';

type AchievementCategoryScreenProps = {
  token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  userData?: {id: '', name: '', photo: ''};
};

export const AchievementCategoryScreen: React.FC<AchievementCategoryScreenProps> = ({
  token = '', 
  isLoading = false, 
  isError = false,
  errorMessage = '',
  userData = {id: '', name: '', photo: ''},
}) => {
  //navigation
	const route = useRoute();
	const params = route?.params as {category: string};
	const category = params.category as string;

  const categoryIndex = {
    physical: 0,
    technical: 1,
    humanities: 2,
    natural: 3,
    softSkills: 4,
  }[category]

  const onPressItem = (item: AchievementCategoryItem) => {
    console.log(item.id);
  }

  return (
    <AchievementCategoryView 
      category={categoryIndex || 0}
      token={token} 
      isLoading={isLoading}
      isError={isError} 
      errorMessage={errorMessage} 
      hideError={() => store.dispatch(errorCancel())} 
      onPressItem={onPressItem}
      userData={userData}
    />);
};

const mapStateToProps = (state: any) => {
  return {
    userData: state.authReducer.authData.userData || {id: '', name: '', photo: ''},
    token: state.authReducer.authData.token || '',
    isLoading: state.loadingReducer.isLoading || false,
    isError: state.errorReducer.isError || false,
    errorMessage: state.errorReducer.errorMessage || '',
  };
};

export default connect(mapStateToProps)(AchievementCategoryScreen);
