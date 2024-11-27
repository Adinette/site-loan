import React from 'react'


const links = [
    { name: 'Complétez le formulaire en ligne', href: '#' },
    { name: 'Recevez un e-mail de confirmation', href: '#' },
    { name: 'Fournissez les documents demandés par e-mail', href: '#' },
    { name: 'Signature électronique et transfert des fonds', href: '#' },
  ]
  const stats = [
    { name: 'Processus 100 % en ligne.', value: '12' },
    { name: 'Assistance rapide et efficace.', value: '300+' },
    { name: 'Sécurité des données garantie.', value: '40' },
    { name: 'Prestations de financement rapide.', value: '12' },]
  
function About() {
    return (
      <div id='about' className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-7xl">Comment ça marche</h2>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  export default About