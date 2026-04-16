// ============================================================
// CallFirst Client Template — Privacy Policy Page
// ============================================================

import { Link } from 'react-router-dom'
import { CLIENT } from '@/data/clientConfig'
import { buildStructuredData, getBreadcrumbSchema } from '@/utils/seo'
import SeoHead from '@/components/common/SeoHead'
import type { SeoPageData } from '@/types'

const BASE_URL = 'https://' + CLIENT.domain

export default function PrivacyPage(): JSX.Element {
  const page: SeoPageData = {
    title: 'Privacy Policy | ' + CLIENT.businessName,
    description: 'Privacy policy for ' + CLIENT.businessName + '. How we collect, use, and protect your personal information.',
    canonical: BASE_URL + '/privacy',
    ogImage: BASE_URL + '/og-image.jpg',
    type: 'website',
    keywords: [],
  }

  const structuredData = buildStructuredData(page, [
    getBreadcrumbSchema([
      { name: 'Home', url: BASE_URL },
      { name: 'Privacy Policy', url: page.canonical },
    ]),
  ])

  return (
    <>
      <SeoHead page={page} structuredData={structuredData} />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-slate-600 no-underline text-slate-400">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 md:py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-[clamp(28px,5vw,44px)] leading-[1.1] text-slate-800 mb-8">
            Privacy Policy
          </h1>

          <div className="text-[15px] text-slate-600 leading-[1.85] space-y-5">
            <p className="text-sm text-slate-400">
              {'Last updated: ' + new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">Who We Are</h2>
            <p>
              {CLIENT.businessName + ' is a roofing contractor serving ' + CLIENT.area + ' and ' + CLIENT.region + '. This privacy policy explains how we collect, use, and protect your personal information when you use our website (' + CLIENT.domain + ') or contact us for a quote.'}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">What We Collect</h2>
            <p>
              {'When you use our website chat or contact us, we may collect your name, telephone number, email address, property address, and details about the roofing work you need. We collect this information so we can provide you with a quote and arrange the work.'}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to your enquiry and provide a quote</li>
              <li>Arrange and carry out roofing work</li>
              <li>Send you a follow-up message after your enquiry</li>
              <li>Request a review after completed work</li>
              <li>Comply with legal and insurance requirements</li>
            </ul>
            <p>
              {'We will never sell, rent, or share your personal information with third parties for marketing purposes.'}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">AI Chat</h2>
            <p>
              {'Our website uses an AI-powered chat assistant to help you get a quick quote. The conversation is processed by our systems to understand your roofing needs and provide an estimate. Your conversation and contact details are stored securely so we can follow up with you. The chat is not monitored in real time by a person.'}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">SMS and WhatsApp Messages</h2>
            <p>
              {'When you provide your phone number, we may send you a confirmation message to let you know we have received your enquiry. We may also send a follow-up message if we have not been able to reach you, and a review request after completed work. You can opt out of messages at any time by replying STOP.'}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">How We Store Your Data</h2>
            <p>
              {'Your data is stored securely on encrypted servers. We retain your contact details and job information for up to 6 years to comply with HMRC and insurance requirements. You can request deletion of your data at any time by contacting us.'}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">Your Rights</h2>
            <p>
              {'Under UK GDPR, you have the right to access, correct, or delete your personal data. You also have the right to object to processing and to data portability. To exercise any of these rights, contact us using the details below.'}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">Cookies</h2>
            <p>
              {'Our website uses essential cookies only to ensure the site functions correctly. We do not use tracking cookies, analytics cookies, or advertising cookies.'}
            </p>

            <h2 className="font-heading text-2xl text-slate-800 !mt-10 mb-4">Contact</h2>
            <p>
              {'If you have any questions about this privacy policy or want to exercise your data rights, contact us at:'}
            </p>
            <p>
              {CLIENT.businessName}<br />
              {'Phone: ' + CLIENT.phone}<br />
              {'Email: info@' + CLIENT.domain}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
