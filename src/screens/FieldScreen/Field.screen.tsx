import React from 'react';
import { connect } from 'react-redux';
import { errorCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {FieldView} from './Field.view';

type FieldScreenProps = {
  token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export const FieldScreen: React.FC<FieldScreenProps> = ({token = '', isLoading = false, isError = false, errorMessage = ''}) => {
  return <FieldView 
    token={token} 
    isLoading={isLoading} 
    hideError={() => store.dispatch(errorCancel())} 
    isError={isError} 
    errorMessage={errorMessage}
  />;
};

const mapStateToProps = (state: any) => {
  return {
    token: state.authReducer.authData.token || '',
    isLoading: state.loadingReducer.isLoading || false,
    // isError: state.errorReducer.isError || false,
    // errorMessage: state.errorReducer.errorMessage || '',
  };
};

export default connect(mapStateToProps)(FieldScreen);
