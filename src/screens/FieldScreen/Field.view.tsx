import React from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

//styles
import styles from './Field.styles';

import { WebView } from 'react-native-webview';
import { LoaderOverlay, StandardButton } from 'library/components';

type FieldViewProps = {
  
};

export const FieldView: React.FC<FieldViewProps> = () => {
  //state
  const [isError, setIsError] = React.useState(false);

  //refs
  var webViewRef = React.createRef<any>();

  const reload = () => {
    setIsError(false);
    webViewRef.current.reload();
  }

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <WebView
          ref={webViewRef}
          source={{ uri: 'https://76f6-77-234-209-96.ngrok.io/' }} 
          setBuiltInZoomControls={true} 
          scrollEnabled={true}
          setDisplayZoomControls={true}
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
    </>
  );
};
