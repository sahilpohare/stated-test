import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useInput from '../hooks/useInput';
import { useState } from 'react';
import GenderService from '../services/gender_service';

export default function Home() {

  const [name, handleChangeName] = useInput(""); 
  const [gender, setGender] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let {
      gender
    } = await GenderService.getGender(name);
    console.log(gender)
    setGender(gender);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={onSubmit} > 
          <input onChange={handleChangeName} type="text" className='text-center text-lg' placeholder="Enter your name" />
          <input  className="btn btn-blue" type="submit" value="Submit"/>
        </form>

        <h1 className='text-lg'>
          Gender : {gender}
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
