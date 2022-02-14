import { Path, Svg } from '@react-pdf/renderer';

export default function NAIcon({ stroke = 'black' }) {
  return (
    <Svg
      // height={16}
      // width={16}
      // viewBox='0 0 24 24'
    >
      <Path
        stroke={stroke}
        strokeLineCap='round'
        strokeWidth={2}
        d="M159.094 278.646h-1.042l-33.521-51.188-40.938-60.437h-31.75v176.395h35.062V232.312h1.521l29.104 44.542 44.688 66.562h31.938V167.021h-35.062v111.625zm47.375 75.52h25.834l64.791-196.332h-26.125l-64.5 196.332zm192.25-187.145h-35.833l-61.979 176.395h37.375l11.521-36.375h61.459l10.749 36.375h38.146l-61.438-176.395zm-39.438 110.604 7.146-23.292 13.604-45.832h1l13.854 46.604 6.896 22.521-42.5-.001z"

        // d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
      />
    </Svg>
  );
}
