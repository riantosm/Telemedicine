import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {telemedicineLogo, WelcomeNext} from '../../../assets';
import {SlideComp} from '../../../components';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const Welcome = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={s.container}>
        <View style={s.top}>
          <Image source={telemedicineLogo} style={s.logo} />
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={s.textSkip}>Skip</Text>
          </TouchableOpacity>
        </View>

        <SlideComp />

        <View style={s.bottom}>
          <WelcomeNext style={s.next} />
          <TouchableOpacity
            style={s.iconNext}
            onPress={() => navigation.navigate('SignIn')}>
            <View>
              <Icon name="arrowright" size={20} color="white" />
            </View>
          </TouchableOpacity>
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
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 50,
    zIndex: 10,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  iconNext: {position: 'absolute', right: 25, bottom: 50},
  next: {alignSelf: 'flex-end'},
  logo: {width: 86, height: 18},
  textSkip: {
    fontSize: 10,
    textTransform: 'capitalize',
    fontFamily: f.f_bold,
    color: c.secondary,
    marginVertical: 5,
  },
});

export default Welcome;
