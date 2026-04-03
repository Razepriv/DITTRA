import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contact Us | Dittra',
  description: 'Get in touch with Dittra and book a consultation.',
}

export default function ContactPage() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Contact Us
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl">
              Schedule a consultation and connect with our team.
            </p>
          </div>

          <div className="cyber-card p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
              Contact Info
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-200 text-base md:text-lg">
              <p>Mon–Sat : 8:00 AM – 5:00 PM</p>
              <p>5900 Balcones Drive STE 100, Austin, TX 78731, USA</p>
              <p>
                <a
                  href="mailto:sales@dittra.com"
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  sales@dittra.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+15127618208"
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  +1 512 761 8208
                </a>
              </p>
            </div>
          </div>

          <div id="book-consultation" className="cyber-card p-4 md:p-6 scroll-mt-28">
            <div className="w-full h-[760px] overflow-hidden rounded-xl">
              <div
                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                id="my-cal-inline-consultation-with-dittra"
              />
            </div>
          </div>
        </div>
      </div>

      <Script id="cal-inline-embed" strategy="afterInteractive">
        {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "consultation-with-dittra", {origin:"https://app.cal.com"});

Cal.ns["consultation-with-dittra"]("inline", {
  elementOrSelector:"#my-cal-inline-consultation-with-dittra",
  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
  calLink: "dittra/consultation-with-dittra",
});

Cal.ns["consultation-with-dittra"]("ui", {"cssVarsPerTheme":{"dark":{"cal-brand":"#05aaae"}},"hideEventTypeDetails":false,"layout":"month_view"});`}
      </Script>
    </section>
  )
}
