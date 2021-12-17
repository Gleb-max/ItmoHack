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
import {HomeNavigation} from 'screens/HomeScreen';
import {MedicineNavigation} from 'screens/MedicineScreen';
import {HealthNavigation} from 'screens/HealthScreen';
import {SearchNavigation} from 'screens/SearchScreen';
import {ProfileNavigation} from 'screens/ProfileScreen';

//features navigators
import {AddPetNavigation} from 'screens/AddPetScreen';
import {AddMissingPetNavigation} from 'screens/AddMissingPetScreen';

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
  'main/home': {
    route: 'main/home',
    label: 'Home',
    iconName: 'ic_tabbar_home',
  },
  'main/medicine': {
    route: 'main/medicine',
    label: 'Medicine',
    iconName: 'ic_tabbar_medicine',
  },
  'main/bone': {
    route: 'main/bone',
    label: 'Bone',
    iconName: 'ic_tabbar_bone',
  },
  'main/search': {
    route: 'main/search',
    label: 'Search',
    iconName: 'ic_tabbar_search',
  },
  'main/profile': {
    route: 'main/profile',
    label: 'Profile',
    iconName: 'ic_tabbar_profile',
  },
};

const routes: NavigationTypes.TabBarRouteConfig[] = [
  {
    ...mapRouteNameToData['main/home'],
    screen: HomeNavigation,
  },
  {
    ...mapRouteNameToData['main/medicine'],
    screen: MedicineNavigation,
  },
  {
    ...mapRouteNameToData['main/bone'],
    screen: HealthNavigation,
  },
  {
    ...mapRouteNameToData['main/search'],
    screen: SearchNavigation,
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
    'main/home': 0,
    'main/medicine': 0,
    'main/bone': 0,
    'main/search': 0,
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
      <MainNativeStack.Screen name={'add_pet'} component={AddPetNavigation} />
      <MainNativeStack.Screen
        name={'add_missing_pet'}
        component={AddMissingPetNavigation}
      />
    </MainNativeStack.Navigator>
  );
};
