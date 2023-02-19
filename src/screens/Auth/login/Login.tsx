import {useAppDispatch} from '@/hooks/useRedux';
import {ThemeActions} from '@/redux/reducers/themeReducer';
import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';

export const Login: FC<{}> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ThemeActions.setTheme('dark'));
  }, []);

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};
