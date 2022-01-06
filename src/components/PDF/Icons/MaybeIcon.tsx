import {Path, Svg, Circle} from '@react-pdf/renderer';

export default function MaybeIcon() {
  return (
    <Svg
      height={16}
      width={16}
      viewBox='0 0 24 24'
    >
      <Circle fill='white' r={1.5} cx={12} cy={17} />
      <Path
        strokeLineCap='round'
        strokeWidth={2}
        stroke='white'
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
}
