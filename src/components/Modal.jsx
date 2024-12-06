'use client'
import { Dialog, DialogBackdrop, DialogPanel, Field, Switch } from '@headlessui/react';
import { useState } from 'react';

function Modal({ isModalOpen, setIsModalOpen }) {
    const [agreed, setAgreed] = useState(false)

    return (
        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="">
                                <form action="" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                                                Nom complet
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="first-name"
                                                    name="first-name"
                                                    type="text"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                                E-mail
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="last-name"
                                                    name="last-name"
                                                    type="text"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                                                Numéro de téléphone
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="phone-number"
                                                    name="phone-number"
                                                    type="tel"
                                                    autoComplete="tel"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                                Adresse complète
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <label htmlFor="country" className="block text-sm/6 font-semibold text-gray-900">
                                                Type de prêt souhaité
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            >
                                                <option>Prêt personnel.</option>
                                                <option>Prêt immobilier</option>
                                                <option>Prêt pour véhicule</option>
                                                <option>Prêt étudiant</option>
                                                <option>Prêt professionnel</option>
                                                <option>Prêt pour travaux ou rénovation.</option>
                                            </select>
                                            <i
                                                aria-hidden="true"
                                                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                            ></i>
                                        </div>
                                        <div className="">
                                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                                Autre
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                                Montant souhaité
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="number"
                                                    autoComplete="email"
                                                    placeholder='500 € - 100 000 €'
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <label htmlFor="country" className="block text-sm/6 font-semibold text-gray-900">
                                                Durée du remboursement
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            >
                                                <option>6 mois</option>
                                                <option>12 mois</option>
                                                <option>24 mois</option>
                                                <option>36 mois</option>
                                            </select>
                                            <i
                                                aria-hidden="true"
                                                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                            ></i>
                                        </div>
                                        <div className="">
                                            <label htmlFor="country" className="block text-sm/6 font-semibold text-gray-900">
                                                But du prêt
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            >
                                                <option>Achat immobilier</option>
                                                <option>Achat de véhicule</option>
                                                <option>Travaux ou rénovation</option>
                                                <option>Études ou formation</option>
                                                <option>Consolidation de dettes</option>
                                                <option>Dépenses médicale</option>
                                                <option>Création ou expansion d’entreprise</option>
                                                <option>Voyage ou loisirs</option>
                                            </select>
                                            <i
                                                aria-hidden="true"
                                                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                            ></i>
                                        </div>
                                        <div className="">
                                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                                Autre
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                                Revenu mensuel net
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="number"
                                                    autoComplete="email"
                                                    placeholder='500 € - 100 000 €'
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                                                Pièces jointes
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="company"
                                                    name="company"
                                                    type="text"
                                                    autoComplete="organization"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <Field className="flex gap-x-4 sm:col-span-2">
                                            <div className="flex h-6 items-center">
                                                {/* <Switch
                                                    checked={agreed}
                                                    onChange={setAgreed}
                                                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                                                > */}
                                                    <span className="sr-only">Je confirme que les informations fournies sont exactes. J'accepte les conditions générales et autorise le traitement de mes données personnelles</span>
                                                    <span
                                                        aria-hidden="true"
                                                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                                    />
                                                {/* </Switch> */}
                                            </div>
                                        </Field>
                                    </div>
                                    <div className="mt-10">
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Envoyer ma demande
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setIsModalOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
export default Modal;