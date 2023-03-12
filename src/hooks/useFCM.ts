import messaging from '@react-native-firebase/messaging';
import { Linking } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { useEffect } from 'react';

PushNotification.createChannel(
    {
        channelId: 'notification-channel-id',
        channelName: 'notification-channel',
        soundName: 'default',
    },
    (result) => {
        console.log('createChannel', result);
    }
);

PushNotification.configure({
    onNotification(notification) {
        if (notification) {
            Linking.openURL('emotion://notification');
        }
    },
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
});

export const useFCM = () => {
    const requestUserPermission = async (): Promise<void> => {
        await messaging().requestPermission();
    };

    const getDeviceToken = async (): Promise<string> => {
        const token = await messaging().getToken();
        return token;
    };

    useEffect(() => {
        messaging().onMessage((remoteMessage) => {
            PushNotification.localNotification({
                channelId: 'notification-channel-id',
                title: remoteMessage?.notification?.title,
                bigText: remoteMessage?.notification?.body,
                message: remoteMessage?.notification?.body || '',
                ignoreInForeground: false,
                smallIcon: 'ic_notification',
                largeIcon: '',
                ...remoteMessage,
            });
        });

        //When the application is running, but in the background.
        messaging().onNotificationOpenedApp((remoteMessage) => {
            if (remoteMessage) {
                Linking.openURL(remoteMessage.data?.link || '');
            }
        });

        //When the application is opened from a quit state.
        messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
                if (remoteMessage) {
                    setTimeout(() => {
                        Linking.openURL(remoteMessage.data?.link || '');
                    }, 1000);
                }
            });
    }, []);

    return { requestUserPermission, getDeviceToken };
};
