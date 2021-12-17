import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, ViewStyle} from 'react-native';

//other deps
import DropDownPicker from 'react-native-dropdown-picker';

//styles
import styles from './DropDown.styles';

type CustomDropDownProp = {
  data: string[];
  onChange: (selectedItem: string) => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  listStyle?: StyleProp<ViewStyle>;
};

export const CustomDropDown: React.FC<CustomDropDownProp> = ({
  data,
  onChange,
  style,
  containerStyle,
  listStyle,
}) => {
  //state
  const dropdownValues = data.map(function (val) {
    return {label: val, value: val};
  });

  //callbacks
  const _onChange = React.useCallback(
    (selectedItem: string) => {
      onChange(selectedItem);
    },
    [onChange],
  );

  return (
    <DropDownPicker
      items={dropdownValues}
      defaultValue={data[0]}
      onChangeItem={(item: any) => _onChange(item.label)}
      activeLabelStyle={[styles.textStyle, styles.activeLabel]}
      containerStyle={[styles.container, containerStyle]}
      style={[styles.dropdown, style]}
      // zIndex={4000}
      scrollViewProps={{contentContainerStyle: {maxHeight: 100}}}
      dropDownStyle={[styles.list, listStyle]}
      // placeholder={'Enter value'}
      placeholderStyle={styles.placeholder}
      labelStyle={[styles.textStyle, styles.label]}
      itemStyle={[styles.itemStyle]}
    />
  );
};
