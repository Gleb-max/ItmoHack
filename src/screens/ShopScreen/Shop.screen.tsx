import { useNavigation } from '@react-navigation/native';
import { ShopItem } from 'library/types/ShopItem.interface';
import React from 'react';
import { connect } from 'react-redux';
import { errorCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {ShopView} from './Shop.view';

//types

type ShopScreenProps = {
  token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export const ShopScreen: React.FC<ShopScreenProps> = ({
  token = '', 
  isLoading = false, 
  isError = false,
  errorMessage = '',
}) => {
  //navigation
	const navigation = useNavigation();

	const _onPressProductItem = React.useCallback((product: ShopItem) => {
		navigation.navigate('product', {
			details: product,
		});
	}, [navigation]);
  
  return <ShopView token={token} 
    isLoading={isLoading} 
    isError={isError}
    errorMessage={errorMessage}
    hideError={() => store.dispatch(errorCancel())} 
    onPressItem={_onPressProductItem} />;
};

const mapStateToProps = (state: any) => {
  return {
    token: state.authReducer.authData.token || '',
    isLoading: state.loadingReducer.isLoading || false,
  };
};

export default connect(mapStateToProps)(ShopScreen);
