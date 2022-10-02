import Link from "next/link"

/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
      question: 'Do you offer technical support?',
      answer:
        'Yes, the Stackflare Service Office, Technical Support, and Network Operation Center Stackflare are professional technical support, available 24 hours a day, 7 days a week. Our specialists guarantee fast and efficient help (maximum response time is 24 hours). We provide technical support in all aspects of the services offered. Technical Support and Network Operation Center Stackflare mean the security of your data non-stop.',
    },
    {
        question: 'How much does an additional IP address cost?',
        answer:
        "1 IP Address - $1/Mo, Subnet /26 - $50/Mo."
    },
      {
        question: 'Do all servers have the same 30TB transfer limit per month and can it be increased if necessary?',
        answer:
        "There is no transfer limit. 30,89TB is the maximum amount of data that can be transferred over a 100Mbps link within 30 days. In the case of 1Gb/s, it will be proportionally more."
    },
    // More questions...
  ]
  
  export default function FAQ() {
    return (
      <div id="FAQ" name="FAQ" className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-gray-500">
                Can’t find the answer you’re looking for? Reach out to our{' '}
                <Link href="/contact">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  customer support
                </a>
                </Link>
                {" "}team.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  