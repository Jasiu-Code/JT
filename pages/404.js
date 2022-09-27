import styled from 'styled-components';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MainWrapper, NotFoundWrapper } from '../components/Styles';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Wrong addres</title>
      </Head>
      <MainWrapper className='not-found'>
        <NotFoundWrapper>
          <h1>Ooooops...</h1>
          <h2>That page cannot be found.</h2>
          <p>
            Go back to the{' '}
            <Link href='/'>
              <a>Homepage</a>
            </Link>
          </p>
        </NotFoundWrapper>
      </MainWrapper>
    </>
  );
};

export default NotFound;
