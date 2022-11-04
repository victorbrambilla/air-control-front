import { useState } from 'react'
import { ImSwitch } from 'react-icons/im'
import { AiFillLinkedin } from 'react-icons/ai'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [url, setUrl] = useState('')
  const turnOn = () => {
    if (!url) return alert('Digite uma URL')
    axios.post('/api/turnOn', { url })
  }
  const turnOff = () => {
    if (!url) return alert('Digite uma URL')
    axios.post('/api/turnOff', { url })
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button>
          <ImSwitch size={80} color={'green'} onClick={turnOn} />
        </button>
        <span className={styles.text}>Ligar</span>
        <br />
        <br />
        <button>
          <ImSwitch size={80} color={'red'} onClick={turnOff} />
        </button>
        <span className={styles.text}>Desligar</span>
        <input
          type="text"
          className={styles.input}
          placeholder={'Digite a url'}
          onChange={(e) => setUrl(e.target.value)}
        />
      </main>

      <div className={styles.footer}>
        <span className={styles.text}>Desenvolvido por: </span>
        <a
          href="https://www.linkedin.com/in/victor-brambilla-a36044201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={30} color={'#fff'} />
          <span className={styles.text}>Victor Brambilla</span>
        </a>
        <a
          href="https://www.linkedin.com/in/yasmin-almeida-b62699210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={30} color={'#fff'} />
          <span className={styles.text}>Yasmin Almeida</span>
        </a>
      </div>
    </div>
  )
}

export default Home
