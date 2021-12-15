import Head from "next/head";
import styled from "styled-components";
import Template from "../components/Template";

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
      <Template>
        <Wrapper>
          <h1>Whitepaper</h1>
        </Wrapper>
      </Template>
    </>
  );
};

export default Whitepaper;
