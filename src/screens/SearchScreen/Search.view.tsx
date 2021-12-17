import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

//components
import {
  StandardButton,
  GilroyText,
  StepItem,
  ActionButton,
  SearchField,
  MissingPetCard,
} from 'library/components';

//styles
import styles from './Search.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {MissingPet} from 'library/types';

type SearchViewProps = {
  isSearchBegan: boolean;
  onSearchBegan?: () => void;
  onProfile: () => void;
  onAddMissingPet: () => void;
  userData: {
    photo: string;
  };
  cards?: MissingPet.Info[];
};

export const SearchView: React.FC<SearchViewProps> = ({
  isSearchBegan,
  onSearchBegan = () => console.log('began search'),
  onProfile,
  onAddMissingPet,
  userData,
  cards = [],
}) => {
  //renders
  const _renderMissingPetsCards = React.useCallback(() => {
    return cards.map((elem: MissingPet.Info, index: number) => (
      <MissingPetCard card={elem} key={index} />
    ));
  }, [cards]);

  const _renderStart = React.useCallback(() => {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContent,
            styles.scrollContentBegin,
          ]}>
          <View>
            <GilroyText styleText={styles.title} size={'g8'} type={'Semibold'}>
              Поиск питомцев
            </GilroyText>
            <GilroyText
              styleText={styles.description}
              size={'g6'}
              type={'Semibold'}>
              Помогите другим пользователям найти их друзей
            </GilroyText>
          </View>
          <View>
            <StepItem
              num={1}
              description={'Сделайте фотографию животного'}
              style={styles.stepContainer}
            />
            <StepItem
              num={2}
              description={'Добавьте точку на карте'}
              style={styles.stepContainer}
              reverse={true}
            />
            <StepItem
              num={3}
              description={'Оставьте свои контакты'}
              style={styles.stepContainer}
            />
          </View>
          <StandardButton
            text={'Попробовать'}
            reverse={true}
            onPress={onSearchBegan}
            style={styles.beganButton}
          />
        </ScrollView>
      </View>
    );
  }, [onSearchBegan]);

  const _renderUsual = () => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFDFDAA'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <GilroyText styleText={styles.title} size={'g8'} type={'Semibold'}>
              Поиск
            </GilroyText>
            <TouchableOpacity onPress={onProfile}>
              <Image source={{uri: userData.photo}} style={styles.photo} />
            </TouchableOpacity>
          </View>
          <SearchField placeholder={'Пропал щенок мастифа'} />
          <View style={styles.tagsContainer}>
            <StandardButton
              text={'г. Екатеринбург'}
              onPress={onSearchBegan}
              style={[styles.tagButton, styles.tagButtonMargin]}
              textStyle={styles.tag}
            />
            <StandardButton
              text={'Пропажа'}
              onPress={onSearchBegan}
              style={styles.tagButton}
              textStyle={styles.tag}
            />
          </View>
          {_renderMissingPetsCards()}
        </ScrollView>
        <ActionButton onPress={onAddMissingPet} />
      </View>
    );
  };

  return isSearchBegan ? _renderUsual() : _renderStart();
};
