"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronDown } from "lucide-react"

export default function ServicesSection() {
  const [isCoreAccountingOpen, setIsCoreAccountingOpen] = useState(false)
  const [isStrategicAdvisoryOpen, setIsStrategicAdvisoryOpen] = useState(false)
  const [isComplianceOpen, setIsComplianceOpen] = useState(false)

  const [faqOpen, setFaqOpen] = useState({
    faq1: true, 
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
    faq7: false,
    faq8: false,
  })

  const toggleFaq = (faqKey: string) => {
    setFaqOpen((prev) => ({
      ...prev,
      [faqKey as keyof typeof prev]: !prev[faqKey as keyof typeof prev],
    }))
  }

  return (
    <>
      {/* Our Core Services Section */}
      <section id="services" className="px-2 sm:px-8 py-16" style={{ backgroundColor: "#D6D6FF", width: "100%" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-slate-900 text-2xl font-bold mb-4 text-center"
            style={{ fontFamily: "Poppins", fontWeight: 700 }}
          >
            Our Core Services
          </h2>
          <p
            className="text-center mb-12 text-pretty"
            style={{
              color: "#1e293b",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            Reliable Accounting, Tax, and Advisory Services for Lasting Success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Core Accounting Service */}
            <div className="mb-0 rounded-xl shadow p-4 flex flex-col justify-between" style={{ backgroundColor: "#D6D6FF" }}>
              <img src="/11.png" alt="Core Accounting Service" className="w-full h-48 object-cover rounded-xl mb-6" />
              <div className="mb-6">
                <h3
                  className="text-center font-bold mb-2"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#008080", 
                  }}
                >
                  Core Accounting
                </h3>
                <p
                  className="text-center font-normal"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px", 
                    lineHeight: "22px",
                    color:"#000000"

                  }}
                >
                  Reliable financial management to keep your business organized and compliant
                </p>
              </div>
              <Button
                variant="outline"
                className="border-2"
                style={{
                  borderColor: "#003D3D",
                  color: "#003D3D",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  backgroundColor: "#D6D6FF",
                  width: "100%",
                  borderRadius: "0.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                }}
                onClick={() => setIsCoreAccountingOpen(true)}
              >
                Read More
              </Button>
            </div>

            {/* Strategic Advisory Service */}
            <div className="mb-0 rounded-xl shadow p-4 flex flex-col justify-between" style={{ backgroundColor: "#D6D6FF" }}>
              <img src="/12.png" alt="Strategic Advisory Service" className="w-full h-48 object-cover rounded-xl mb-6" />
              <div className="mb-6">
                <h3
                  className="text-center font-bold mb-2"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#008080", 
                  }}
                >
                  Strategic Advisory
                </h3>
                <p
                  className="text-center font-normal"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px", 
                    lineHeight: "22px",
                    color: "#000000"
                  }}
                >
                  Expert guidance to help your business grow and succeed
                </p>
              </div>
              <Button
                variant="outline"
                className="border-2"
                style={{
                  borderColor: "#003D3D",
                  color: "#003D3D",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  backgroundColor: "#D6D6FF",
                  width: "100%",
                  borderRadius: "0.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                }}
                onClick={() => setIsStrategicAdvisoryOpen(true)}
              >
                Read More
              </Button>
            </div>

            {/* Compliance & Assurance Service */}
            <div className="mb-0 rounded-xl shadow p-4 flex flex-col justify-between" style={{ backgroundColor: "#D6D6FF" }}>
              <img
                src="/13.png"
                alt="Compliance & Assurance Service"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="mb-6">
                <h3
                  className="text-center font-bold mb-2"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "26px",
                    color:"#008080",  
                  }}
                >
                  Compliance & Assurance
                </h3>
                <p
                  className="text-center font-normal"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px", 
                    lineHeight: "22px",
                    
                  }}
                >
                  Protect your business with expert compliance and risk management
                </p>
              </div>
              <Button
                variant="outline"
                className="border-2"
                style={{
                  borderColor: "#003D3D",
                  color: "#003D3D",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  backgroundColor: "#D6D6FF",
                  width: "100%",
                  borderRadius: "0.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                }}
                onClick={() => setIsComplianceOpen(true)}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Section for Core Accounting */}
      {isCoreAccountingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "#D6D6FF" }}>
          <div
            className="w-full h-full overflow-y-auto p-0 relative"
            style={{ backgroundColor: "#D6D6FF", borderRadius: 0, boxShadow: "none", maxWidth: "none", maxHeight: "none" }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsCoreAccountingOpen(false)}
              aria-label="Cancel"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-2xl mx-auto pt-20 pb-12 px-6">
              <h3 className="text-slate-800 text-2xl font-bold mb-6">Core Accounting</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Reliable financial management to keep your business running smoothly.
              </p>
              {/* Accounting & Bookkeeping */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/14.png" alt="Accounting & Bookkeeping" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Accounting & Bookkeeping</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We keep your financial records accurate, organized, and up-to-date. Our team always knows where your
                  business stands. Comprehensive bookkeeping, financial statement preparation, and bank reconciliation
                  services.
                </p>
              </div>
              {/* Payroll Management */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/15.png" alt="Payroll Management" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Payroll Management</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We ensure your payroll is processed accurately, on time, and in full compliance with all regulatory
                  requirements. From salary calculations to tax deductions, we handle the details, so you can focus on
                  growing your business.
                </p>
              </div>
              {/* Budgeting & Forecasting */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/16.png" alt="Budgeting & Forecasting" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Budgeting & Forecasting</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We help you create realistic budgets and accurate financial forecasts that align with your business
                  goals. By analyzing trends and market conditions, we provide insights that help you make informed
                  decisions, manage cash flow, and keep your business on track for sustainable growth.
                </p>
              </div>
              {/* Cash Flow Management */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/17.png" alt="Cash Flow Management" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Cash Flow Management</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We help you monitor, analyze, and manage your cash flow to ensure your business has the liquidity it
                  needs for day-to-day operations and long-term investments. By identifying patterns and anticipating
                  gaps, we optimize inflows and outflows so you maintain stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pop-up Section for Strategic Advisory */}
      {isStrategicAdvisoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "#D6D6FF" }}>
          <div
            className="w-full h-full overflow-y-auto p-0 relative"
            style={{ backgroundColor: "#D6D6FF", borderRadius: 0, boxShadow: "none", maxWidth: "none", maxHeight: "none" }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsStrategicAdvisoryOpen(false)}
              aria-label="Cancel"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-2xl mx-auto pt-20 pb-12 px-6">
              <h3 className="text-slate-800 text-2xl font-bold mb-6">Strategic Advisory</h3>
              {/* Virtual CFO Services */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/31.png" alt="Virtual CFO Services" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Virtual CFO Services</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Get on-demand access to seasoned financial leadership without the cost of a full-time executive. We
                  provide budgeting, forecasting, financial strategy, and performance monitoring to guide your business
                  toward sustainable growth.
                </p>
              </div>
              {/* Financial Advisory */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/32.png" alt="Financial Advisory" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Financial Advisory</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Comprehensive financial insights to improve profitability, manage risks, and enhance long-term business
                  value. We help you make smarter financial decisions backed by data and market expertise.
                </p>
              </div>

              {/* Business Valuation */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/33.png" alt="Business Valuation" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Business Valuation</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Accurate and reliable valuations for mergers, acquisitions, fundraising, succession planning, and
                  strategic decision-making. We apply globally recognized methods tailored to the Nigerian market context.
                </p>
              </div>

              {/* Corporate Structuring & Advisory */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/34.png" alt="Corporate Structuring" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Corporate Structuring & Advisory</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Restructure or optimize your business for tax efficiency, operational effectiveness, and future
                  scalability. We advise on compliance, ownership structures, and regulatory requirements.
                </p>
              </div>

              {/* In-House Training */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/35.png" alt="In-House Training" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">In-House Training</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Build a stronger finance team with customized training in accounting, tax compliance, financial
                  reporting, and business analysis-tailored to your industry and growth stage.
                </p>
              </div>

              {/* Recruitment & Talent Solutions */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/36.png" alt="Recruitment Solutions" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Recruitment & Talent Solutions</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Hire and retain the right finance professionals for your business. We support you with targeted
                  recruitment and onboarding solutions.
                </p>
              </div>

              {/* Business Performance Analysis */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/37.png" alt="Performance Analysis" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Business Performance Analysis</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Data-driven performance reviews to identify strengths, inefficiencies, and opportunities for
                  improvement, helping you achieve operational and financial excellence.
                </p>
              </div>

              {/* Investment Evaluation */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/38.png" alt="Investment Evaluation" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Investment Evaluation</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Independent assessment of potential investments to guide decision-making and ensure maximum returns
                  while minimizing risks.
                </p>
              </div>

              {/* Loan & Financing Advisory */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/39.png" alt="Financing Advisory" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Loan & Financing Advisory</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Expert guidance in accessing financing, preparing bankable proposals, negotiating with lenders, and
                  structuring facilities that align with your business goals.
                </p>
              </div>

              {/* Expansion & Market Entry Strategies */}
              <div className="mb-8 flex flex-col gap-4">
                <h4 className="text-slate-800 text-base font-bold mb-2">Expansion & Market Entry Strategies</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Practical strategies for entering new markets -locally or internationally. We analyze opportunities,
                  assess risks, and provide financial roadmaps to support successful expansion.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      )}

      {/* Pop-up Section for Compliance & Assurance */}
      {isComplianceOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "#D6D6FF" }}>
          <div
            className="w-full h-full overflow-y-auto p-0 relative"
            style={{ backgroundColor: "#D6D6FF", borderRadius: 0, boxShadow: "none", maxWidth: "none", maxHeight: "none" }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsComplianceOpen(false)}
              aria-label="Cancel"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-2xl mx-auto pt-20 pb-12 px-6">
              <h3 className="text-slate-800 text-2xl font-bold mb-6">Compliance & Assurance</h3>
              {/* Tax Planning & Advisory */}
              <div className="mb-8 flex flex-col gap-4">
                <img src="/71.png" alt="Tax Planning" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-slate-800 text-base font-bold mb-2">Tax Planning & Advisory</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We help you minimize your tax burden, avoid penalties, and make the most of available incentives.
                  Monthly, Quarterly, and Annual tax planning. VAT, PAYE, and corporate tax compliance. Advisory on
                  tax-efficient business structures. Support during tax audits. Minimize taxes and maximize savings
                  proactively.
                </p>
              </div>

              {/* Audits */}
              <div className="mb-8 flex flex-col gap-4">
                <h4 className="text-slate-800 text-base font-bold mb-2">Audits</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Audits that enhance the credibility and transparency of your financial statements. Our audit process not
                  only ensures compliance with accounting standards but also provides stakeholders with confidence in the
                  integrity of your business operations.
                </p>
                <img src="/73.png" alt="Audits" className="w-full h-32 object-cover rounded-lg mb-2" />
              </div>

              {/* Compliance & Regulatory Reporting */}
              <div className="mb-8 flex flex-col gap-4">
                <h4 className="text-slate-800 text-base font-bold mb-2">Compliance & Regulatory Reporting</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Comprehensive support to help your business stay compliant with statutory and regulatory requirements in
                  Nigeria. We manage tax filings, corporate returns, industry-specific compliance, and reporting
                  obligations - allowing you to focus on growth while avoiding penalties.
                </p>
                <img src="/72.png" alt="Regulatory Reporting" className="w-full h-32 object-cover rounded-lg mb-2" />
              </div>

              {/* Risk Management & Internal Controls */}
              <div className="mb-8 flex flex-col gap-4">
                <h4 className="text-slate-800 text-base font-bold mb-2">Risk Management & Internal Controls</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Robust frameworks to identify, assess, and mitigate financial and operational risks. We design and
                  implement effective internal controls that safeguard assets, prevent fraud, and strengthen governance
                  for long-term business stability.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-purple-100 px-2 sm:px-8 py-12"
        style={{ backgroundColor: "#D6D6FF", width: "100%" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-slate-800 text-2xl font-bold mb-3" style={{ fontFamily: "Poppins", fontWeight: 700 }}>
              FAQs: Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-600 text-base text-pretty" style={{ fontFamily: "Poppins", fontWeight: 400 }}>
              Everything You Need to Know Before Getting Started
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                borderTop: "1px solid var(--Border-Default-Default, #D9D9D9)",
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleFaq("faq1")}
              >
                <h3
                  className="text-slate-800 text-base font-semibold text-pretty pr-4"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  What types of businesses do you work with?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    faqOpen.faq1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen.faq1 && (
                <div className="px-6 pb-4">
                  <p
                    className="text-slate-600 text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "Poppins", fontWeight: 400 }}
                  >
                    We specialize in supporting small and medium-sized businesses across various industries, including
                    technology, retail, real estate, manufacturing, services, logistics, agriculture,
                    healthcare, education, hospitality, energy, construction, and professional services. Whether you're a startup or an established
                    company, our solutions are tailored to your size, industry, and growth goals.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                borderTop: "1px solid var(--Border-Default-Default, #D9D9D9)",
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleFaq("faq2")}
              >
                <h3
                  className="text-slate-800 text-base font-semibold text-pretty pr-4"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  Do you only work with businesses in Nigeria?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    faqOpen.faq2 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen.faq2 && (
                <div className="px-6 pb-4">
                  <p
                    className="text-slate-600 text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "Poppins", fontWeight: 400 }}
                  >
                    Our core client base in Nigeria, but we also assist Nigerian-owned businesses
                    and individuals operating abroad. Many of our services are virtually, so location
                    is never a barrier.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                borderTop: "1px solid var(--Border-Default-Default, #D9D9D9)",
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleFaq("faq3")}
              >
                <h3
                  className="text-slate-800 text-base font-semibold text-pretty pr-4"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  What is the difference between bookkeeping and accounting?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    faqOpen.faq3 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen.faq3 && (
                <div className="px-6 pb-4">
                  <p
                    className="text-slate-600 text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "Poppins", fontWeight: 400 }}
                  >
 Bookeeping focuses on recording day-to-day finanacial transactions - sales, purchases,
 reciepts and payments.
Accounting uses that information to prepare reports, analyze performance, and provide
insights for decision-making. We offer both to keep your business financially
healthy.

                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                borderTop: "1px solid var(--Border-Default-Default, #D9D9D9)",
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleFaq("faq4")}
              >
                <h3
                  className="text-slate-800 text-base font-semibold text-pretty pr-4"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  How much do your services cost?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    faqOpen.faq4 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen.faq4 && (
                <div className="px-6 pb-4">
                  <p
                    className="text-slate-600 text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "Poppins", fontWeight: 400 }}
                  >
                  Kindly check our service package section. Custom packages are also available for unique
                  needs.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                borderTop: "1px solid var(--Border-Default-Default, #D9D9D9)",
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleFaq("faq5")}
              >
                <h3
                  className="text-slate-800 text-base font-semibold text-pretty pr-4"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  Can you help reduce my taxes legally?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    faqOpen.faq5 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen.faq5 && (
                <div className="px-6 pb-4">
                  <p
                    className="text-slate-600 text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "Poppins", fontWeight: 400 }}
                  >
       Absolutely , our tax planning and advisory services focus on legitimate ways to
       minimize your tax liabilities, ensure compliance with Nigerian tax laws, and take
       advantage incentives.          
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 6 */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                borderTop: "1px solid var(--Border-Default-Default, #D9D9D9)",
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleFaq("faq6")}
              >
                <h3
                  className="text-slate-800 text-base font-semibold text-pretty pr-4"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  What is a Virtual CFO and do I need one?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    faqOpen.faq6 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen.faq6 && (
                <div className="px-6 pb-4">
                  <p
                    className="text-slate-600 text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "Poppins", fontWeight: 400 }}
                  >
   A Virtual CFO is an outsourced finance professional who delivers the same strategic
insight and leadership as afull-time Chief Financial Officer - at a fraction of the cost.
For businesses seeking to improve profitability, optimize cash flow, and plan
for sustainable growth without the expenese of a senior in-house executive, a
virtual CFO is a highly valuable solution.                   
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 7 */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                borderTop: "1px solid var(--Border-Default-Default, #D9D9D9)",
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleFaq("faq7")}
              >
                <h3
                  className="text-slate-800 text-base font-semibold text-pretty pr-4"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  How do I get started?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    faqOpen.faq7 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen.faq7 && (
                <div className="px-6 pb-4">
                  <p
                    className="text-slate-600 text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "Poppins", fontWeight: 400 }}
                  >
                  Its's simple. Book a free 30-minute consultation with us. We'll assess
                  your needs, reccomended the right package and set up your services as you can
                  focus on running your business while we handle the Finances.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 8 */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                borderTop: "1px solid var(--Border-Default-Default, #D9D9D9)",
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleFaq("faq8")}
              >
                <h3
                  className="text-slate-800 text-base font-semibold text-pretty pr-4"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  Is my financial data secure with you?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    faqOpen.faq8 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen.faq8 && (
                <div className="px-6 pb-4">
                  <p
                    className="text-slate-600 text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "Poppins", fontWeight: 400 }}
                  >
                  Yes. We use secure, encrypted systems for storing and transfering financial data.
                  Client confidentiality is a top piority and we adhere to strict professional 
                  and ehtical standards.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
