import { useNavigation } from '@react-navigation/native';
import { EventItem } from 'library/types/EventItem.interface';
import React from 'react';
import { connect } from 'react-redux';
import { errorCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {EventsView} from './Events.view';

type EventsScreenProps = {
  token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export const EventsScreen: React.FC<EventsScreenProps> = ({
  token = '', 
  isLoading = false, 
  isError = false,
  errorMessage = '',
}) => {
  //navigation
	const navigation = useNavigation();

	const onPressEventItem = React.useCallback((event: EventItem) => {
		navigation.navigate('event_item', {
			details: event,
		});
	}, [navigation]);

  return <EventsView 
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
    isError: state.errorReducer.isError || false,
    errorMessage: state.errorReducer.errorMessage || '',
  };
};

export default connect(mapStateToProps)(EventsScreen);
