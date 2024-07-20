import {colors} from '@/styles';
import {Svg, Path, G, Defs, Rect, ClipPath} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};
export default function ArrowLeft({size, color}: Props) {
  return (
    <Svg
      width={size ?? '15'}
      height={size ? (size * 2) / 3 : '10'}
      viewBox="0 0 15 10"
      stroke={color ?? colors.grey[400]}
      fill="none">
      <Path
        d="M4.5 9L1 5M1 5L4.5 0.999999M1 5L14 5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
