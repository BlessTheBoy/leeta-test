import {colors} from '@/styles';
import {Svg, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};
export default function CheckBox({size, color}: Props) {
  return (
    <Svg
      width={size ?? '16'}
      height={size ?? '16'}
      viewBox="0 0 16 16"
      fill={color ?? colors.grey[400]}>
      <Path d="M12.9252 3.33333V12.6667H3.40135V3.33333H12.9252ZM12.9252 2H3.40135C2.65305 2 2.0408 2.6 2.0408 3.33333V12.6667C2.0408 13.4 2.65305 14 3.40135 14H12.9252C13.6735 14 14.2857 13.4 14.2857 12.6667V3.33333C14.2857 2.6 13.6735 2 12.9252 2Z" />
    </Svg>
  );
}
