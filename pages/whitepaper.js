import Head from "next/head";
import styled from "styled-components";

const Wrapper = styled.div`
  color: var(--light);

  width: 100%;
`;

const Whitepaper = () => {
  return (
    <>
      <Head>
        <title>S Y G | Whitepaper</title>
      </Head>
      <Wrapper>
        <h1>Whitepaper</h1>
      </Wrapper>
    </>
  );
};

export default Whitepaper;
