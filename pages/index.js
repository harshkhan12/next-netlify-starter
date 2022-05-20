import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
         <a href="https://abrasivegrit.in/"> Copper slag </a> grit manufacturer, which is created while pyrometallurgical creation of copper from copper metals contains materials like iron, alumina, calcium oxide, silica, and so on For each huge load of metal creation about 2.2 huge loads of slag is produced. Unloading or removal of such immense measures of slag causes ecological and space issues. During the earlier twenty years, endeavors have been made by a few examiners and copper-delivering units everywhere in the world to investigate the conceivable usage of copper slag grit. The agreeable physicomechanical qualities of copper slag can be used to make the items like concrete, fill, weight, abrasive, total, material granules, glass, tiles, and so on separated from recuperating the important metals by different extractive metallurgical heading
        </p>
      </main>

      <Footer />
    </div>
  )
}
