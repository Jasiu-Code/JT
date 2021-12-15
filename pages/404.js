import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Wrapper = styled.div`
  text-align: center;
  a {
    color: blue;
    text-decoration: underline;
  }
`;

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Wrong neighborhood</title>
      </Head>
      <Wrapper className="not-found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </Wrapper>
    </>
  );
};

export default NotFound;
