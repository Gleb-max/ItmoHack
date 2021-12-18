import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  processColor,
} from 'react-native';

//components
import {
  StandardButton,
  FunctionButtonItem,
  GilroyText,
} from 'library/components';

import { BarChart, BarData, ChartLegend, RadarChart } from 'react-native-charts-wrapper';

import {launchCamera, launchImageLibrary, MediaType} from 'react-native-image-picker';

//styles
import styles from './Profile.styles';

//types
type ProfileViewProps = {
  userData: {
    name: string;
    surname: string;
    photo: string;
  };
  onAchievements: () => void;
  onLogout: () => void;
  setProfilePhoto: (value: string) => void;
};

export const ProfileView: React.FC<ProfileViewProps> = ({
  userData,
  onLogout,
  onAchievements,
  setProfilePhoto,
}) => {
  const data = {
      dataSets: [{
        values: [{value: 100}, {value: 110}, {value: 105}, {value: 115}, {value: 110}],
        label: 'Наука',
        config: {
          color: processColor('#FF8C9D'),

          drawFilled: true,
          fillColor: processColor('#FF8C9D'),
          fillAlpha: 255,
          lineWidth: 2,

			    drawValues: false,
          
        }
      }, {
        values: [{value: 115}, {value: 100}, {value: 105}, {value: 110}, {value: 120}],
        label: 'Социалка',
        config: {
          color: processColor('#C0FF8C'),

          drawFilled: true,
          fillColor: processColor('#C0FF8C'),
          fillAlpha: 255,
          lineWidth: 1.5,

			    drawValues: false,
        }
      }, {
        values: [{value: 105}, {value: 115}, {value: 121}, {value: 110}, {value: 105}],
        label: 'Спорт',
        config: {
          color: processColor('#8CEAFF'),

          drawFilled: true,
          fillColor: processColor('#8CEAFF'),

          fillAlpha: 255,

			    drawValues: false,
        }
      }],
      drawValues: false,
  };
  const xAxis = {
    valueFormatter: [],
  }

  const yAxis = {
    enabled: false,
  }
  const legend = {
    enabled: true,
    textSize: 14,
    form: 'CIRCLE',
    wordWrapEnabled: true
  }

  const pickImageCallBack = (image: any) => {
    if (!image.didCancel) {
      console.log(image);
      setProfilePhoto(image.assets.uri);
    }
  }

  const addImage = () => {
    launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 1,
    }, pickImageCallBack)
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHead}>
          <TouchableOpacity onPress={addImage}>
            <Image source={{ uri: userData.photo }} style={styles.photo} />
          </TouchableOpacity>

          <GilroyText size="g15" styleText={styles.name} type="Semibold">
            {userData.name} {userData.surname}
          </GilroyText>
        </View>
        <View>
          <FunctionButtonItem
            header={'Достижения'}
            iconName={'ic_flag'}
            iconColor={'#fe7062'}
            onPress={onAchievements}
            style={styles.functionButton}
          />
        </View>

        <RadarChart
            style={styles.chart}
            data={data}
            xAxis={xAxis}
            yAxis={{ enabled: false }}
            chartDescription={{ text: '' }}
            legend={legend}
            drawWeb={true}

            webLineWidth={5}
            webLineWidthInner={5}
            webAlpha={255}
            
            webColor={processColor("#1A1D5B")}
            // webColorInner={processColor("#fe7062")}
            webColorInner={processColor("#1A1D5B")}

            // skipWebLineCount={1}
            // onSelect={this.handleSelect.bind(this)}
            // onChange={(event) => console.log(event.nativeEvent)}
          />

        <StandardButton
          text={'Выйти'}
          reverse={true}
          onPress={onLogout}
          style={styles.logoutButton}
        />
      </ScrollView>
    </View>
  );
};
