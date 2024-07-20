import {colors} from '@/styles';
import {Svg, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};
export default function Star({size, color}: Props) {
  return (
    <Svg
      width={size ?? '15'}
      height={size ?? '15'}
      viewBox="0 0 15 15"
      fill={color ?? colors.grey[400]}>
      <Path d="M7.5 11.1063L11.3625 13.4375L10.3375 9.04375L13.75 6.0875L9.25625 5.70625L7.5 1.5625L5.74375 5.70625L1.25 6.0875L4.6625 9.04375L3.6375 13.4375L7.5 11.1063Z" />
    </Svg>
  );
}
