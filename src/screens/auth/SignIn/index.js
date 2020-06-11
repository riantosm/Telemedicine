import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {telemedicineLogo, iconFacebook, iconGoogle} from '../../../assets';
import {ButtonComp, FormInputComp} from '../../../components';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={s.container}>
        <View style={s.top}>
          <Image source={telemedicineLogo} style={s.logo} />
        </View>
        <View style={s.form}>
          <Text style={s.title}>Sign In</Text>
          <Text style={s.desc}>
            Masuk terlebih dahulu untuk menikmati seluruh fitur.
          </Text>
          <FormInputComp name="email" label="Email / Username" />
          <FormInputComp name="password" label="Password" />
          <ButtonComp
            name="SingIn"
            text="Sing in"
            navigation={() => navigation.navigate('SignUp')}
          />
          <Text style={s.desc2}>Atau login menggunakan</Text>
          <View style={s.socialMedia}>
            <TouchableOpacity onPress={() => alert('Google')}>
              <Image source={iconGoogle} style={s.iconSocial} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Facebook')}>
              <Image source={iconFacebook} style={s.iconSocial} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={s.bottom}>
          <View style={s.contentBottom}>
            <Text style={s.textBottom}>
              Lupa Password / Belum Memiliki Akun
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    minHeight: height + 30,
  },
  top: {
    position: 'absolute',
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
    zIndex: 10,
  },
  bottom: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 50,
    zIndex: 10,
  },
  contentBottom: {alignSelf: 'center'},
  textBottom: {fontFamily: f.f_regular, color: c.secondary, fontSize: 12},
  logo: {width: 86, height: 18},
  form: {width: '100%', paddingHorizontal: 50},
  title: {
    fontSize: 30,
    textTransform: 'capitalize',
    fontFamily: f.f_bold,
    color: c.primary,
  },
  desc: {
    fontSize: 12,
    textTransform: 'capitalize',
    marginTop: 5,
    fontFamily: f.f_regular,
    color: c.secondary,
    marginBottom: 20,
  },
  desc2: {
    fontSize: 12,
    textTransform: 'capitalize',
    marginVertical: 20,
    fontFamily: f.f_regular,
    color: c.secondary,
    textAlign: 'center',
  },
  socialMedia: {flexDirection: 'row', justifyContent: 'center'},
  iconSocial: {width: 20, height: 20, marginHorizontal: 10},
});

export default SignIn;
