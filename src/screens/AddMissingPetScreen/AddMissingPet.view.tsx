import React from 'react';
import {View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';

//components
import {
  StandardButton,
  MontserratText,
  CustomTextInput,
  GilroyText,
  BackButton,
  CustomDropDown,
} from 'library/components';

//styles
import styles from './AddMissingPet.styles';

//types
type AddMissingPetViewProps = {
  onAddMissingPet: () => void;
  onBack: () => void;
};

export const AddMissingPetView: React.FC<AddMissingPetViewProps> = ({
  onAddMissingPet,
  onBack,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <BackButton onPress={onBack} style={styles.backButton} />
          <GilroyText type={'Medium'} size={'g14'} style={styles.header}>
            Добавить объявление
          </GilroyText>
        </View>
        <CustomDropDown
          data={['Находка', 'Пропажа']}
          onChange={(el) => {
            console.log(el);
          }}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
        />
        <View style={styles.fieldGroupContainer}>
          <MontserratText
            type={'Medium'}
            size={'m6'}
            style={styles.fieldHeader}>
            Название
          </MontserratText>
          <CustomTextInput
            onChange={(text: string) => {
              console.log(text);
            }}
            baseColor={'#7B7B7B'}
            tintColor={'#7B7B7B'}
            textColor={'#000000'}
          />
        </View>

        <View style={styles.fieldGroupContainer}>
          <View style={styles.addressRow}>
            <MontserratText
              type={'Medium'}
              size={'m6'}
              style={styles.fieldHeader}>
              Адрес
            </MontserratText>
            <TouchableOpacity>
              <GilroyText type={'Medium'} size={'g6'} style={styles.mapButton}>
                Выбрать на карте
              </GilroyText>
            </TouchableOpacity>
          </View>

          <CustomTextInput
            onChange={(text: string) => {
              console.log(text);
            }}
            editable={true}
            baseColor={'#7B7B7B'}
            tintColor={'#7B7B7B'}
            textColor={'#000000'}
          />
        </View>

        <View style={styles.fieldGroupContainer}>
          <MontserratText
            type={'Medium'}
            size={'m6'}
            style={styles.fieldHeader}>
            Фотография
          </MontserratText>
        </View>

        <View style={styles.fieldGroupContainer}>
          <MontserratText
            type={'Medium'}
            size={'m6'}
            style={styles.fieldHeader}>
            Номер телефона
          </MontserratText>
          <CustomTextInput
            onChange={(text: string) => {
              console.log(text);
            }}
            baseColor={'#7B7B7B'}
            tintColor={'#7B7B7B'}
            textColor={'#000000'}
          />
        </View>

        <StandardButton
          text={'Добавить'}
          reverse={true}
          onPress={onAddMissingPet}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
};
