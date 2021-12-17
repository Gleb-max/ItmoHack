import React from 'react';
import {View, Dimensions, ScrollView, StatusBar} from 'react-native';

//other deps
import Carousel from 'react-native-snap-carousel';

//components
import {AppFeatureText, AppFeatureImage, NextButton} from 'library/components';

//styles
import styles from './Welcome.styles';

//types
type WelcomeViewProps = {
  appFeaturesScreens: AppFeaturesItem[];
  onWelcomeComplete: () => void;
};

export type AppFeaturesItem = {
  image: NodeModule;
  content: string;
};

export const WelcomeView: React.FC<WelcomeViewProps> = ({
  appFeaturesScreens,
  onWelcomeComplete,
}) => {
  //state
  const [viewportWidth, setViewportWidth] = React.useState(
    Dimensions.get('window').width,
  );

  //callbacks
  const _onLayout = () => {
    setViewportWidth(Dimensions.get('window').width);
  };

  //refs
  var refCarousel = React.createRef<any>();

  //renders
  const _renderItem = ({item, index}: any) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />
        <View style={styles.featureScreen}>
          <AppFeatureImage logo={item.image} style={styles.image} />
          <View style={styles.contentContainer}>
            <AppFeatureText text={item.content} textStyle={styles.text} />
            <NextButton
              onPress={() =>
                index === 3
                  ? onWelcomeComplete()
                  : refCarousel.current.snapToNext(true)
              }
              style={styles.nextButton}
            />
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container} onLayout={_onLayout}>
      <Carousel
        ref={refCarousel}
        lockScrollWhileSnapping={true}
        data={appFeaturesScreens}
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        slideStyle={{width: viewportWidth}}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};
