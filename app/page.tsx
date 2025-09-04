"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronDown, X } from "lucide-react"
import PricingSection from "@/components/pricing-section"
import { useState } from "react"
import SMBSection from "@/components/smb-section"
import ServicesSection from "@/components/service-section"


export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCoreAccountingOpen, setIsCoreAccountingOpen] = useState(false)
  const [isStrategicAdvisoryOpen, setIsStrategicAdvisoryOpen] = useState(false)
  const [isComplianceOpen, setIsComplianceOpen] = useState(false)  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) 
    }
  }

  return (
    <>
      {/* Header */}
      <div className="bg-[#D6D6FF] px-6 min-h-[48px]">
        <header className="py-1 flex items-center justify-between relative" style={{ backgroundColor: "#D6D6FF", minHeight: "48px" }}>
          <div className="flex items-center gap-2">
            {/* OIM Logo */}
            <img src="/OIM logo-1 1.png" alt="OIM Consulting Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <div className="text-blue-600 font-bold text-base">
              <div className="text-xs text-gray-600 -mt-1"></div>
            </div>
          </div>

          <button onClick={toggleMobileMenu} className="z-50 relative">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
            )}
          </button>

          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <div className="fixed inset-0  bg-opacity-50 z-40" onClick={toggleMobileMenu} />

              {/* Mobile Menu */}
              <div className="fixed top-0 right-0 h-full w-80  shadow-lg z-50 transform transition-transform duration-300 ease-in-out"style={{ backgroundColor: "#D6D6FF" }}>
                <div className="p-6 pt-20">
                  <nav className="space-y-6">
                    <button
                      onClick={() => scrollToSection("home")}
                      className="block w-full text-left text-lg font-semibold text-slate-800 hover:text-teal-600 transition-colors"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="block w-full text-left text-lg font-semibold text-slate-800 hover:text-teal-600 transition-colors"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left text-lg font-semibold text-slate-800 hover:text-teal-600 transition-colors"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => scrollToSection("pricing")}
                      className="block w-full text-left text-lg font-semibold text-slate-800 hover:text-teal-600 transition-colors"
                    >
                      Pricing
                    </button>
                    <button
                      onClick={() => scrollToSection("faq")}
                      className="block w-full text-left text-lg font-semibold text-slate-800 hover:text-teal-600 transition-colors"
                    >
                      FAQ
                    </button>
                    <div className="pt-4 border-t border-gray-200">
                      <Button className="w-full bg-[#008080] hover:bg-teal-900 text-white font-medium px-4 py-5 rounded-md">
                        Book Free Consultation
                      </Button>
                    </div>
                  </nav>
                </div>
              </div>
            </>
          )}
        </header>
      </div>
      {/* Hero Section  */}
      <main id="home" className="relative min-h-[calc(100vh-80px)] bg-slate-800 overflow-hidden w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          preload="metadata"      
          style={{ maxHeight: "480px" }} 
          onError={(e) => {
            console.log("[v0] Video failed to load:", e)
            e.currentTarget.style.display = "none"
          }}
          onLoadStart={() => {
            console.log("[v0] Video loading started")
          }}
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-800/80" />
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-20">
          <div className="max-w-sm sm:max-w-lg mx-auto">
            <h1
              className="text-white mb-6 text-balance text-2xl sm:text-3xl font-sans"
              style={{
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "40px",
                letterSpacing: "-0.5px",
              }}
            >
              Trusted Online Accounting and Financial Advisory for Small & Medium Businesses
            </h1>
            <p
              className="mb-8 text-pretty text-base sm:text-lg font-sans"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.1px",
              }}
            >
              Empowering businesses with strategic insights, reliable accounting, and advisory excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#008080] hover:bg-teal-900 text-white font-medium px-6 py-5 rounded-md text-sm w-full sm:w-auto">
                Book My Free Consultation
              </Button>
              <Button
                variant="outline"
                className="font-medium px-6 py-5 rounded-md text-sm w-full sm:w-auto bg-transparent hover:bg-transparent text-white border-white/30 hover:border-white/50"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <div className="bg-[#D6D6FF] px-6">
        {/* Intro to OIM Consulting Section */}
        <section className="py-12" style={{ backgroundColor: "#D6D6FF", width: "100%" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-slate-800 text-xl sm:text-2xl font-bold mb-8 text-center">Intro To OIM Consulting</h2>
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <img src="/consulting.png" alt="Consulting" className="w-full h-56 sm:h-80 object-cover" />
            </div>
            <div className="mb-8">
              <p
                className="text-slate-700 text-sm sm:text-base leading-relaxed text-pretty"
                style={{
                  color: "#000014",
                  fontFamily: "Poppins,",
                  fontWeight: 400,
                  fontStyle: "normal",
                }}
              >
                At OIM Consulting, we help small and medium-sized businesses in Nigeria manage their accounting and
                financial needs with smarter, efficient, and cost-effective solutions. From basic accounting
                solutions - covering bookkeeping, financial reporting, tax compliance, and Virtual CFO services - we
                deliver the clarity, efficiency, and strategic insight your business needs to grow with confidence.
              </p>
            </div>
            <div className="rounded-lg p-3" style={{ backgroundColor: "#D6D6FF" }}>
              <h3
                className="text-slate-800 text-lg sm:text-xl font-bold mb-3"
                style={{ marginLeft: 0, paddingLeft: 0, textAlign: "left" }}
              >
                Let's Talk About Your Business Goals
              </h3>
              <p
                className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 text-pretty"
                style={{ marginLeft: 0, paddingLeft: 0, textAlign: "left" }}
              >
                Schedule a free 30-minute consultation with our experts and see how we can help you save money, grow
                faster, and stay compliant - all with a plan tailored for your business.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white font-small px-4 py-5 rounded-md text-sm w-full sm:w-auto">
                Book My Free Consultation
              </Button>
            </div>
          </div>
        </section>
        {/* About Us Section */}
        <section id="about" className="py-12" style={{ backgroundColor: "#D6D6FF", width: "100%" }}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-slate-800 text-lg sm:text-xl font-bold mb-4">About Us</h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-pretty">
                OIM Consulting is a trusted online accounting and finance advisory 
                firm dedicated to helping businesses in Nigeria achieve growth, 
                compliance, and long-term financial success. We combine deep 
                industry expertise with innovative online accounting solutions to 
                deliver clarity, 
                efficiency, and strategic insight for every client we serve.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div
                className="rounded-lg p-6 shadow-lg text-center"
                style={{
                  background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden"
                  style={{
                    backgroundColor: "#D6D6FF",
                  }}
                >
                  <img src="/1.png" alt="Grow Your Business" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-bold mb-4" style={{ color: "#003D3D" }}>
                  We Grow Your Business
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-pretty" style={{ color: "#475569" }}>
                  Empowering startups and growing businesses with smart financial solutions that drive growth and
                  long-term success.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="rounded-lg p-6 shadow-lg text-center"
                style={{
                  background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden"
                  style={{
                    backgroundColor: "#D6D6FF",
                  }}
                >
                  <img src="/2.png" alt="Trusted Business Advisor" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-bold mb-4" style={{ color: "#003D3D" }}>
                  Your Trusted Business Advisor
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-pretty" style={{ color: "#475569" }}>
                  More than accountants - we're your strategic partners, providing guidance to help you make informed
                  decisions and achieve your goals.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="rounded-lg p-6 shadow-lg text-center"
                style={{
                  background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden"
                  style={{
                    backgroundColor: "#D6D6FF",
                  }}
                >
                  <img src="/3.png" alt="Our Background" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-bold mb-4" style={{ color: "#003D3D" }}>
                  Our Background
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-pretty" style={{ color: "#475569" }}>
                  Years of experience in accounting, finance, and consulting. Helping businesses navigate complex
                  financial landscapes with confidence and expertise.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="rounded-lg p-6 shadow-lg text-center"
                style={{
                  background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden"
                  style={{
                    backgroundColor: "#D6D6FF",
                  }}
                >
                  <img src="/44.jpg" alt="Who We Work With" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-bold mb-4" style={{ color: "#003D3D" }}>
                  Who We Work With
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-pretty" style={{ color: "#475569" }}>
                  We serve startups, SMEs, individuals and growing organizations nationwide. Our solutions are designed
                  for businesses and individuals who need tax and accounting consulting services.
                </p>
              </div>

              {/* Card 5 */}
              <div
                className="rounded-lg p-6 shadow-lg text-center"
                style={{
                  background: "var(--Color-Palette-bg-color2, #C2C2FF)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden"
                  style={{
                    backgroundColor: "#D6D6FF",
                  }}
                >
                  <img src="/55.png" alt="Industry Expertise" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-bold mb-4" style={{ color: "#003D3D" }}>
                  Industry Expertise
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-pretty" style={{ color: "#475569" }}>
                  We have expertise across various technology retail, banking, real estate, FMCG, manufacturing,
                  professional services, and more - delivering actionable, market-specific advice.
                </p>
              </div>
            </div>
            

            <div
              className="rounded-lg p-6 text-center mt-8"
              style={{
                backgroundColor: "#D6D6FF",
              }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#003D3D" }}>
                Book an Appointment
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-pretty mb-6" style={{ color: "#475569" }}>
                Ready to take your business to the next level? Get personalized strategies to take your business to the
                next level.
              </p>
               <Button className="bg-teal-500 hover:bg-teal-600 text-white font-small px-4 py-5 rounded-md text-sm w-full sm:w-auto">
                Tallk to us Today
              </Button>
            </div>
          </div>
        </section>
        <SMBSection />
        {/* Service Section */}
        <ServicesSection/>
        {/* Pricing Section */}
        <div id="pricing">
          <PricingSection />
        </div>
      </div>
    </>
  )
}
