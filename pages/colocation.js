import { useEffect, useState } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'


const product = {
  name: 'Colocation',

  description:
    "Locating your hardware with us, you have excellent and constant service guaranteed. You can take care of server’s functions solely - data processing - while we will take care of professional and safe surroundings for your server. For safety reasons, only our specialists have direct access to the server. Transfer your IT infrastructure to Mevspace, our facilities, experience and knowledge are a guarantee of a complex service of your servers, while you can take care of developing your business.",
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
    <title>Colocation</title>
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
                    <p>Your resources in our server room.</p>
                  </div>
                </div>
              </div>
              <br></br>
              <p>Constant, comprehensive server service without the need to invest in preparing your own server room.</p>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">high capacity of the connection (100Mb/s to 10Gb/s) together with a reserve connection in case of a failure.</p>
            </div>
            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">quick reaction time in case of a failure - efficient server room service by experienced network administrators.</p>
            </div>
            <div className="mt-6 flex items-center">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">we provide optimal, safe conditions for servers - constant monitoring, emergency power supply, protected access to the server room.</p>
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
                <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                  <RadioGroup.Label className="block text-sm font-medium text-gray-700">Rack Unit</RadioGroup.Label>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        as="div"
                        key={size.name}
                        value={size}
                        className={({ active }) =>
                          classNames(
                            active ? 'ring-2 ring-indigo-500' : '',
                            'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                              {size.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                              {size.description}
                              <br></br>
                            2 Amps, 120V AC Power<br></br>
                            1 GigE Dedicated Uplink

                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border-indigo-500' : 'border-transparent',
                                'absolute -inset-px rounded-lg pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-4">
                  <span className="group inline-flex text-sm text-gray-500 hover:text-gray-700">What size should I buy?</span>
                  <QuestionMarkCircleIcon
                    className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
              </div>
              <div className="mt-10">
                <Link href="/contact">
                <button
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Get a Quote
                </button>
                </Link>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">SSAE 18 Certified</span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

    
