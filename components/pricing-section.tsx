"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = {
  starter: {
    name: "Starter",
    price: "₦50,000",
    period: "/month",
    idealFor: "Small businesses & startups",
    features: [
      "Monthly financial statements",
      "1 management review meeting per month",
      "Quarterly tax compliance review (FIRS, State IRS)",
      "Payroll setup",
      "Ongoing email & phone support",
    ],
  },
  growth: {
    name: "Growth",
    price: "₦100,000",
    period: "/month",
    idealFor: "Expanding SMEs",
    features: [
      "Detailed monthly financial statement & cash flow reports",
      "2 management review meetings per month",
      "Complete tax management (VAT, WHT, CIT, PAYE)",
      "Filling of returns (FIRS & State IRS)",
      "Payroll management & statutory deductions (Pension,NHF,NSITF,ITF)",
      "Quarterly Virtual CFO advisory (growth planning & financial health reviews)",
    ],
  },
  premium: {
    name: "Premium",
    price: "₦180,000",
    period: "/month",
    idealFor: "Established companies",
    features: [
      "Monthly management account and cash flow projections",
      "2 management strategy meetings per month",
      "Comprehensive tax planning and advisory (VAT, WHT, CIT, PAYE, transfer pricing if applicable)",
      "Payroll and HR compliance (Pension, NHF, ITF, NSITF remittances)",
      "Monthly Virtual CFO sessions (budgeting, financial modeling, funding strategy)",
      "Bussiness strategy & sector-specific reports - Regulatory compliance supports",
    ],
  },
}

interface PricingSectionProps {
  className?: string
}

export default function PricingSection({ className = "" }: PricingSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans>("starter")
  const currentPlan = plans[selectedPlan]

  return (
    <section
      className={`py-16 px-4 ${className}`}
      style={{ backgroundColor: "#D6D6FF", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl font-semibold text-slate-800 mb-2 text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Simple, Transparent Pricing
        </h1>
        <p
          className="text-slate-600 text-sm leading-relaxed text-center mb-8"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Clear, straightforward pricing with no hidden fees - giving you honest value and full confidence in every
          service you choose.
        </p>
        <div className="max-w-md mx-auto">
          <Card
            className="shadow-lg border-0 overflow-hidden"
            style={{
              background: "var(--Color-Palette-bg-color2, #C2C2FF)",
              borderColor: "var(--Border-Default-Default, #D9D9D9)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <CardContent className="px-8 pb-8">
              <div className="flex bg-gray-100 rounded-lg p-1 mb-8 gap-4">
                {Object.entries(plans).map(([key, plan]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key as keyof typeof plans)}
                    className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 ${
                      selectedPlan === key ? "bg-white text-slate-800 shadow-sm" : "bg-white text-slate-600 hover:text-slate-800"
                    }`}
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      background: "#fff",
                    }}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {currentPlan.price}
                  </span>
                  <span className="text-slate-600 ml-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {currentPlan.period}
                  </span>
                </div>
                <p className="text-sm text-slate-600" style={{ fontFamily: "Poppins, sans-serif" }}>
                  <span className="font-medium">Ideal For:</span> {currentPlan.idealFor}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                    <span
                      className="text-sm text-slate-700 leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                style={{ fontFamily: "Poppins, sans-serif" }}
                size="lg"
              >
                Get Started Today
              </Button>

              <p className="text-xs text-slate-500 text-center mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                <span className="font-medium">Note:</span> Custom packages available on request.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
