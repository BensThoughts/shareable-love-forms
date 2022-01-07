import {Path, Svg} from '@react-pdf/renderer';

export default function NAIcon() {
  return (
    <Svg
      height={16}
      width={16}
      viewBox='0 0 24 24'
    >
      <Path
        stroke='purple'
        strokeLineCap='round'
        strokeWidth={2}
        d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
      />
    </Svg>
  );
}
