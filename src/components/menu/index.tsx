/* eslint-disable react-native/no-inline-styles */
import {SizedBox, SvgIcon} from '@components';
import {HDP, HP} from '@helpers';
import React, {useCallback} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';

export const NavMenu = ({state, descriptors, navigation}: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MenuIcons = useCallback(({label, status}: any) => {
    switch (label.toLowerCase()) {
      case 'profile':
        return (
          <View>
            <SvgIcon name="profile" size={25} />
          </View>
        );
      case 'wallet':
        return (
          <View>
            <SvgIcon name={status ? 'active-wallet' : 'wallet'} size={25} />
          </View>
        );
      default:
        return (
          <View>
            <SvgIcon name={status ? 'active-home' : 'home'} size={25} />
          </View>
        );
    }
  }, []);

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingHorizontal: HDP(40),
        paddingTop: HDP(24),
        paddingBottom: HDP(Platform.OS === 'android' ? 18 : 24),
        position: 'absolute',
        bottom: HP(Platform.OS === 'android' ? -2 : -1.5),
      }}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{justifyContent: 'center'}}>
            <View
              style={[
                {
                  alignItems: 'center',
                  paddingVertical: HDP(10),
                },
              ]}>
              <MenuIcons label={label} status={isFocused} />
            </View>
            <View>
              <SizedBox height={1} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
