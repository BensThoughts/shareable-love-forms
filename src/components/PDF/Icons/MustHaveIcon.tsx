import {Path, Svg} from '@react-pdf/renderer';

export default function MustHaveIcon() {
  return (
    <Svg
      height={16}
      width={16}
      viewBox='0 0 24 24'
    >
      <Path
        stroke='white'
        strokeLineCap='round'
        strokeWidth={2}
        d="m9 12 2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </Svg>
  );
}
