import { useState } from "react";
import { Phone, Calendar, Microscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all";

export function AppointmentSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    test: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: form */}
          <div>
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-widest">
              Book Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-8 leading-tight">
              Are You Ready? Book
              <br />
              Appointment Now!
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  value={form.fullName}
                  onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputClass}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={inputClass}
                />
                <select
                  value={form.test}
                  onChange={(e) => setForm((f) => ({ ...f, test: e.target.value }))}
                  className={cn(inputClass, form.test === "" ? "text-gray-400" : "text-gray-800")}
                >
                  <option value="" disabled>
                    Biochemistry test
                  </option>
                  <option value="cbc">Complete Blood Count</option>
                  <option value="urinalysis">Urinalysis</option>
                  <option value="lipid">Lipid Profile</option>
                  <option value="glucose">Glucose Tolerance Test</option>
                </select>
              </div>
              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={4}
                className={cn(inputClass, "resize-none")}
              />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                <Button type="submit" variant="primary" size="lg" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Book an Appointment
                </Button>
                <a
                  href="tel:+18905333783"
                  className="flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  Get Your Quote or Call: (890) 533-378-386
                </a>
              </div>
            </form>
          </div>

          {/* Right: visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-brand-primary/15 rounded-3xl blur-2xl scale-110" />
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#f0fdf9] via-brand-primary/10 to-brand-primary/25 aspect-[3/4] flex flex-col items-center justify-center gap-6 p-8">
                <div className="w-28 h-28 rounded-full bg-brand-primary/20 border-4 border-brand-primary/30 flex items-center justify-center">
                  <Microscope className="w-14 h-14 text-brand-primary" />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  {["Complete Blood Count", "Lipid Profile", "Urinalysis"].map((test) => (
                    <div
                      key={test}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{test}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-brand-primary rounded-xl px-6 py-3 text-center w-full">
                  <p className="text-white font-semibold text-sm">Expert Care Awaits</p>
                  <p className="text-white/70 text-xs">Book your test today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
