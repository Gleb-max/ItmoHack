import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
  TouchableOpacity,
} from 'react-native';

//components
import {SMIcons} from 'library/components/atoms';

//other deps
import {FilledTextField} from 'react-native-material-textfield';

//styles
import styles from './SearchField.styles';

//types
type SearchFieldProps = {
  value?: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  baseColor?: string;
  tintColor?: string;
  textColor?: string;
  lineWidth?: number;
  activeLineWidth?: number;
  onChange?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  labelTextStyle?: StyleProp<TextStyle>;
  onSubmitEditing?: () => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: string | undefined;
};

export const SearchField: React.FC<SearchFieldProps> = ({
  value,
  defaultValue,
  onChange,
  label,
  placeholder,
  keyboardType = 'default',
  baseColor = '#7B7B7B',
  tintColor = '#7B7B7B',
  textColor = '#7B7B7B',
  lineWidth = 0,
  activeLineWidth = 0,
  style = styles.empty,
  textStyle = styles.empty,
  labelTextStyle = styles.empty,
  onSubmitEditing,
  autoCapitalize = 'none',
  error = undefined,
}) => {
  //renders
  const _renderRightAccessory = () => {
    return (
      <SMIcons
        name={'ic_search'}
        width={24}
        height={24}
        size={20}
        color={'#7B7B7B'}
        style={styles.icon}
      />
    );
  };
  return (
    <FilledTextField
      onFocus={() => {}}
      defaultValue={defaultValue}
      baseColor={baseColor}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      label={label}
      keyboardType={keyboardType}
      textColor={textColor}
      labelFontSize={17}
      fontSize={18}
      error={error}
      clearButtonMode={'while-editing'}
      renderRightAccessory={_renderRightAccessory}
      tintColor={tintColor}
      onSubmitEditing={onSubmitEditing}
      underlineColorAndroid={'transparent'}
      lineWidth={lineWidth}
      activeLineWidth={activeLineWidth}
      textContentType={'password'}
      autoCorrect={false}
      inputContainerStyle={styles.inputContainer}
      style={[styles.text, textStyle]}
      labelTextStyle={[styles.labelText, labelTextStyle]}
      containerStyle={[styles.container, style]}
      autoCapitalize={autoCapitalize}
    />
  );
};
