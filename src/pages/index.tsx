import React from 'react'
import Head from 'next/head'

import {Profile} from '../comp/profile'
import { ExperienceBar } from "../comp/experienceBar";
import { CompleteChangelles } from '../comp/compleChallenges';
import { CountDown } from '../comp/countDown';

import style from '../style/pages/home.module.css'
import { ChangellesBox } from '../comp/ChangellesBox';


export default function Home() {
  return (
      <>
      <Head>
        <title> App Changelles Nlw4 </title>
      </Head>
      <div className={style.container}>
        <ExperienceBar />
        <section>
          <div>
            <Profile />
            <CompleteChangelles />
            <CountDown />
          </div>
          <div>
            <ChangellesBox />
          </div>
        </section>
      </div>
    </>
  )
}
