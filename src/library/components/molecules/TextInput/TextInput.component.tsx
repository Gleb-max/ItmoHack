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
import {TextField} from 'react-native-material-textfield';

//styles
import styles from './TextInput.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Icons} from 'library/types';

type CustomTextInputProps = {
  value?: string;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  isPassword?: boolean;
  editable?: boolean;
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
  renderType?: 'none' | 'clear' | 'visible';
  error?: string | undefined;
};

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value = '',
  onChange,
  placeholder,
  keyboardType = 'default',
  isPassword = false,
  editable = true,
  baseColor = '#FFFFFF',
  tintColor = '#FFFFFF',
  textColor = '#161844',
  lineWidth = 1,
  activeLineWidth = 2,
  style = styles.empty,
  textStyle = styles.empty,
  labelTextStyle = styles.empty,
  onSubmitEditing,
  autoCapitalize = 'none',
  renderType = 'none',
  error = undefined,
}) => {
  //state
  const [currentText, setCurrentText] = React.useState(value);
  const [isVisible, setIsVisible] = React.useState(!isPassword);

  //refs
  const inputRef = React.useRef<TextField>();

  //tools
  const _iconName = React.useCallback((): string => {
    return `ic_${
      renderType === 'visible' && isVisible ? 'in' : ''
    }${renderType}`;
  }, [isVisible, renderType]);

  const _clear = () => {
    inputRef?.current?.clear();
  };

  const _changeVisibility = () => {
    setIsVisible((prevState: boolean) => !prevState);
  };

  //renders
  const _renderRightAccessory = React.useCallback(() => {
    return renderType === 'none' || !currentText ? (
      <View style={styles.rightAccessoryContainer} />
    ) : (
      <View style={[styles.rightAccessoryContainerVisible]}>
        <TouchableOpacity
          style={styles.rightAccessoryOpacity}
          onPress={renderType === 'clear' ? _clear : _changeVisibility}>
          <SMIcons
            name={_iconName() as Icons.CommonIconName}
            width={renderType === 'clear' ? 20 : 24}
            height={renderType === 'clear' ? 20 : 24}
            size={renderType === 'clear' ? 7 : 10}
            color={'#7B7B7B'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }, [_iconName, currentText, renderType]);

  //callbacks
  const _onChangeText = (text: string) => {
    setCurrentText(text);
    onChange?.(text);
  };

  return (
    <TextField
      ref={inputRef as React.LegacyRef<TextField>}
      onFocus={() => {}}
      editable={editable}
      baseColor={baseColor}
      value={value}
      onChangeText={_onChangeText}
      label={placeholder}
      keyboardType={keyboardType}
      textColor={textColor}
      labelFontSize={17}
      fontSize={18}
      error={error}
      clearButtonMode={'while-editing'}
      renderRightAccessory={_renderRightAccessory}
      tintColor={tintColor}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={!isVisible}
      underlineColorAndroid={'transparent'}
      lineWidth={lineWidth}
      activeLineWidth={activeLineWidth}
      textContentType={'password'}
      autoCorrect={false}
      style={[styles.text, textStyle]}
      labelTextStyle={[styles.labelText, labelTextStyle]}
      containerStyle={[styles.container, style]}
      autoCapitalize={autoCapitalize}
    />
  );
};
