import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, View, ViewStyle} from 'react-native';

//components
import {SMIcons} from 'library/components/atoms';
import {TabBarItem} from './TabBarItem';

//styles
import styles, {TAB_BAR_BORDER_RADIUS} from './TabBar.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TabData} from './TabBar.interface';

type TabBarProps = {
  tabsData: TabData[];
  currentIndex: number;
  style?: StyleProp<ViewStyle>;
};

export const TabBar: React.FC<TabBarProps> = ({tabsData, style}) => {
  //renders
  const _renderTabBarItems = React.useCallback(() => {
    return tabsData.map((tab, index) => {
      const leftStyle: ViewStyle = {borderTopLeftRadius: TAB_BAR_BORDER_RADIUS};
      const rightStyle: ViewStyle = {
        borderTopRightRadius: TAB_BAR_BORDER_RADIUS,
      };

      return (
        <TabBarItem
          {...tab}
          key={tab.iconName}
          style={[
            styles.tabBarItem,
            index === 0 && leftStyle,
            index === tabsData.length - 1 && rightStyle,
          ]}
        />
      );
    });
  }, [tabsData]);

  return (
    <View style={[styles.container, style]}>
      {/* actual component size is smaller on borderRadius
			to allow content going under rounding (e.g. scrollview) */}
      <View style={styles.tabBarSpace} />

      <View style={styles.tabBar}>{_renderTabBarItems()}</View>
    </View>
  );
};
