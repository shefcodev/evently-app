'use client';

import Link from 'next/link';
import { headerLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map(({ label, route }, index) => {
        const isActive = pathname === route;

        return (
          <li key={index}>
            <Link
              href={route}
              className={`${
                isActive && 'text-primary-500'
              } flex-center p-medium-16 whitespace-nowrap`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
