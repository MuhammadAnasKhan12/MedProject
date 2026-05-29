import { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Col 1: Logo + CTA */}
          <div className="flex flex-col gap-6">
            <Logo variant="dark" className="w-44" showSubtitle />
            <h3 className="text-xl font-bold text-white">Have A Question?</h3>
            <p className="text-white/55 text-sm leading-relaxed">
              Ceonocra Health Research Solutions — providing clinical trials management, QA audits, and training support with over 18 years of experience. Contact us for solutions tailored to your needs.
            </p>
            <Button
              variant="outline"
              size="md"
              className="self-start border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
            >
              Contact Us
            </Button>
          </div>

          {/* Col 2: Contact info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">Reach Out To Us At</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/55 text-sm leading-relaxed">
                  PO. Box 4224,
                  <br />
                  Atlanta, GA 30311
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a
                  href="mailto:info@ceonocra.com"
                  className="text-white/55 text-sm hover:text-brand-primary transition-colors"
                >
                  info@ceonocra.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours + Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Opening Hours</h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/55">Mon – Fri</span>
                  <span className="text-white/80 font-medium">9:00 am – 5:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/55">Saturday</span>
                  <span className="text-white/80 font-medium">9:00 am – 2:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/55">Sunday</span>
                  <span className="text-brand-primary font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Email for Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-brand-primary transition-colors"
                />
                <Button variant="primary" size="sm" className="shrink-0">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">© 2026 Ceonocra Health Research Solutions. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/35">
            <a href="#" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
