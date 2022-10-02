import { useEffect, useState } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'


const product = {
  name: 'Backup Space',

  description: `Backup Space is a independent service in which you receive a secure space for any data: databases, files, documents, etc. Mevspace manages the space and ensures its security.

  Our backup is implemented on a distributed infrastructure. Choose the suitable space for you: 100, 200, 300 GB, or even 16 TB. Connect using FTP/SFTP protocol and protect yourself today. It is up to you to implement the backup tool to suit your requirements, or you can also do it manually`,

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

export default function Colocation() {

  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  useEffect(() => setSelectedSize(product.sizes[0]), [])

  return (
    <>
    <Head>
    <title>Backup Space</title>
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
                    <p>Ensure the security of your data.</p>
                  </div>
                </div>
              </div>
              <br></br>
              <p>Order space for backup for your server.</p>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">You use Backup Space - you implement your own method of backup, you can also use it manually. You can check how much space you used in the Panel.</p>
            </div>
            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">If you are running out of space - you can always buy more on the dashboard.</p>
            </div>
            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">Snapshot captures data at a given moment, providing access to previous versions. Backup is a copy that allows for complete recovery in case of damage and failure.</p>
            </div>
          </section>
        </div>

        {/* Product image */}


        {/* Product form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="sm:flex sm:justify-between">
                {/* Size selector */}
              </div>

              <div className="mt-10">
                <Link href="/contact">
                <button
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Get Quote
                </button>
                </Link>
              </div>
              <div className="mt-6 text-center">

              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}

    
