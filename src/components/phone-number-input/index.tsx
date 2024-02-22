import {SvgIcon} from '@components/svg-icon';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {default as style, default as styles} from './styles';

export const PhoneNumberInput = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  onSelect,
  data,
  defaultOption,
}) => {
  const [selected, setSelected] = useState('');

  const callBack = () => {
    onSelect(selected); // Call the callback function with the data
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.select}>
        <SvgIcon name="flag" size={20} />
        <SelectList
          setSelected={val => setSelected(val)}
          data={data || []}
          // @ts-ignore
          save="key"
          boxStyles={style.selectView}
          inputStyles={style.selectedText}
          dropdownStyles={style.selectDropdown}
          dropdownTextStyles={style.selectText}
          arrowicon={<SvgIcon name="dropdown" size={10} />}
          placeholder={placeholder}
          onSelect={callBack}
          search={false}
          defaultOption={defaultOption}
        />
      </View>

      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor="#979797"
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};
