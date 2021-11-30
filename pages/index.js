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
import {
  FaTwitter,
  FaSpotify,
  FaInstagram,
  FaLastfm,
  FaGithub,
  FaSteam,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

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
        <Grid  xs={12} md={12} className={styles.list_container}>
          <ul className={styles.list_social}>
            <li>
              <a
                href="https://twitter.com/brenongr"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter  size={60} color="#1DA1F2" />
              </a>
            
            </li>
            <li>
              <a
                href="https://br.linkedin.com/in/brenongr"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={60} color="#1DA1F2" />
              </a>
            
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/12148153276?si=Znl6HFdfTmiQALQgXQPC3Q&nd=1"
                target="_blank"
                rel="noreferrer"
              >
                <FaSpotify size={60} color="#1DB954" />
              </a>
            
            </li>
            <li>
              <a
                href="https://instagram.com/brenongr"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={60} color="#E1306C" />
              </a>
             
            </li>
            <li>
              <a
                href=" https://www.last.fm/pt/user/mrbrenow"
                target="_blank"
                rel="noreferrer"
              >
                <FaLastfm size={60} color="#FF0000" />
              </a>
            
            </li>
            <li>
              <a
                href=" https://br.pinterest.com/brenongr/"
                target="_blank"
                rel="noreferrer"
              >
                <FaPinterest size={60} color="#FF0000" />
              </a>
            
            </li>
            <li>
              <a
                href="https://github.com/brenonogueira"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub  size={60} color="#6e5494" />
                
              </a>
            
            </li>
            {/* <li>
              <FaSteam size={50} color="#00adee" />{" "}
            </li> */}
          </ul>
        </Grid>

        {/* <Grid item xs={12} md={12}>
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
                        style={{
                          textDecoration: "none",
                          textShadow: "#CCC 1px 0 10px",
                          color: "chartreuse",
                        }}
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
        </Grid> */}
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
