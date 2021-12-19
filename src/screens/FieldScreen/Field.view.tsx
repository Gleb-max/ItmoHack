import React from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

//styles
import styles from './Field.styles';

import { WebView } from 'react-native-webview';
import { ErrorAlert, LoaderOverlay, StandardButton } from 'library/components';
import { apiConfig } from 'api/config';
import { store } from 'redux/store';
import { error, loading, loadingCancel } from 'redux/actions';

type FieldViewProps = {
  token: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  hideError: () => void;
};

export const FieldView: React.FC<FieldViewProps> = ({token, isLoading, isError, errorMessage, hideError}) => {
  //effect
	React.useEffect(() => {
		loadGameRef();
	}, []);

  const [_isError, _setIsError] = React.useState(false);
  const [url, setUrl] = React.useState('');

  //refs
  var webViewRef = React.createRef<any>();

  const reload = () => {
    webViewRef.current.reload();
  }

  const loadGameRef = () => {
    store.dispatch(loading());

    fetch(`${apiConfig.baseUrl}api/Game/ref`, {headers: {Authorization: `Bearer ${token}`}})
      .then(response => response.json())
      .then(responseJson => {
        setUrl(responseJson.referenсe);
        _setIsError(false);
        store.dispatch(loadingCancel());
      })
      .catch(err => {
        _setIsError(true);
			  store.dispatch(loadingCancel());
			  store.dispatch(error({message: 'Ошибка при загрузке'}));
      });
  }

  return (
    <>
    {_isError && 
      <View style={styles.errorContainer}>
        <StandardButton
          text={'Перезагрузить'}
          onPress={loadGameRef}
          style={styles.reloadButton}
        />
      </View>
    }
    {isLoading && <LoaderOverlay isTransparent={true} size={'large'} />}
	  {/* <ErrorAlert isShow={isError} onHide={hideError} message={errorMessage} /> */}
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {!isLoading && 
        <WebView
          ref={webViewRef}
          source={{ uri: url }} 
          scrollEnabled={true}
          domStorageEnabled={true} 
          javaScriptEnabled={true}
          startInLoadingState={true}
          renderError={(errorDomain: string | undefined, errorCode: number, errorDesc: string) => {
            if (errorDesc === "net::ERR_INTERNET_DISCONNECTED") {
              return (
                <View style={styles.errorContainer}>
                  <StandardButton
                    text={'Перезагрузить'}
                    onPress={reload}
                    style={styles.reloadButton}
                  />
                </View>
              );
            }
            return <></>;
          }}
          renderLoading={() => <LoaderOverlay color={'#1A1D5B'} size={'large'} />}
        />
      }
    </>
  );
};
