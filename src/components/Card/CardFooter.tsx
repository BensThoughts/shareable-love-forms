import Link from 'next/link';
import {ChevronDoubleRightIcon} from '@heroicons/react/solid';

export default function CardFooter({
  href,
}: {
  href: string,
}) {
  return (
    <div className="flex justify-end w-full">
      <Link href={href} passHref scroll={true}>
        <a href={href} className="">
          <span className="inline-block text-neutral-lightest">goto <ChevronDoubleRightIcon className="inline-block w-5 h-5" /></span>
        </a>
      </Link>
    </div>
  );
}
