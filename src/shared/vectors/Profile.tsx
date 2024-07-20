import {colors} from '@/styles';
import {Svg, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};
export default function Profile({size, color}: Props) {
  return (
    <Svg
      width={size ?? '35'}
      height={size ?? '35'}
      viewBox="0 0 35 35"
      fill="none"
      stroke={color ?? colors.grey[400]}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8454 31.3546C11.6021 31.3546 7.12456 30.5387 7.12456 27.2711C7.12456 24.0034 11.5737 20.987 16.8454 20.987C22.0886 20.987 26.5662 23.9742 26.5662 27.2418C26.5662 30.5081 22.117 31.3546 16.8454 31.3546Z"
        strokeWidth="2.01802"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8351 16.4589C20.2759 16.4589 23.0647 13.6701 23.0647 10.2293C23.0647 6.78848 20.2759 3.99838 16.8351 3.99838C13.3942 3.99838 10.6041 6.78848 10.6041 10.2293C10.5925 13.6585 13.362 16.4473 16.7912 16.4589C16.8067 16.4589 16.8209 16.4589 16.8351 16.4589Z"
        strokeWidth="2.01802"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
