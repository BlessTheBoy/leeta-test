import {colors} from '@/styles';
import {Svg, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};
export default function User({size, color}: Props) {
  return (
    <Svg
      width={size ?? '16'}
      height={size ?? '16'}
      viewBox="0 0 16 16"
      fill="none"
      stroke={color ?? colors.grey[400]}>
      <Path
        d="M8 10C5.88661 10 4.0072 11.0204 2.81066 12.604C2.55313 12.9448 2.42437 13.1152 2.42858 13.3455C2.43184 13.5235 2.54357 13.7479 2.68357 13.8578C2.86479 14 3.11591 14 3.61815 14H12.3818C12.8841 14 13.1352 14 13.3164 13.8578C13.4564 13.7479 13.5682 13.5235 13.5714 13.3455C13.5756 13.1152 13.4469 12.9448 13.1893 12.604C11.9928 11.0204 10.1134 10 8 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34314 2 5 3.34315 5 5C5 6.65685 6.34314 8 8 8Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
