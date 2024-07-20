import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '@components/Header';

export default function OrdersScreen() {
  return (
    <SafeAreaView>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>This is the Orders screen</Text>
      </View>
    </SafeAreaView>
  );
}
