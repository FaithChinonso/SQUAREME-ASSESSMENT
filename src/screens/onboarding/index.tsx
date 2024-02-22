import {ColoredLogo, Logo, Onb1, Onb2, Onb3} from '@assets/images';
import React, {FC, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {SizedBox} from '../../components/sized-box/index';
import style from './styles';

export const Onboarding: FC = ({navigation}: any) => {
  const width = Dimensions.get('window').width;

  const slides = [
    {
      id: 1,
      title: 'Fast and easy payments to anyone.',
      desc: 'Receive funds sent to you in seconds.',
    },
    {
      id: 2,
      title: 'A super secure way to pay your bills',
      desc: 'Pay your bills with the cheapest rates in town.',
    },
    {
      id: 3,
      title: 'Spend your money easily without any complications',
      desc: ' ',
    },
  ];

  const ref = useRef<any>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollIndex = () => {
    const nextSlideIndex = currentIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * (width * 0.9);
      ref?.current?.scrollToOffset({offset});
      setCurrentIndex(nextSlideIndex);
    }
  };

  const scrollBack = () => {
    const nextSlideIndex = currentIndex - 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * (width * 0.9);
      ref?.current?.scrollToOffset({offset});
      setCurrentIndex(nextSlideIndex);
    }
  };

  // useEffect(() => {
  //   let timer;

  //   if (currentIndex !== slides.length - 1) {
  //     timer = setTimeout(() => {
  //       scrollIndex();
  //     }, 2000);
  //   } else {
  //     timer = setTimeout(() => {
  //       // Call your function here after 5 seconds
  //       // navigation.navigate('Auth');
  //     }, 5000);
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentIndex, navigation, slides.length]);

  const updateIndex = e => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffset / (width * 0.9));
    setCurrentIndex(newIndex);
  };

  return (
    <View style={style.pageWrap}>
      <Image
        source={currentIndex === 1 ? ColoredLogo : Logo}
        style={style.logo}
      />
      <Image
        source={currentIndex === 0 ? Onb3 : currentIndex === 1 ? Onb2 : Onb1}
        style={style.image}
      />
      <LinearGradient
        colors={[
          'rgba(0,0,0,0.001)',
          'rgba(0,0,0,0.01)',
          'rgba(0,0,0,0.2)',
          'rgba(0,0,0,0.3)',
          'rgba(0,0,0,0.4)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,1)',
        ]}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        style={style.scrollWrap}>
        <View style={style.container}>
          {/* Render indicator */}

          <SizedBox height={24} />
          <View style={style.flowContainer}>
            <View style={style.ctaGrid}>
              <View style={style.grid}>
                {slides.map((_, index) => (
                  <View
                    style={[
                      currentIndex === index
                        ? style.indicate
                        : style.unindicate,
                    ]}
                  />
                ))}
              </View>
            </View>

            <FlatList
              ref={ref}
              data={slides}
              showsHorizontalScrollIndicator={false}
              horizontal
              pagingEnabled
              onMomentumScrollEnd={updateIndex}
              renderItem={({item}) => {
                return (
                  <View style={style.swipeCont}>
                    <View style={style.swipeTextContainer}>
                      <SizedBox height={19} />
                      <Text style={style.swipeLabel}>{item.title}</Text>
                      <SizedBox height={15} />
                      <Text style={style.swipeDesc}>{item.desc}</Text>
                    </View>
                    <SizedBox height={35} />
                    {currentIndex !== 2 ? (
                      <View style={style.flex}>
                        {currentIndex === 1 ? (
                          <TouchableOpacity
                            onPress={() => {
                              scrollBack();
                            }}>
                            <Text style={style.flexSkip}>Skip</Text>
                          </TouchableOpacity>
                        ) : (
                          <View />
                        )}
                        <TouchableOpacity
                          onPress={() => {
                            scrollIndex();
                          }}
                          style={style.flexButton}>
                          <Text style={style.flexNext}>Next</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Auth', {screen: 'Welcome'});
                        }}
                        style={style.flexButtonn}>
                        <Text style={style.flexNext}>Get Started</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              }}
            />
          </View>

          <SizedBox height={48} />
        </View>
      </LinearGradient>
    </View>
  );
};
