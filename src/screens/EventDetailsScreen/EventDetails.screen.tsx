import { useRoute } from '@react-navigation/native';
import { EventItem } from 'library/types/EventItem.interface';
import React from 'react';
import { connect } from 'react-redux';
import { error, errorCancel, loading, loadingCancel } from 'redux/actions';
import { store } from 'redux/store';

//views
import {EventDetailsView} from './EventDetails.view';

type EventDetailsScreenProps = {
  token?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export const EventDetailsScreen: React.FC<EventDetailsScreenProps> = ({
  token = '', 
  isLoading = false, 
  isError = false,
  errorMessage = '',
}) => {
  //navigation
	const route = useRoute();
	const params = route?.params as {details: EventItem};
	const event = params.details as EventItem;
  
  return <EventDetailsView 
    token={token} 
    isLoading={isLoading}
    isError={isError} 
    errorMessage={errorMessage} 
    hideError={() => store.dispatch(errorCancel())}
    event={event} 
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

export default connect(mapStateToProps)(EventDetailsScreen);
