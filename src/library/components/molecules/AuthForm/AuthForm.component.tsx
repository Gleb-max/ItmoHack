import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, ViewStyle, StyleProp, TextStyle} from 'react-native';

//styles
import styles from './AuthForm.styles';

//types
type AuthFormProps = {
  style?: StyleProp<ViewStyle>;
};

export const AuthForm: React.FC<AuthFormProps> = ({style, children}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
