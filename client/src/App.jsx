import Contact from './layouts/Contact'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Hero from './layouts/Hero'
import Services from './layouts/Services'

function App() {
  return (
    <>
      <main className='max-w-[1280px] mx-auto px-3'>
     <Header/>
     <Hero/>
     <Services/>
    <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App
