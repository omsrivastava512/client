import { useEffect, useState } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'


const product = {
  name: 'Servers administration',

  description:
    "This solution guarantees the highest quality of services - our administrators are qualified professionals specializing in comprehensive server support and building IT infrastructure. Using the services of our administrators means saving time and cost of maintaining, operating and managing the infrastructure in the company.",
  breadcrumbs: [
    { id: 1, name: 'Additional Services', href: '#' },
    { id: 2, name: 'Colocation', href: '#' },
  ],
  sizes: [
    { name: '1U Rack Space', description: 'Miami, FL or Warsaw, PL' },
    { name: '42U Full Rack', description: 'Miami, FL or Warsaw, PL' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ServerAdministration() {

  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  useEffect(() => setSelectedSize(product.sizes[0]), [])

  return (
    <>
    <Head>
    <title>Server Administration</title>
    </Head>
    <Header/>
    <div className="bg-white">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Product details */}
        <div>

          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">

            <div className="flex items-center">

              <div>
                <div className="flex items-center">
                    <p>We will take care of your IT infrastructure</p>
                  </div>
                </div>
              </div>
              <br></br>
              <p>Servers administration allows you to transfer some of the tasks performed by your employees to our company.</p>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">Technical advice about development and strategy of system management</p>
            </div>
            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">Analysis of the state of a system and software on request	</p>
            </div>
            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">Help with server and software configuration</p>
            </div>
          </section>
        </div>

        {/* Product image */}


        {/* Product form */}
        
      </div>
    </div>
    </>
  )
}

    
