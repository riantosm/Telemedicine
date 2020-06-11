import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors as c, fonts as f} from '../../../styles';

const ButtonComp = ({name, text, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation()}>
      <View style={s.wrapper}>
        <Text style={s.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: c.primary,
    alignItems: 'center',
    paddingHorizontal: 20,
    width: 150,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 100,
    padding: 12,
  },
  text: {
    color: 'white',
    fontFamily: f.f_bold,
    textTransform: 'uppercase',
  },
});

export default ButtonComp;
