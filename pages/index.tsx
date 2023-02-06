import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../src/Views/Home'
import Layout from '../src/Components/Layout'

const HomePage: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center">
    <Head>
      <title>NEXUS</title>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <Layout>
      <Home />
    </Layout>
  </div>
)

export default HomePage
