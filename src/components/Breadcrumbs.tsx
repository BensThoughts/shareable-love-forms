import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

// import AnimatedLink from './AnimatedLink';
import NextAnimatedLink from './NextAnimatedLink';

const convertBreadcrumb = (crumb: string) => {
  const words = crumb.replace(/-/g, ' ').split(' ');

  return words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(' ');
};

type BreadcrumbsType = { breadcrumb: string, href: string }[];

export default function Breadcrumbs({className, ...rest}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsType>([{breadcrumb: '', href: '/'}]);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/')};
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  // if (!breadcrumbs) {
  //   return null;
  // }

  return (
    <div aria-label="breadcrumbs" className={`flex ${className ? className : ''}`} {...rest}>
      <div className="">
        <Link href="/" scroll={true} passHref>
          <NextAnimatedLink href="/">Home</NextAnimatedLink>
        </Link>
        &nbsp;&nbsp;/&nbsp;&nbsp;
      </div>
      {breadcrumbs.map((breadcrumb, i) => {
        if (breadcrumb.href != '/') {
          return (
            <div key={breadcrumb.href} className="">
              <NextAnimatedLink href={breadcrumb.href}>
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </NextAnimatedLink>
              {/* <Link href={breadcrumb.href} scroll={true} passHref>
                <AnimatedLink href={breadcrumb.href}>
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </AnimatedLink>
              </Link> */}
              &nbsp;&nbsp;{breadcrumb.breadcrumb === '' ? '' : '/'}&nbsp;&nbsp;
            </div>
          );
        } else {
          return (
            <span key={breadcrumb.href} className="hidden"></span>
          );
        }
      })}
    </div>
  );
}
