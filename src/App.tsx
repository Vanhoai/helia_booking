import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { RootNavigation } from '@/navigation';
import { persistor, store } from 'redux/store';
import './i18n';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider
                    initialMetrics={{
                        frame: { x: 0, y: 0, width: 0, height: 0 },
                        insets: { top: 0, left: 0, right: 0, bottom: 0 },
                    }}
                >
                    <RootNavigation />
                </SafeAreaProvider>
            </PersistGate>
            jljlkjljljj
        </Provider>
    );
};

export default App;
