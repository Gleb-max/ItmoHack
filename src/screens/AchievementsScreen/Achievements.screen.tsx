import { useNavigation } from '@react-navigation/core';
import React from 'react';

//views
import {AchievementsView} from './Achievements.view';

type AchievementsScreenProps = {};

export const AchievementsScreen: React.FC<AchievementsScreenProps> = ({}) => {
  //navigation
	const navigation = useNavigation();

	const onAddAchievementPress = React.useCallback(() => {
		navigation.navigate('add_achievement', {});
	}, [navigation]);

  const onCategoryAchievementPress = React.useCallback((category: string) => {
		navigation.navigate('achievement_category', {category: category});
	}, [navigation]);
  
  const achievements = [
    {type: 'add'},
    {type: 'humanities'},
    {type: 'natural'},
    {type: 'physical'},
    {type: 'softSkills'},
    {type: 'technical'},
  ];

  return <AchievementsView achievements={achievements} onPressAdd={onAddAchievementPress} onPressCategory={onCategoryAchievementPress} />;
};
