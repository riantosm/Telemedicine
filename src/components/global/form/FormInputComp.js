import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import {colors as c, fonts as f} from '../../../styles';

const FormInputComp = ({name, label}) => {
  return (
    <View style={s.wrapperInput}>
      <Text style={s.label}>{label}</Text>
      <View style={s.bubble}>
        <TextInput
          placeholder={
            name === 'email' ? 'Contoh : rusman@mail.com' : '**********'
          }
          style={s.textInput}
          autoCapitalize="none"
        />
        {name === 'password' && (
          <TouchableOpacity style={{paddingVertical: 10}}>
            <IconF name={'eye-off'} color={c.secondary} size={15} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperInput: {borderWidth: 0, marginTop: 20},
  label: {
    fontSize: 14,
    textTransform: 'capitalize',
    marginTop: 5,
    fontFamily: f.f_regular,
    color: c.primary,
  },
  bubble: {
    backgroundColor: c.secondary3,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 14,
    flex: 1,
  },
});

export default FormInputComp;
