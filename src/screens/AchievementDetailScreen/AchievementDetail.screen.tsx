import { useRoute } from '@react-navigation/native';
import { AchievementCategoryItem } from 'library/types/AchievementCategoryItem.interface';
import React from 'react';
import { connect } from 'react-redux';
import { errorCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {AchievementDetailView} from './AchievementDetail.view';

type AchievementDetailScreenProps = {
  token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export const AchievementDetailScreen: React.FC<AchievementDetailScreenProps> = ({
  token = '', 
  isLoading = false, 
  isError = false,
  errorMessage = '',
}) => {
  //navigation
	const route = useRoute();
	const params = route?.params as {category: string};
	const category = params.category as string;

  console.log("grtgtgrtgrggr")
  console.log("grtgtgrtgrggr", category)
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
    <AchievementDetailView 
      category={categoryIndex || 0}
      token={token} 
      isLoading={isLoading}
      isError={isError} 
      errorMessage={errorMessage} 
      hideError={() => store.dispatch(errorCancel())} 
      onPressItem={onPressItem}
    />);
};

const mapStateToProps = (state: any) => {
  return {
    token: state.authReducer.authData.token || '',
    isLoading: state.loadingReducer.isLoading || false,
    isError: state.errorReducer.isError || false,
    errorMessage: state.errorReducer.errorMessage || '',
  };
};

export default connect(mapStateToProps)(AchievementDetailScreen);
