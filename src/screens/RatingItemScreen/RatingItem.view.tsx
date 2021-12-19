import { useRoute } from '@react-navigation/core';
import { apiConfig } from 'api/config';
import { FunctionButtonItem, GilroyText, StandardButton } from 'library/components';
import { RatingItem } from 'library/types/RatingItem.interface';
import { ShopItem } from 'library/types/ShopItem.interface';
import React from 'react';
import {View, StatusBar, Image, ScrollView, TouchableOpacity} from 'react-native';
import { RadarChart } from 'react-native-charts-wrapper';

//styles
import styles from './RatingItem.styles';

//types

type RatingItemViewProps = {
  type: string;
  item: RatingItem;
};

export const RatingItemView: React.FC<RatingItemViewProps> = ({
  type,
  item,
}) => {
  const render = () => {
    return 
  }

  const renderStudent = () => {

  }

  const renderFaculty = () => {

  }

  return (
    <>
    {type === 'student' ? renderStudent() : renderFaculty()}
    </>
  );
};
