import Image from 'next/image';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex gap-2 items-center">
            <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />

            <h1 className="font-nunito-sans font-medium leading-none tracking-wide">
              Lifestyle <br /> Hacks
            </h1>
          </div>

          <div>{children}</div>
        </div>
      </section>

      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.jpg"
          alt="auth illustration"
          height={1000}
          width={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default Layout;
