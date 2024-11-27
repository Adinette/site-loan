import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="relative isolate px-6 pt-4 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Obtenez votre prêt rapidement et en toute simplicité !</h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Des solutions de financement adaptées à vos besoins.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="/home" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Faire une demande maintenant</a>
                            <a href="/home" className="text-sm/6 font-semibold text-gray-900">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Contact/>
            <FAQ/>
            <Footer/>
        </div>
    )
}
export default Home