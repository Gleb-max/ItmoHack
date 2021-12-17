import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  BackHandler,
  StatusBar,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

//other deps
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

//components
import {
  StandardButton,
  AuthImage,
  AuthForm,
  AuthQuestionNav,
  AuthTitle,
  CustomTextInput,
  MontserratText,
  AppFeatureImage,
  AppFeatureText,
  LoaderOverlay,
} from 'library/components';

//styles
import styles from './Auth.styles';

//types
type AuthViewProps = {
  authScreens: AuthItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  login: (data: {}) => void;
  register: (data: {}) => void;
  restore: (data: {}) => void;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  hideError: () => void;
  showError: (data: {}) => void;
};

type AuthFields = {
  login: {
    nickNameOrEmail: string;
    password: string;
  };
  register: {
    name: string;
    nickName: string;
    email: string;
    password: string;
  };
  restore: {
    email: string;
  };
};

export type AuthItem = {
  type: 'welcome' | 'login' | 'register' | 'restore';
  image: NodeModule;
};

//values
let firstIndex = -1;
let lastIndex = -1;
let deque: number[] = [];

const authFieldsContent: AuthFields = {
  login: {
    nickNameOrEmail: '',
    password: '',
  },
  register: {
    name: '',
    nickName: '',
    email: '',
    password: '',
  },
  restore: {
    email: '',
  },
};

