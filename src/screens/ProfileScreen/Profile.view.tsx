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
} from 'library/components';

//styles
import styles from './Profile.styles';

//types
type ProfileViewProps = {
  userData: {
    name: string;
    surname: string;
    photo: string;
  };
  onAccount: () => void;
  onLogout: () => void;
};

export const ProfileView: React.FC<ProfileViewProps> = ({
  userData,
  onLogout,
  onAccount,
}) => {
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
          <TouchableOpacity>
            <Image source={{uri: userData.photo}} style={styles.photo} />
          </TouchableOpacity>

          <GilroyText size="g15" styleText={styles.name} type="Semibold">
            {userData.name} {userData.surname}
          </GilroyText>
        </View>
        <View>
          <FunctionButtonItem
            header={'Аккаунт'}
            iconName={'ic_account'}
            iconColor={'#FDB78F'}
            onPress={onAccount}
            style={styles.functionButton}
          />
          {/* <FunctionButtonItem
            header={'Аккаунт'}
            iconName={'ic_account'}
            iconColor={'#FDB78F'}
            onPress={onAccount}
            style={styles.functionButton}
          />
          <FunctionButtonItem
            header={'Аккаунт'}
            iconName={'ic_account'}
            iconColor={'#FDB78F'}
            onPress={onAccount}
            style={styles.functionButton}
          />
          <FunctionButtonItem
            header={'Аккаунт'}
            iconName={'ic_account'}
            iconColor={'#FDB78F'}
            onPress={onAccount}
            style={styles.functionButton}
          /> */}
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
