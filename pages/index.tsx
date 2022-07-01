import type { NextPage } from 'next';
import Head from 'next/head';
import { FaTwitter, FaTwitch, FaLinkedinIn, FaGithub, FaDiscord, FaStrava, FaSteam } from 'react-icons/fa';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className="h-screen bg-gradient-to-r from-red-900 via-purple-900 to-blue-900">
      <Head>
        <title>Tommi Alajoki</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-full">
        <div className="text-gray-200 container mx-auto justify-center text-center space-y-6">
          <h1 className="text-3xl md:text-7xl font-bold">Tommi Alajoki</h1>          
          <h2 className="text-xl md:text-l pb-5">Software Developer</h2>
          <p className="leading-loose">I build stuff (mostly websites).<br />
            Professionally for <a className="text-blue-500" href="https://nordhealth.com/">Nordhealth</a>.<br />
            For enjoyment in my free time.</p>
            <p>Check out my socials below.
            </p>      
          <div className="divide-y flex border justify-self-center mx-auto max-w-lg bg-white" />
          <div id="logos" className="flex items-center justify-center mx-auto space-x-3 pt-1">
            <a target="_blank" rel="noopener noreferrer" href="https://steamcommunity.com/id/lyrete">
              <FaSteam className="fill-current w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/lyrete">
              <FaGithub className="fill-current w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tommi-alajoki-561233113/">
              <FaLinkedinIn className="fill-current w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lyrete">
              <FaTwitter className="fill-current w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/lyrete">
              <FaTwitch className="fill-current w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://discordapp.com/users/111293089846423552/">
              <FaDiscord className="fill-current w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.strava.com/athletes/8419929">
              <FaStrava className="fill-current w-6 h-6 hover:text-yellow-500"/>
            </a>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-2 text-gray-400 w-full flex items-center justify-center mx-auto space-x-3">        
          © {currentYear} {" | "} Tommi Alajoki        
      </footer>

      </div>
  )
}

export default Home



