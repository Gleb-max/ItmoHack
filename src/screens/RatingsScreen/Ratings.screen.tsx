import React from 'react';
import { connect } from 'react-redux';
import { errorCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {RatingsView} from './Ratings.view';

type RatingsScreenProps = {
  token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  faculties: {label: string, value: string} [];
};

export const RatingsScreen: React.FC<RatingsScreenProps> = ({
  token = '', 
  isLoading = false, 
  isError = false,
  errorMessage = '',
  faculties = [],
}) => {
  return <RatingsView 
    token={token} 
    isLoading={isLoading} 
    isError={isError}
    errorMessage={errorMessage}
    hideError={() => store.dispatch(errorCancel())}
    faculties={faculties}
  />;
};

const mapStateToProps = (state: any) => {
  return {
    token: state.authReducer.authData.token || '',
    isLoading: state.loadingReducer.isRatingLoading || false,
    isError: state.errorReducer.isError || false,
    errorMessage: state.errorReducer.errorMessage || '',
    faculties: state.facultiesReducer.faculties || [],
  };
};

export default connect(mapStateToProps)(RatingsScreen);
