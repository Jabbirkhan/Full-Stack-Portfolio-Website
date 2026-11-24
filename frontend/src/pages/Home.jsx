import Hero from './../components/Hero';
import LatestProject from "./../components/LatestProject";
import CoomingSoon from "./../components/CoomingSoon";
import Skills from "./../components/Skills";
import Services from "./../components/Services";
import Contact from "./../components/Contact";


const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        <Hero />
        <LatestProject />
        <CoomingSoon />
        <Skills />
        <Services />
        <Contact />
      </main>
    </div>
  )
}

export default Home
