import React from 'react';
import {View, Text} from 'react-native';

//styles
import styles from './Loading.styles';

//types
type LoadingViewProps = {};

export const LoadingView: React.FC<LoadingViewProps> = ({}) => {
  return <View style={styles.container} />;
};
