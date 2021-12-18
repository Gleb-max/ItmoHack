import React from 'react';

//navigation
import {
  createBottomTabNavigator,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BottomTabBarOptions,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

//tab screens
// import {HomeNavigation} from 'screens/HomeScreen';
import {RatingsNavigation} from 'screens/RatingsScreen';
import {FieldNavigation} from 'screens/FieldScreen';
import {ShopNavigation} from 'screens/ShopScreen';
import {ProfileNavigation} from 'screens/ProfileScreen';

//features navigators
import {AchievementsNavigation} from 'screens/AchievementsScreen';

//components
import {TabBarContainer} from 'library/components/molecules';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Navigation as NavigationTypes} from 'library/types';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

type MainNavigationProps = {
  notifications?: Record<string, number>;
};

//routes
const mapRouteNameToData: NavigationTypes.TabBarRouteMap = {
  'main/ratings': {
    route: 'main/ratings',
    label: 'Ratings',
    iconName: 'ic_tabbar_rating',
  },
  'main/field': {
    route: 'main/field',
    label: 'Field',
    iconName: 'ic_tabbar_field',
  },
  'main/shop': {
    route: 'main/shop',
    label: 'Shop',
    iconName: 'ic_tabbar_shop',
  },
  'main/profile': {
    route: 'main/profile',
    label: 'Profile',
    iconName: 'ic_tabbar_profile',
  },
};

const routes: NavigationTypes.TabBarRouteConfig[] = [
  {
    ...mapRouteNameToData['main/ratings'],
    screen: RatingsNavigation,
  },
  {
    ...mapRouteNameToData['main/field'],
    screen: FieldNavigation,
  },
  {
    ...mapRouteNameToData['main/shop'],
    screen: ShopNavigation,
  },
  {
    ...mapRouteNameToData['main/profile'],
    screen: ProfileNavigation,
  },
];

const MainNativeStack = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();

export const MainNavigation: React.FC<MainNavigationProps> = ({
  notifications = {
    'main/ratings': 0,
    'main/field': 0,
    'main/shop': 0,
    'main/profile': 0,
  },
}) => {
  //data
  const routeData = React.useMemo(() => {
    return routes.reduce(
      (acc, tab) => ({
        ...acc,
        [tab.route]: {
          ...mapRouteNameToData[tab.route],
          notificationsCount: notifications[tab.route],
        },
      }),
      {},
    );
  }, [notifications]);

  //renders
  const _renderTabBar = React.useCallback(
    (props: BottomTabBarProps<BottomTabBarOptions>) => (
      <TabBarContainer mapRouteNameToData={routeData} {...props} />
    ),
    [routeData],
  );

  const _renderPages = React.useCallback(() => {
    return routes.map(({route, screen}) => (
      <MainTabs.Screen name={route} component={screen} key={route} />
    ));
  }, []);

  const _renderBottomTabBar = React.useCallback(() => {
    return (
      <MainTabs.Navigator tabBar={_renderTabBar}>
        {_renderPages()}
      </MainTabs.Navigator>
    );
  }, [_renderPages, _renderTabBar]);

  return (
    <MainNativeStack.Navigator
      screenOptions={{headerShown: false, stackAnimation: 'default'}}>
      <MainNativeStack.Screen name={'main'} component={_renderBottomTabBar} />
      <MainNativeStack.Screen name={'achievements'} component={AchievementsNavigation} />
    </MainNativeStack.Navigator>
  );
};
