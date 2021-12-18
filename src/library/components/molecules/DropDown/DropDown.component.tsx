import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

//other deps
import DropDownPicker from 'react-native-dropdown-picker';

//styles
import styles from './DropDown.styles';

type CustomDropDownProp = {
  data: {label: string, value: string} [];
  onChange: (selectedItem: string) => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  listStyle?: StyleProp<ViewStyle>;
  placeHolder?: string;
};

export const CustomDropDown: React.FC<CustomDropDownProp> = ({
  data,
  onChange,
  style,
  containerStyle,
  placeholderStyle,
  listStyle,
  placeHolder = '',
}) => {
  //state
  // const dropdownValues = data.map(function (val) {
  //   return {label: val, value: val};
  // });

  //callbacks
  // const _onChange = React.useCallback(
  //   (selectedItem: string) => {
  //     onChange(selectedItem);
  //   },
  //   [onChange],
  // );

  return (
    <DropDownPicker
      items={data}
      defaultValue={data.length === 0 ? placeHolder : data[0].label}
      onChangeItem={onChange}
      activeLabelStyle={[styles.textStyle, styles.activeLabel]}
      containerStyle={[styles.container, containerStyle]}
      style={[styles.dropdown, style]}
      placeholder={placeHolder}
      // zIndex={4000}
      scrollViewProps={{contentContainerStyle: {maxHeight: 100}}}
      dropDownStyle={[styles.list, listStyle]}
      // placeholder={'Enter value'}
      placeholderStyle={[styles.placeholder, placeholderStyle]}
      labelStyle={[styles.textStyle, styles.label]}
      itemStyle={[styles.itemStyle]}
    />
  );
};
