import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from './contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Afsal | Portfolio</title>
        <meta name="description" content="I’m a Full Stack Developer with proficient in both front-end and back-end development, with experience in creating dynamic and scalable web applications." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      
    </div>
  )
}
