import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

//styles
import styles from './ErrorAlert.styles';

//components
import {GilroyText, SMIcons} from 'library/components/atoms';

//types
type ErrorAlertProps = {
  isShow: boolean;
  onHide: () => void;
  message: string;
};

export const ErrorAlert: React.FC<ErrorAlertProps> = ({isShow, onHide, message}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isShow}
        statusBarTranslucent
        style={styles.modalContainer}
        onRequestClose={onHide}>
        <TouchableOpacity
          style={styles.errorOpacity}
          activeOpacity={1}
          onPressOut={onHide}>
          <TouchableWithoutFeedback>
            <View style={styles.errorView}>
            <SMIcons
              name="ic_error"
              width={24}
              height={24}
              size={33}
              color={'#ff7366'}
              style={styles.icon}
            />
              <GilroyText type={'Semibold'} size={'g1'} style={styles.errorMessage} styleText={styles.errorColor}>{message}</GilroyText>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
  );
};
