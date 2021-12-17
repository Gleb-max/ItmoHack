import React from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

//components
import {GilroyText, HealthCard} from 'library/components';

//styles
import styles from './Health.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {PetHealthCard} from 'library/types';

type HealthViewProps = {
  userData: {
    photo: string;
  };
  onProfile: () => void;
  cards: PetHealthCard.Info[];
};

export const HealthView: React.FC<HealthViewProps> = ({
  userData,
  onProfile,
  cards,
}) => {
  //renders
  const _renderCards = React.useCallback(() => {
    return cards.map((elem: PetHealthCard.Info, index: number) => (
      <HealthCard
        card={elem}
        key={index}
        reverse={index % 2 === 1}
        onPress={() => console.log('health')}
      />
    ));
  }, [cards]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFDFDAA'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <GilroyText styleText={styles.title} size={'g8'} type={'Semibold'}>
            Здоровье
          </GilroyText>
          <TouchableOpacity onPress={onProfile}>
            <Image source={{uri: userData.photo}} style={styles.photo} />
          </TouchableOpacity>
        </View>
        {_renderCards()}
      </ScrollView>
    </View>
  );
};
