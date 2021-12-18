import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
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

//types
type ProfileViewProps = {
  userData: {
    name: string;
    surname: string;
    photo: string;
  };
  onAchievements: () => void;
  onNotification: () => void;
  onLogout: () => void;
  setProfilePhoto: (value: string) => void;
};

export const ProfileView: React.FC<ProfileViewProps> = ({
  userData,
  onLogout,
  onAchievements,
  setProfilePhoto,
  onNotification,
}) => {
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
