import Head from "next/head";
import styled from "styled-components";

const Wrapper = styled.div`
  color: var(--black);
  height: 90vh;
  width: 960px;
  z-index: 1;
  background: var(--white);
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  align-items: center;
  padding: 1rem;
  p {
    margin: 1rem;
  }
`;

const Whitepaper = () => {
  return (
    <>
      <Head>
        <title>S Y G | Whitepaper</title>
      </Head>
      <Wrapper>
        <h1>Whitepaper</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos
          nisi libero asperiores repellat laboriosam accusamus ex aut unde!
          Porro praesentium recusandae sed reprehenderit! Aspernatur earum
          dignissimos natus autem rem.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <h2>Tittle1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <h2>tittle2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <h2>tittle3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <h2>Tittle xxx</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt corrupti libero, fugit tenetur aspernatur, illum harum ipsum,
          sequi neque cumque saepe dignissimos praesentium. Deserunt laborum
          optio porro doloremque vitae?
        </p>
      </Wrapper>
    </>
  );
};

export default Whitepaper;
