import type { NextPage } from 'next';
import Head from 'next/head';
import { FaTwitter, FaTwitch, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className="select-none font-sans absolute inset-0 justify-center min-h-screen bg-gray-800 text-white">
      <div className="h-screen py-2 flex flex-col justify-between">
      <Head>
        <title>@lyrete | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="container mx-auto justify-center text-center space-y-4">
          <h1 className="text-3xl md:text-7xl font-bold">Tommi Alajoki</h1>          
          <h2 className="text-xl md:text-l">Web Developer</h2>       
          <div className="divide-y flex border justify-self-center mx-auto max-w-lg bg-white" />
          <div id="logos" className="flex items-center justify-center mx-auto space-x-3">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/lyrete">
              <FaGithub className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tommi-alajoki-561233113/">
              <FaLinkedinIn className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lyrete">
              <FaTwitter className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/lyrete">
              <FaTwitch className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://discordapp.com/users/111293089846423552/">
              <FaDiscord className="fill-current text-gray-200 w-6 h-6 hover:text-yellow-500"/>
            </a>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center mx-auto text-gray-400">
        <div className="flex items-center justify-center mx-auto space-x-3">
          <div className="self-end">© {currentYear}</div>
          <div>|</div>
          <div className="self-start">Tommi Alajoki</div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Home



