import React from 'react';
import {View, SafeAreaView, StatusBar, ScrollView} from 'react-native';

//components
import {
  FastCard,
  FunctionButtonItem,
  HomeHeader,
  PetCard,
} from 'library/components';

//styles
import styles from './Home.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {HomeCard} from 'library/types';

type HomeViewProps = {
  userData: {
    name: string;
    photo: string;
  };
  onProfile: () => void;
  onAddPet: () => void;
  onVetCall: () => void;
  onFindGroomer: () => void;
  onChooseFood: () => void;
  fastCards: HomeCard.HomeFastAccessCard[];
};

export const HomeView: React.FC<HomeViewProps> = ({
  userData,
  onProfile,
  onAddPet,
  onVetCall,
  onFindGroomer,
  onChooseFood,
  fastCards,
}) => {
  //renders
  // const _renderListItem = React.useCallback(
  //   ({item}: {item: HomeCard.HomeFastAccessCard}) => {
  //     if (item.name === undefined) {
  //       return (
  //         <FastCard
  //           fastCardInfo={item as HomeCard.FastHomeCard}
  //           backgroundColor={'#EABBBB'}
  //         />
  //       );
  //     } else {
  //       return <PetCard petCardInfo={item as HomeCard.PetCard} />;
  //     }
  //   },
  //   [],
  // );

  const _renderHeader = React.useCallback(() => {
    return (
      <HomeHeader
        userData={userData}
        onProfile={onProfile}
        style={styles.header}
      />
    );
  }, [onProfile, userData]);

  const _renderFooter = React.useCallback(() => {
    return (
      <View style={styles.functionButtonsContainer}>
        <FunctionButtonItem
          header={'Позвонить ветеринару'}
          iconName={'ic_phone'}
          iconColor={'#FDB78F'}
          onPress={onVetCall}
          style={styles.functionButton}
        />
        <FunctionButtonItem
          header={'Найти груммера'}
          iconName={'ic_scissors'}
          iconColor={'#FDB78F'}
          onPress={onFindGroomer}
          style={styles.functionButton}
        />
        <FunctionButtonItem
          header={'Подобрать корм'}
          iconName={'ic_chicken'}
          iconColor={'#FDB78F'}
          onPress={onChooseFood}
          style={styles.functionButton}
        />
      </View>
    );
  }, [onChooseFood, onFindGroomer, onVetCall]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {_renderHeader()}
        <View style={styles.cardColumnsContainer}>
          <View style={styles.cardColumn}>
            <PetCard
              petCardInfo={fastCards[0] as HomeCard.PetCard}
              style={styles.leftElem}
            />
            <FastCard
              fastCardInfo={fastCards[2] as HomeCard.FastHomeCard}
              backgroundColor={'#BF8CA8'}
              style={styles.leftElem}
            />
          </View>
          <View style={styles.cardColumn}>
            <FastCard
              fastCardInfo={fastCards[1] as HomeCard.FastHomeCard}
              backgroundColor={'#EABBBB'}
              onPress={onAddPet}
              style={styles.rightElem}
              mainTextStyle={styles.addCardMainText}
              contentContainerStyle={styles.addCardContentContainer}
            />
            <FastCard
              fastCardInfo={fastCards[3] as HomeCard.FastHomeCard}
              backgroundColor={'#F4B9AE'}
              style={styles.rightElem}
            />
          </View>
        </View>
        {_renderFooter()}
      </ScrollView>
      {/* <FlatList<HomeCard.HomeFastAccessCard>
        data={fastCards}
        numColumns={2}
        columnWrapperStyle={{}}
        renderItem={_renderListItem}
        ListHeaderComponent={_renderHeader}
        ListFooterComponent={_renderFooter}
        keyExtractor={(item: HomeCard.HomeFastAccessCard, index: number) =>
          index.toString()
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      /> */}
    </SafeAreaView>
  );
};
