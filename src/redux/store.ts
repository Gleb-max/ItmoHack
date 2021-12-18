import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

//storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

//reducers
import {rootReducer} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'userReducer', 'welcomeReducer', 'searchReducer'],
  blacklist: ['loadingReducer', 'errorReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);
