import React from 'react';
import { connect } from 'react-redux';
import { errorCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {PurchasesView} from './Purchases.view';

type PurchasesScreenProps = {
	token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  userData: any;
};

export const PurchasesScreen: React.FC<PurchasesScreenProps> = ({token = '', isLoading = false, isError = false, errorMessage = '', userData = ''}) => {
  return <PurchasesView 
  	token={token} 
    isLoading={isLoading} 
    hideError={() => store.dispatch(errorCancel())} 
    isError={isError} 
    errorMessage={errorMessage}
	userData={userData}
  />;
};

const mapStateToProps = (state: any) => {
	return {
	  token: state.authReducer.authData.token || '',
	  userData: state.authReducer.authData.userData || {id: '', name: '', photo: ''},
	  isLoading: state.loadingReducer.isLoading || false,
	  isError: state.errorReducer.isError || false,
	  errorMessage: state.errorReducer.errorMessage || '',
	};
  };
  
export default connect(mapStateToProps)(PurchasesScreen);