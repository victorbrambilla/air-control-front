import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import { ImSwitch } from 'react-icons/im'
import { AiFillLinkedin } from 'react-icons/ai'



const Home: NextPage = () => {

  const turnOn = () => {
    fetch('/api/turnOn')
  }
  const turnOff = () => {
    fetch('/api/turnOff')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ImSwitch size={80} color={'green'} onClick={turnOn}/>
        <span className={styles.text} >Ligar</span>
        <br />
        <br />
        <ImSwitch size={80} color={'red'} onClick={turnOff}/>
        <span className={styles.text}>Desligar</span>
      </main>

      <div className={styles.footer}>
        <span className={styles.text}>Desenvolvido por: </span>
        <a
          href="https://www.linkedin.com/in/victor-brambilla-a36044201/"
          target="_blank"
          rel="noopener noreferrer"
        >
              <AiFillLinkedin size={30} color={'#fff'}/>
          <span className={styles.text}>Victor Brambilla</span>

        </a>


             <a
          href="https://www.linkedin.com/in/yasmin-almeida-b62699210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={30} color={'#fff'}/>
          <span className={styles.text}>Yasmin Almeida</span>

        </a>

      </div>
    </div>
  )
}

export default Home
