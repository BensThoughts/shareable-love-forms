import Link from 'next/link';
import {ChevronDoubleRightIcon} from '@heroicons/react/solid';

export default function CardFooter({
  href,
}: {
  href: string,
}) {
  return (
    <div className="flex w-full justify-end">
      <Link href={href} passHref scroll={true}>
        <a href={href} className="">
          <span className="inline-block">goto <ChevronDoubleRightIcon className="h-5 w-5 inline-block" /></span>
        </a>
      </Link>
    </div>
  );
}
