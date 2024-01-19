import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Hero from './layouts/Hero'
import Services from './layouts/Services'

function App() {
  return (
    <main className='max-w-[1280px] mx-auto'>
     <Header/>
     <Hero/>
     <Services/>
    <Footer/>
    </main>
  )
}

export default App
