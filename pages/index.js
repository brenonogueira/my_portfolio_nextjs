import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import styles from "./styles/Home.module.css";
import {
  Avatar,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

export default function Home({ data, repos }) {
  console.log(data);
  console.log(repos);

  return (
    <Container maxWidth="lg">
      <section className={styles.container}>
        <Image
          src={data.avatar_url}
          className={styles.img}
          width="200"
          height="200"
          alt="Breno Nogueira Araújo"
        />
        <br />
        <div className={styles.bio}>
          <h1>{data.name}</h1>
          <span>{data.bio}</span> <br />
          <span>{data.location}</span>
        </div>
      </section>
      <main>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4 }} variant="h6" component="div">
            Projetos
          </Typography>
          <List className={styles.list}>
            {repos
              ? repos.map((repo) => {
                  return (
                    <ListItem key={repo.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <Link
                        style={{ textDecoration: "none",   textShadow:  '#CCC 1px 0 10px', color: 'chartreuse' }}
                        href={repo.html_url}
                      >
                        <ListItemText
                          primary={repo.name}
                          secondary={repo.language}
                        />
                      </Link>
                    </ListItem>
                  );
                })
              : null}
          </List>
        </Grid>
      </main>
    </Container>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/users/brenonogueira`);
  const data = await res.json();

  const res2 = await fetch(
    `https://api.github.com/users/brenonogueira/repos?per_page=60`
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
