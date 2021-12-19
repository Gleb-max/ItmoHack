import React from 'react';
import {View, StatusBar, ScrollView, Text, FlatList} from 'react-native';

//styles
import styles from './EventDetails.styles';

import { ErrorAlert, EventItemCard, GilroyText, LoaderOverlay, MontserratText } from 'library/components';
import { EventItem } from 'library/types/EventItem.interface';
import { error, loading, loadingCancel } from 'redux/actions';
import { store } from 'redux/store';
import { apiConfig } from 'api/config';
import { RalewayText } from 'library/components/atoms';
import { event } from 'react-native-reanimated';

type EventDetailsViewProps = {
  	token: string,
	isLoading: boolean;
	isError: boolean;
	errorMessage: string;
	hideError: () => void;
	event: EventItem;
};

export const EventDetailsView: React.FC<EventDetailsViewProps> = ({token, isLoading, isError, errorMessage, hideError, event}) => {
  //state
	const [page, setPage] = React.useState(0);
	const [_event, setEvent] = React.useState(event);

  
  //effect
	React.useEffect(() => {
		loadDetails();
	}, []);

  const loadDetails = () => {
	store.dispatch(loading());

	fetch(`${apiConfig.baseUrl}api/Advertisement/${event.id}`, {headers: {Authorization: `Bearer ${token}`}})
          .then(response => response.json())
          .then(responseJson => {
			  setEvent(responseJson);
			  store.dispatch(loadingCancel());
          })
          .catch(err => {
			  console.log(err)
			store.dispatch(loadingCancel());
			store.dispatch(error({message: 'Ошибка при загрузке'}));
    });
}

  const prettyDate = (dateStr: string) => {
	// var date = new Date(dateStr);
	// return format(date, "MMMM do, yyyy H:mma");
	const options = { year: "string", month: "string", day: "string" };
	  return new Date(dateStr).toLocaleDateString(undefined, options);
	}

	const renderItem = React.useCallback(() => {
		return (
			<>
				<GilroyText size={'g7'} type={'Semibold'} styleText={styles.header}>{_event.topic}</GilroyText>
				<RalewayText size={'r5'} type={'Regular'}>{_event.description}</RalewayText>
				<MontserratText style={styles.dateText} lines={2} size={'m3'} type={'Medium'}>{prettyDate(_event.publishDate)}</MontserratText>
			</>
		);
	}, [_event]);

  return (
    <>
	{isLoading && <LoaderOverlay color={'#4647ed'} isTransparent={true} size={'large'} />}
	{/* <ErrorAlert isShow={isError} onHide={hideError} message={errorMessage} /> */}
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />

	  {renderItem()}

    </View>
	</>
  );
};
