type SpinnerSize = 'small' | 'medium' | 'large';

export default function LoadingSpinner({
  size = 'medium',
  className,
}: {
  size?: SpinnerSize;
  className?: string;
}) {
  // const bSize = String(borderSize);
  let border = 'border-b-[2px]';
  let length = 'w-3 h-3';

  switch (size) {
    case 'small':
      length = 'w-3 h-3';
      border = 'border-b-[2px]';
      break;
    case 'medium':
      length = 'w-8 h-8';
      border = 'border-b-[2px]';
      break;
    case 'large':
      length = 'w-16 h-16';
      border = 'border-b-[4px]';
      break;
  }

  return (
    <div className="flex justify-center items-center">
      <div className={`rounded-full border-l-2 animate-spin ${length} ${border} border-primary ${className}`}></div>
    </div>
  );
}

// export default function LoadingSpinner() {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="w-3 h-3 border-b-[2px] border-l-2 border-primary rounded-full animate-spin"></div>
//     </div>
//   );
// }
