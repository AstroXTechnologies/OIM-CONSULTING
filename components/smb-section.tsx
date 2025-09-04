import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export default function SMBSection() {
  return (
    <div className={poppins.variable}>
      {/* Why We're the Best Choice Section */}
      <section
        className="px-2 sm:px-8 py-8"
        style={{ backgroundColor: "#D6D6FF", width: "100%" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-slate-800 text-lg sm:text-xl font-bold mb-3 font-poppins">
                Why We're the Best Choice for SMBs
              </h3>
              
              <p
                className="text-slate-700 font-poppins font-normal mb-2"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  letterSpacing: "0.2px",
                }}
              >
                Why Small & Medium Businesses Choose OIM Consulting
              </p>
              
            </div>

            <div>
              <h3 className="text-slate-800 text-lg sm:text-xl font-bold mb-4 font-poppins">
                Why Businesses Choose Us
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-slate-700 font-poppins"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.3",
                      letterSpacing: "0.2px",
                    }}
                  >
                    <strong className="font-semibold">Custom solutions for Growth:</strong> Packages tailored to meet the unique needs of growing businesses.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-slate-700 font-poppins"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.3",
                      letterSpacing: "0.2px",
                    }}
                  >
                    <strong className="font-semibold">Clear, Affordable Pricing:</strong> Transparent rates with no hidden fees.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-slate-700 font-poppins"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.3",
                      letterSpacing: "0.2px",
                    }}
                  >
                    <strong className="font-semibold">Industry-Savvy Advisors:</strong> Dedicated experts who understand your market and challenges.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-slate-700 font-poppins"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.3",
                      letterSpacing: "0.2px",
                    }}
                  >
                    <strong className="font-semibold">Fully Online & Accessible:</strong> Convenient, secure access anytime, anywhere.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-slate-700 font-poppins"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.3",
                      letterSpacing: "0.2px",
                    }}
                  >
                    <strong className="font-semibold">Nationwide Trust:</strong> Serving startups, small, and medium-sized businesses across the country.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-slate-700 font-poppins"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.3",
                      letterSpacing: "0.2px",
                    }}
                  >
                    <strong className="font-semibold">Commitment to Confidentiality:</strong> Your information is always handled with the highest level of security and discretion.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
