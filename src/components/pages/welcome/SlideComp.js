import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {illWelcome} from '../../../assets';
import {colors as c, fonts as f} from '../../../styles';
import Swiper from 'react-native-swiper';

const SlideComp = props => {
  return (
    <View style={{height: 460}}>
      <Swiper
        activeDotColor={c.primary}
        dotColor={c.secondary2}
        style={s.wrapper}
        showsButtons={false}
        loop={false}
        autoplay={true}>
        <View style={s.slider}>
          <Slider
            title="Konsultasi Gratis bersama dokter spesialis"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quis in aliquet elit consectetur blandit. Lorem ultrices lectus congue accumsan, dui vivamus turpis fermentum. Massa ac aenean porttitor velit amet eget. Odio porttitor."
          />
        </View>
        <View style={s.slider}>
          <Slider
            title="Konsultasi Gratis bersama dokter spesialis"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quis in aliquet elit consectetur blandit. Lorem ultrices lectus congue accumsan, dui vivamus turpis fermentum. Massa ac aenean porttitor velit amet eget. Odio porttitor."
          />
        </View>
        <View style={s.slider}>
          <Slider
            title="Konsultasi Gratis bersama dokter spesialis"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quis in aliquet elit consectetur blandit. Lorem ultrices lectus congue accumsan, dui vivamus turpis fermentum. Massa ac aenean porttitor velit amet eget. Odio porttitor."
          />
        </View>
      </Swiper>
    </View>
  );
};

const Slider = ({title, desc}) => {
  return (
    <>
      <Image source={illWelcome} style={s.ill} resizeMode="contain" />
      <Text style={s.title}>{title}</Text>
      <Text style={s.desc}>{desc}</Text>
    </>
  );
};

const s = StyleSheet.create({
  slider: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    // top: -50,
    width: '100%',
  },
  ill: {width: 346, height: 277},
  title: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: f.f_bold,
    color: c.primary,
  },
  desc: {
    fontSize: 10,
    width: '70%',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: 5,
    fontFamily: f.f_regular,
    color: c.secondary,
  },
  wrapper: {},
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SlideComp;
