import {colors} from '@/styles';
import {Svg, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};
export default function ChevronRight({size, color}: Props) {
  return (
    <Svg
      width={size ?? '20'}
      height={size ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
      stroke={color ?? colors.grey[400]}>
      <Path
        d="M7.5 15L12.5 10L7.5 5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
