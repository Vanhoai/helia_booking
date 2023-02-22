import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { RootNavigation } from '@/navigation';
import { persistor, store } from 'redux/store';
import { useAppDispatch, useAppSelector, useFCM } from '@/hooks';
import { AuthActions } from './redux/reducers/authReducer';
import { Loading } from './shared';
import './i18n';

const App: React.FC<{}> = () => {
    const fcm = useFCM();
    const dispatch = useAppDispatch();
    const loading: Boolean = useAppSelector((state) => state.root.loading.isLoading);

    useEffect(() => {
        fcm.requestUserPermission();
        fcm.getDeviceToken()
            .then((token) => {
                dispatch(AuthActions.setDeviceToken(token));
            })
            .catch((error) => console.log(error));
    }, [fcm, dispatch]);

    return (
        <React.Fragment>
            {loading && <Loading />}
            <RootNavigation />
        </React.Fragment>
    );
};

const AppWrapper: React.FC<{}> = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider
                    initialMetrics={{
                        frame: { x: 0, y: 0, width: 0, height: 0 },
                        insets: { top: 0, left: 0, right: 0, bottom: 0 },
                    }}
                >
                    <App />
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};

export default AppWrapper;
