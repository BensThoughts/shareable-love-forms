import {Path, Svg} from '@react-pdf/renderer';

export default function LikeToHaveIcon({
  stroke = 'black',
}) {
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
        d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z"
      />
    </Svg>
  );
}
