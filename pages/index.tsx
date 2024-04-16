import type { NextPage } from "next";
import Head from "next/head";
import {
  FaTwitter,
  FaTwitch,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
  FaStrava,
  FaSteam,
} from "react-icons/fa";

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear();

  const logoClasses = "fill-current w-6 h-6 hover:text-yellow-500 my-2 mx-1";

  return (
    <div className="h-screen bg-gradient-to-b from-yellow-600 via-red-900 to-purple-900">
      <Head>
        <title>Tommi Alajoki</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 md:px-10 px-5 text-center h-full">
        <div className="text-gray-200 container mx-auto justify-center text-center space-y-5">
          <h1 className="text-5xl md:text-7xl font-bold">Tommi Alajoki</h1>
          <h2 className="text-l md:text-xl pb-5">Software Engineer</h2>
          <p className="leading-loose">
            I build stuff (mostly websites).
            <br />
            Professionally for{" "}
            <a
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cgi.com/en/">
              CGI
            </a>
            .<br />
            For enjoyment in my free time.
          </p>
          <p>Check out my socials below.</p>
          <div className="divide-y flex border justify-self-center mx-auto max-w-lg bg-white" />
          <div
            id="logos"
            className="flex flex-wrap items-center justify-center mx-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://steamcommunity.com/id/lyrete">
              <FaSteam className={logoClasses} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/lyrete">
              <FaGithub className={logoClasses} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/tommi-alajoki-561233113/">
              <FaLinkedinIn className={logoClasses} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/lyrete">
              <FaTwitter className={logoClasses} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitch.tv/lyrete">
              <FaTwitch className={logoClasses} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discordapp.com/users/111293089846423552/">
              <FaDiscord className={logoClasses} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.strava.com/athletes/8419929">
              <FaStrava className={logoClasses} />
            </a>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-0 sm:bottom-1 text-gray-400 w-full flex items-center justify-center mx-auto space-x-3">
        © {currentYear} {" | "} Tommi Alajoki
      </footer>
    </div>
  );
};

export default Home;
