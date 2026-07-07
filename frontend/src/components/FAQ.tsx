import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Should I disclose my policy limits to the other party\'s attorney?',
    answer:
      'In many states, if your insurance company receives a demand to disclose your policy limits, it is required to contact you and get your permission. Disclosing limits may encourage the other party to present a reasonable settlement demand and reduce the need for full-scale litigation. However, some argue that withholding limits discourages frivolous claims. If you decide to disclose, you may also need to disclose whether you have an excess liability or umbrella policy. We recommend consulting with an attorney familiar with personal injury claims for your specific situation.',
  },
  {
    question: 'Does submitting an online claim form notify my insurance company?',
    answer:
      'No. Submission of our online forms notifies MPG Consulting Services of a new loss. It does NOT notify your insurance company directly. For urgent matters, please call our office or refer to your policy for instructions to report the claim directly to the insurance company.',
  },
  {
    question: 'What types of claims do you handle?',
    answer:
      'We handle claims across the full spectrum of policies and coverages, including commercial general liability, professional liability, management liability (D&O), employment practices liability, cyber security, financial institutions, first and third-party property, reinsurance, environmental, and auto/fleet claims. We have expertise in both primary and excess claims.',
  },
  {
    question: 'How do you help reduce the cost of claims?',
    answer:
      'We focus on risk management strategies and strategic claims analysis to mitigate future losses. Our goal is to help reduce the severity of your claims and, ultimately, reduce the impact and frequency of claims. We monitor reserves, review loss trends, and advocate for fair resolution to protect your bottom line.',
  },
  {
    question: 'What is third-party administration (TPA)?',
    answer:
      'Our TPA services are designed to ease the burden for insurance carriers that have more claims than they can efficiently handle on their own. We manage our clients\' claims systematically and with a focus on client satisfaction, taking a proactive, communicative, and professional approach from the moment a claim is reported.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="flex items-center gap-3 text-base font-semibold text-slate-900">
          <HelpCircle className="h-5 w-5 shrink-0 text-brand-500" />
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="pl-8 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Claims Questions, Answered
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Educational insights to help you navigate the claims process with confidence.
            </p>
          </div>

          <div className="mt-12">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
