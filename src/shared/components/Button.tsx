import {Text, Pressable, PressableProps} from 'react-native';
import React from 'react';
import {colors} from '@/styles';
import {fontFamilies} from '../constants/fonts';

interface ButtonProps extends PressableProps {
  title: string;
}

export default function Button({disabled, title, ...props}: ButtonProps) {
  return (
    <Pressable
      style={({pressed}) => ({
        height: 56,
        borderRadius: 8,
        backgroundColor: disabled ? colors.grey[200] : colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: pressed ? 0.5 : 1,
      })}
      disabled={disabled}
      {...props}>
      <Text
        style={{
          fontSize: 16,
          fontFamily: fontFamilies.Inter.medium,
          color: colors.white,
        }}>
        {title}
      </Text>
    </Pressable>
  );
}
