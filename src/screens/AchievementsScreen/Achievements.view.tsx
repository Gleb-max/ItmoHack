import React from 'react';
import {View, StatusBar, FlatList} from 'react-native';

//styles
import styles from './Achievements.styles';

import { BarChart, BarData, ChartLegend, RadarChart } from 'react-native-charts-wrapper';
import { AchievementCategoryCard } from 'library/components';

//types
type AchievementsViewProps = {
  achievements: {type: string}[];
  onPressAdd: () => void;
  onPressCategory: (category: string) => void;
};

export const AchievementsView: React.FC<AchievementsViewProps> = ({achievements, onPressAdd, onPressCategory}) => {
  //renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<AchievementCategoryCard
        type={item.type}
				onPress={index === 0 ? onPressAdd : () => onPressCategory(item.type)}
				key={index}
				style={styles.card} />
		);
	}, [achievements]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <FlatList<any>
				data={achievements}
				renderItem={_renderListItem}
        numColumns={2}
				keyExtractor={(item: {type: string}, index: number) => item.type}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.flatListContainer}
			/>

    </View>
  );
};