export const AuthView: React.FC<AuthViewProps> = ({
  authScreens,
  activeIndex,
  setActiveIndex,
  login,
  register,
  restore,
  isLoading,
  isError,
  errorMessage,
  hideError,
  showError,
}) => {
  //state
  const [viewportWidth, setViewportWidth] = React.useState(
    Dimensions.get('window').width,
  );
  //refs
  var refCarousel = React.createRef<any>();

  //auth
  const loginHandler = () => {
    const data = authFieldsContent.login;
    if (data.nickNameOrEmail && data.password) {
      login(data);
    } else {
      requireFilling();
    }
  };

  const registerHandler = () => {
    const data = authFieldsContent.register;
    if (data.name && data.nickName && data.email && data.password) {
      register(data);
    } else {
      requireFilling();
    }
  };

  const restoreHandler = () => {
    const data = authFieldsContent.restore;
    if (data.email) {
      restore(data);
    } else {
      requireFilling();
    }
  };

  const requireFilling = () => {
    showError({message: 'Не все поля заполнены'});
  };

  //callbacks
  const _onLayout = () => {
    setViewportWidth(Dimensions.get('window').width);
  };

  const _goTo = (index: number) => {
    if (firstIndex === -1) {
      firstIndex = index;
    } else if (lastIndex !== -1) {
      deque.push(lastIndex);
    }
    lastIndex = index;
    refCarousel.current.snapToItem(index, false);
  };

  //effects
  React.useEffect(() => {
    const backAction = () => {
      if (firstIndex === -1) {
        BackHandler.exitApp();
      } else if (activeIndex === firstIndex) {
        deque = [];
        BackHandler.exitApp();
      } else {
        let last = deque.pop();
        if (last === undefined) {
          BackHandler.exitApp();
        } else {
          refCarousel.current.snapToItem(last, false);
          lastIndex = last;
        }
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [activeIndex, refCarousel]);

  //renders
  const _renderItem = ({item, index}: any) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {_renderScreen(item, index)}
      </ScrollView>
    );
  };

  const _renderScreen = (item: AuthItem, index: number) => {
    switch (index) {
      case 0:
        return renderWelcome(item);
      case 1:
        return renderLogin(item);
      case 2:
        return renderRegister(item);
      case 3:
        return renderRestore(item);
      default:
        return renderWelcome(item);
    }
  };

  const renderWelcome = (item: AuthItem) => {
    return (
      <View style={[styles.authScreen, styles.welcomeScreen]}>
        <AppFeatureImage logo={item.image} style={styles.imageWelcome} />
        <View style={styles.contentContainer}>
          <AppFeatureText
            text={'Теперь ваш питомец будет под нашей защитой'}
            textStyle={styles.text}
          />
          <View style={styles.authButtonsContainer}>
            <StandardButton
              text={'Зарегистрироваться'}
              style={styles.authButton}
              onPress={() => _goTo(2)}
              reverse={true}
            />
            <AuthQuestionNav
              question={'Есть аккаунт?'}
              link={'Войдите'}
              style={styles.welcomeQuestion}
              questionStyle={styles.welcomeQuestionText}
              onPress={() => _goTo(1)}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderLogin = (item: AuthItem) => {
    return (
      <View style={styles.authScreen}>
        <View style={styles.authFormContainer}>
          <View style={styles.titleGroup}>
            <AuthTitle text={'Вход'} style={styles.title} />
            <AuthImage logo={item.image} style={styles.imageLogin} />
          </View>
          <AuthForm style={styles.authForm}>
            <CustomTextInput
              value={authFieldsContent.login.nickNameOrEmail}
              onChange={(text: string) => {
                authFieldsContent.login.nickNameOrEmail = text;
              }}
              style={styles.authField}
              renderType={'clear'}
              placeholder={'Ваш никнейм или почта'}
            />
            <CustomTextInput
              value={authFieldsContent.login.password}
              autoCapitalize={'sentences'}
              onChange={(text: string) => {
                authFieldsContent.login.password = text;
              }}
              style={styles.authField}
              isPassword={true}
              renderType={'visible'}
              placeholder={'Пароль'}
            />
          </AuthForm>
        </View>
        <View style={styles.authButtonsContainer}>
          <StandardButton
            text={'Войти'}
            style={styles.authButton}
            onPress={loginHandler}
          />
          <TouchableOpacity onPress={() => _goTo(3)} style={styles.restoreLink}>
            <MontserratText style={styles.linkText} size={'m2'} type={'Medium'}>
              Забыли пароль?
            </MontserratText>
          </TouchableOpacity>
        </View>
        <AuthQuestionNav
          question={'Нет аккаунта?'}
          link={'Зарегистрируйтесь'}
          style={styles.loginQuestion}
          onPress={() => _goTo(2)}
        />
      </View>
    );
  };

  const renderRegister = (item: AuthItem) => {
    return (
      <View style={styles.authScreen}>
        <View style={styles.authFormContainer}>
          <View style={styles.titleGroup}>
            <AuthTitle text={'Регистрация'} style={styles.title} />
            <AuthImage logo={item.image} style={styles.imageRegister} />
          </View>
          <AuthForm style={styles.authForm}>
            <CustomTextInput
              value={authFieldsContent.register.name}
              autoCapitalize={'sentences'}
              onChange={(text: string) => {
                authFieldsContent.register.name = text;
              }}
              style={styles.authField}
              renderType={'clear'}
              placeholder={'Ваше имя'}
            />
            <CustomTextInput
              value={authFieldsContent.register.nickName}
              autoCapitalize={'sentences'}
              onChange={(text: string) => {
                authFieldsContent.register.nickName = text;
              }}
              style={styles.authField}
              renderType={'clear'}
              placeholder={'Ваш никнейм'}
            />
            <CustomTextInput
              value={authFieldsContent.register.email}
              autoCapitalize={'sentences'}
              onChange={(text: string) => {
                authFieldsContent.register.email = text;
              }}
              style={styles.authField}
              keyboardType={'email-address'}
              renderType={'clear'}
              placeholder={'Ваша почта'}
            />
            <CustomTextInput
              value={authFieldsContent.register.password}
              autoCapitalize={'sentences'}
              onChange={(text: string) => {
                authFieldsContent.register.password = text;
              }}
              style={styles.authField}
              keyboardType={'numeric'}
              isPassword={true}
              renderType={'visible'}
              placeholder={'Пароль'}
            />
          </AuthForm>
        </View>
        <View style={styles.authButtonsContainer}>
          <StandardButton
            text={'Зарегистрироваться'}
            style={styles.authButton}
            onPress={registerHandler}
          />
          <AuthQuestionNav
            question={'Есть аккаунт?'}
            link={'Войдите'}
            onPress={() => _goTo(1)}
          />
        </View>
      </View>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderRestore = (item: AuthItem) => {
    return (
      <View style={styles.authScreen}>
        <View style={styles.authFormContainer}>
          <AuthTitle
            text={'Восстановление'}
            style={[styles.title, styles.restoreTitle]}
          />
          <AuthForm style={styles.authForm}>
            <CustomTextInput
              value={authFieldsContent.restore.email}
              autoCapitalize={'sentences'}
              onChange={(text: string) => {
                authFieldsContent.restore.email = text;
              }}
              style={styles.authField}
              keyboardType={'email-address'}
              renderType={'clear'}
              placeholder={'Ваша почта'}
            />
          </AuthForm>
        </View>
        <View style={styles.authButtonsContainer}>
          <StandardButton
            text={'Отправить ссылку'}
            style={styles.authButton}
            onPress={restoreHandler}
          />
          <MontserratText
            size={'m2'}
            type={'Medium'}
            styleText={styles.restoreText}>
            На указанную почту придет ссылка для получения нового пароля
          </MontserratText>
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#FFCFB4', '#8D5B94']}
      style={styles.container}
      start={{x: 0, y: 0}}
      onLayout={_onLayout}
      end={{x: 1, y: 1}}>
      {isLoading && <LoaderOverlay size={'large'} />}
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Carousel
        ref={refCarousel}
        data={authScreens}
        firstItem={activeIndex}
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        style={styles.container}
        slideStyle={{width: viewportWidth}}
        inactiveSlideOpacity={1}
        scrollEnabled={false}
        inactiveSlideScale={1}
        onSnapToItem={(slideIndex: number) => setActiveIndex(slideIndex)}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={isError}
        style={styles.modalContainer}
        onRequestClose={hideError}>
        <TouchableOpacity
          style={styles.errorOpacity}
          activeOpacity={1}
          onPressOut={hideError}>
          <TouchableWithoutFeedback>
            <View style={styles.errorView}>
              <Text>{errorMessage}</Text>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </LinearGradient>
  );
};
