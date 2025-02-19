'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex items-center justify-between gap-5">
      <Link href="/" className="flex items-center gap-1 text-light-100">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />

        <span className="font-nunito-sans font-medium leading-none tracking-wide">
          Lifestyle <br /> Hacks
        </span>
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/hacks"
            className={cn(
              'cursor-pointer text-base capitalize',
              pathname === '/hacks' ? 'text-light-200' : 'text-light-100',
            )}
          >
            Hacks
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
