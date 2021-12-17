import React from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

//components
import {
  StandardButton,
  CustomDropDown,
  StandardGroupHeader,
  StandardSlider,
  SMIcons,
  MontserratText,
  CustomTextInput,
} from 'library/components';

//styles
import styles from './AddPet.styles';

//types
type AddPetViewProps = {
  onAddPet: () => void;
};

//constants
const petTypes = ['Кот / Кошка', 'Собака', 'Кролик / Крольчиха', 'Крокодил'];
const genderTypes = ['Не знаю', 'Мужской', 'Женский'];

//images
import defaultPet from 'assets/images/pet/dog.png';

export const AddPetView: React.FC<AddPetViewProps> = ({onAddPet}) => {
  //tools
  // const generateElevation = (val: number) => {
  //   return {elevation: val};
  // };
  //state
  const [age, setAge] = React.useState(1);

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
        <View>
          <Image source={defaultPet} style={styles.petImage} />
          <CustomTextInput
            value={'Новый питомец'}
            tintColor={'#5C3661'}
            onChange={(text: string) => {
              console.log(text);
            }}
            baseColor={'#7B7B7B'}
            textColor={'#5C3661'}
            textStyle={styles.petName}
            lineWidth={0}
            activeLineWidth={0}
          />
        </View>
        <View>
          <View style={[styles.horizontalContainer, styles.ageContainer]}>
            <StandardGroupHeader>Возраст</StandardGroupHeader>
            <StandardGroupHeader style={styles.rightElement}>
              {age}
            </StandardGroupHeader>
          </View>

          <StandardSlider
            value={age}
            onChange={(value: number) => setAge(value)}
            maxValue={20}
          />
        </View>

        <View>
          <StandardGroupHeader style={styles.groupHeader}>
            Вид животного
          </StandardGroupHeader>

          <CustomDropDown
            data={petTypes}
            onChange={(el) => {
              console.log(el);
            }}
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
          />
        </View>

        <View>
          <StandardGroupHeader style={styles.groupHeader}>
            Пол
          </StandardGroupHeader>

          <CustomDropDown
            data={genderTypes}
            onChange={(el) => {
              console.log(el);
            }}
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
          />
        </View>

        <View>
          <View style={[styles.horizontalContainer, styles.group]}>
            <StandardGroupHeader>Особенности</StandardGroupHeader>
            <TouchableOpacity style={styles.rightElement}>
              <SMIcons name={'ic_question'} size={24} color={'#7B7B7B'} />
            </TouchableOpacity>
          </View>
          <MontserratText
            size={'m2'}
            type={'Medium'}
            styleText={styles.exampleText}
            style={styles.example}>
            К примеру, аллергия на капусту
          </MontserratText>

          <CustomTextInput
            onChange={(text: string) => {
              console.log(text);
            }}
            baseColor={'#7B7B7B'}
            tintColor={'#7B7B7B'}
            textColor={'#000000'}
            style={styles.features}
          />
        </View>

        <StandardButton
          text={'Добавить'}
          reverse={true}
          onPress={onAddPet}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
};
