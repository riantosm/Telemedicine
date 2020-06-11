import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
