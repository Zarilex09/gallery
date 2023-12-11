import { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

// NAVBAR
const Main = (props: IMainProps) => (
  <div className="w-full px-1 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      {/* <div className="border-b border-gray-300">  */}
      <div className="pt-16 pb-8">
        <Link href="/">
          <a className="text-3xl font-bold text-gray-900 hover:text-gray-700">
            {AppConfig.title}
            {/* <div className="text-xl">{AppConfig.description}</div> */}
          </a>
        </Link>
      </div>

      {/* Navbar Div below */}
      <div>
        <ul className="flex flex-wrap text-lg">
          <li className="mr-10 text-center">
            <Link href="/">
              <a className="border-none text-center text-gray-700 hover:text-gray-900">
                The Photos
              </a>
            </Link>
          </li>
          <li className="mr-10 text-center">
            <Link href="/cinematography">
              <a className="border-none text-center text-gray-700 hover:text-gray-900">
                The Videos
              </a>
            </Link>
          </li>
          <li className="mr-10 text-right">
            <Link href="/about">
              <a className="border-none text-right text-gray-700 hover:text-gray-900">
                The Relationship
              </a>
            </Link>
          </li>
          {/* <li className="mr-10 text-right">
            <a href="https://store.ronnycoste.com">
              <a className="border-none text-right text-gray-700 hover:text-gray-900">
                The Store
              </a>
            </a>
          </li> */}
        </ul>
      </div>
      {/* ^^^^ NavBar Div ^^^^
            </div> */}

      {/* Body of the App */}

      <div className=" inset-full">{props.children}</div>

      {/* FOOTER  */}
      <div className=" border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.<br></br>{' '}
        Created with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by Jiayong Lin
      </div>
    </div>
  </div>
);

export { Main };
