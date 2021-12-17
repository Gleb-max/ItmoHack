/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';

//styles
import styles from './AuthQuestionNav.styles';

//components
import {MontserratText} from 'library/components/atoms';

//types
type AuthQuestionNavProps = {
  question: string;
  link: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  questionStyle?: StyleProp<TextStyle>;
  linkStyle?: StyleProp<TextStyle>;
};

export const AuthQuestionNav: React.FC<AuthQuestionNavProps> = ({
  question,
  link,
  onPress,
  style,
  questionStyle,
  linkStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <MontserratText
        style={[styles.textCommon, styles.questionText, questionStyle]}
        size={'m2'}
        type={'Medium'}>
        {question}{' '}
      </MontserratText>

      <TouchableOpacity onPress={onPress}>
        <MontserratText
          style={[styles.textCommon, styles.linkText, linkStyle]}
          size={'m2'}
          type={'Medium'}>
          {link}
        </MontserratText>
      </TouchableOpacity>
    </View>
  );
};
