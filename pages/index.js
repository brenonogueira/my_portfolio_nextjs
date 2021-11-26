import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import styles from "./styles/Home.module.css";

export default function Home({ data, repos }) {
  console.log(data);
  console.log(repos);

  return (
    <Container maxWidth="sm">
      <section className={styles.container}>
        <Image
          src={data.avatar_url}
          className={styles.img}
          width="200"
          height="200"
          alt="Breno Nogueira Araújo"
        />
        <br />
        <div>
          <h1>{data.name}</h1>
          <span>{data.bio}</span> <br />
          <span>{data.location}</span>
        </div>
      </section>
      <main>
        <h1>Projetos</h1>
        <ul>
          {repos
            ? repos.map((repo) => {
                return (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </li>
                );
              })
            : null}
        </ul>
      </main>
    </Container>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/users/brenonogueira`);
  const data = await res.json();

  const res2 = await fetch(
    `https://api.github.com/users/brenonogueira/repos?per_page=100`
  );
  const repos = await res2.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, repos }, // will be passed to the page component as props
  };
}
