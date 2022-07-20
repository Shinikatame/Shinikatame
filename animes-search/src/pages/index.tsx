import type { NextPage } from 'next'

import Search from '../components/Search'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <section id='root'>
      <section>
        <Search />
        <Footer />
      </section>
    </section>
  )
}

export default Home
