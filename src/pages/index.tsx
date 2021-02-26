import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Profile } from '../comp/profile'
import { ExperienceBar } from "../comp/experienceBar";
import { CompleteChangelles } from '../comp/compleChallenges';
import { CountDown } from '../comp/countDown';

import style from '../style/pages/home.module.css'
import { ChangellesBox } from '../comp/ChangellesBox';
import { CountDownProvider } from '../contexts/CountDownContexts';
import { ChallangeContextsProvider } from '../contexts/ChallangeContexts';

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExp, challangesComplete } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      challangeCompletes: Number(challangesComplete)
    }
  }
}


export default function Home(props) {
  return (
    <>
    <ChallangeContextsProvider level={props.level} currentExp={props.currentExp} challangeCompletes={props.challangeCompletes} >
      <Head>
        <title> App Changelles Nlw4 </title>
      </Head>
      <div className={style.container}>
        <ExperienceBar />

        <CountDownProvider>
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
        </CountDownProvider>
      </div>
    </ChallangeContextsProvider>
    </>
  )
}
