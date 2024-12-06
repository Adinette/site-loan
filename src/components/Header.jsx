import React, { useState } from 'react';
import Modal from './Modal';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(isModalOpen)
    return (
        <div>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/home" className="-m-1.5 p-1.5">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span></a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only"></span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#about" className="about text-sm/6 font-semibold text-gray-900">Comment ça marche</a>
                        <a href="#contact" className="text-sm/6 font-semibold text-gray-900">Contact</a>
                        <a href="#faq" className="text-sm/6 font-semibold text-gray-900">FAQ</a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
                        >
                            Faire une demande pret</button>
                    </div>
                </nav>
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#about" className="about text-sm/6 font-semibold text-gray-900">Comment ça marche</a>
                                    <a href="#contact" className="text-sm/6 font-semibold text-gray-900">Contact</a>
                                    <a href="#faq" className="text-sm/6 font-semibold text-gray-900">FAQ</a>
                                </div>
                                <div className="py-6">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
                                    >
                                        Faire une demande pret</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
        </div>
    )
}
export default Header