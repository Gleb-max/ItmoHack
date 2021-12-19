import { useNavigation } from '@react-navigation/native';
import { NotificationItem } from 'library/types/NotificationItem.interface';
import React from 'react';
import { connect } from 'react-redux';
import { errorCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {NotificationsView} from './Notifications.view';

type NotificationsScreenProps = {
  token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({token = '', isLoading = false, isError = false, errorMessage = ''}) => {
  //navigation
	const navigation = useNavigation();

	const onPressEventItem = React.useCallback((event: NotificationItem) => {
		navigation.navigate('event_item', {
			details: event,
		});
	}, [navigation]);
  
  return <NotificationsView 
    token={token} 
    isLoading={isLoading} 
    isError={isError} 
    errorMessage={errorMessage} 
    hideError={() => store.dispatch(errorCancel())} 
    onPressItem={onPressEventItem} 
  />;
};

const mapStateToProps = (state: any) => {
  return {
    token: state.authReducer.authData.token || '',
    isLoading: state.loadingReducer.isLoading || false,
  };
};

export default connect(mapStateToProps)(NotificationsScreen);
