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
  SMIcons,
} from 'library/components';

import {launchCamera, launchImageLibrary, MediaType} from 'react-native-image-picker';

//styles
import styles from './Profile.styles';
import { RadarChart } from 'react-native-charts-wrapper';
import { apiConfig } from 'api/config';

//types
type ProfileViewProps = {
  userData: {
    id: string;
    isuid: string;
    name: string;
    photo: string;
    role: string;
  };
  token: string;
  onAchievements: () => void;
  onNotification: () => void;
  onLogout: () => void;
  setProfilePhoto: (value: string) => void;
};

export const ProfileView: React.FC<ProfileViewProps> = ({
  userData,
  token,
  onLogout,
  onAchievements,
  setProfilePhoto,
  onNotification,
}) => {
  //effects
  React.useEffect(() => {
    loadChartData()
  }, []);

  //state
  const data = {
    dataSets: [{
      values: [{value: 100}, {value: 110}, {value: 105}, {value: 115}, {value: 110}],
      label: 'Наука',
      config: {
        color: processColor('#FF8C9D'),

        drawFilled: true,
        fillColor: processColor('#FF8C9D50'),
        fillAlpha: 255,
        lineWidth: 2,

        drawValues: false,
      }
    }],
    drawValues: false,
  };

  const [_data, _setData] = React.useState(data);

  const loadChartData = () => {
    fetch(`${apiConfig.baseUrl}api/User/${userData.id}`, {headers: {Authorization: `Bearer ${token}`}})
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson)


          const data = {
              dataSets: [{
                values: [{value: 100}],
                label: 'DS 1',
                config: {
                  color: '#FF8C9D',
  
                  drawFilled: true,
                  fillColor: '#FF8C9D',
                  fillAlpha: 100,
                  lineWidth: 2,
                  drawValues: false,


                }
              }, {
                values: [{value: 115}],
                label: 'DS 2',
                config: {
                  color: '#C0FF8C',

                  lineWidth: 2,
          
                  drawValues: false,
  
                  drawFilled: true,
                  fillColor: '#C0FF8C',
                  fillAlpha: 150,
                }
              }, {
                values: [{value: 100}],
                label: 'DS 3',
                config: {
                  color: '#8CEAFF',

                  lineWidth: 2,
          
                  drawValues: false,

                  fillAlpha: 255,

                  drawFilled: true,
                  fillColor: '#8CEAFF'
                }
              }],
              drawValues: false,
              // xValues: ['A', 'B', 'C', 'D', 'E']
          }

          const newData = {
            dataSets: [
              {
                values: [{value: 0}],
                label: 'Гуманитарные науки',
                config: {
                  color: processColor('#FF8C9D'),
          
                  drawFilled: true,
                  fillColor: processColor('#FF8C9D50'),
                  fillAlpha: 255,
                  lineWidth: 2,
          
                  drawValues: false,
                }
              },
              {
                values: [{value: 1}],
                label: 'Естесственные науки',
                config: {
                  color: processColor('#232323'),
          
                  drawFilled: true,
                  fillColor: processColor('#232332'),
                  fillAlpha: 255,
                  lineWidth: 2,
          
                  drawValues: true,
                }
              },
              {
                values: [{value: 10}],
                label: 'Спорт',
                config: {
                  color: processColor('#FF8C9D'),
          
                  drawFilled: true,
                  fillColor: processColor('#FF8C9D50'),
                  fillAlpha: 255,
                  lineWidth: 2,
          
                  drawValues: false,
                }
              },
              {
                values: [{value: 12}],
                label: 'Технические науки',
                config: {
                  color: processColor('#FF8C9D'),
          
                  drawFilled: true,
                  fillColor: processColor('#FF8C9D50'),
                  fillAlpha: 255,
                  lineWidth: 2,
          
                  drawValues: false,
                }
              },
              {
                values: [{value: 10}],
                label: 'Софт скилы',
                config: {
                  color: processColor('#54545'),
          
                  drawFilled: true,
                  fillColor: processColor('#545454'),
                  fillAlpha: 255,
                  lineWidth: 2,
          
                  drawValues: false,
                }
              },
            ],
            drawValues: false,
          };
          _setData(newData)
			    // store.dispatch(loadingCancel());
        })
        .catch(err => {
			    // store.dispatch(loadingCancel());
			    // store.dispatch(error({message: 'Ошибка при загрузке'}));
        });
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

  const xAxis = {
    valueFormatter: [],
    // valueFormatter: ['Гуманитарные науки', 'Естесственные науки', 'Спорт', 'Технические науки', 'Софт скилы'],
  }

  const yAxis = {
    enabled: false,
  }
  const legend = {
    enabled: true,
    textSize: 14,
    wordWrapEnabled: true,
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
            {userData.name}
          </GilroyText>

          <TouchableOpacity onPress={onNotification} style={styles.notificationButton}>
            <SMIcons name={'ic_notification'} size={30} color={'#1A1D5B'} />
          </TouchableOpacity>
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
          data={_data}
          xAxis={xAxis}
          highlights={[]}
          yAxis={{ enabled: false }}
          chartDescription={{ text: '' }}
          legend={legend}
          drawWeb={true}
          marker={{enabled: false}}
          webLineWidth={5}
          webLineWidthInner={5}
          webAlpha={255}
          webColor={processColor("#1A1D5B")}
          webColorInner={processColor("#1A1D5B")}
          onSelect={() => {}}
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
