import {Path, Svg} from '@react-pdf/renderer';

export default function OffLimitsIcon({stroke = 'black'}) {
  return (
    <Svg
      height={16}
      width={16}
      viewBox='0 0 24 24'
    >
      <Path
        stroke={stroke}
        strokeLineCap='round'
        strokeWidth={2}
        d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"

        // d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 1 1 3 0m-3 6a1.5 1.5 0 0 0-3 0v2a7.5 7.5 0 0 0 15 0v-5a1.5 1.5 0 0 0-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 0 1 3 0v1m0 0V11m0-5.5a1.5 1.5 0 0 1 3 0v3m0 0V11"
      />
    </Svg>
  );
}
