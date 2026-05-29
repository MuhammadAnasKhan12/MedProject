import { useState, useRef, useEffect } from "react";
import { MapPin, Mail, Clock, Calendar, ChevronDown, Check, ArrowRight, Activity, ShieldCheck, BookOpen, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-brand-primary transition-all duration-200";

const SERVICES = [
  { value: "trials", label: "Clinical Trials & Device Monitoring", icon: Activity },
  { value: "qa", label: "Quality Assurance Audit", icon: ShieldCheck },
  { value: "training", label: "Clinical Research Training", icon: BookOpen },
  { value: "sitesetup", label: "Research Site Set-Up", icon: Building2 },
  { value: "other", label: "Other / General Inquiry", icon: Mail },
];

function CustomSelect({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = SERVICES.find((s) => s.value === value);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(inputClass, "flex items-center justify-between text-left", !selected && "text-gray-400")}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown className={cn("w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <ul className="absolute z-50 top-full mt-2 left-0 right-0 rounded-xl border-2 border-gray-200 bg-white shadow-xl overflow-hidden">
          {SERVICES.map(({ value: v, label, icon: Icon }) => (
            <li key={v}>
              <button
                type="button"
                onClick={() => { onChange(v); setOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-brand-primary/5 hover:text-brand-primary transition-colors text-gray-700 border-b border-gray-100 last:border-0"
              >
                <Icon className="w-4 h-4 text-brand-primary flex-shrink-0" />
                {label}
                {value === v && <Check className="w-4 h-4 text-brand-primary ml-auto flex-shrink-0" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white pt-[72px]">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-[#0b2e29] to-[#062420] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,176,155,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,155,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-brand-primary/10 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-xs font-semibold uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                Contact{" "}
                <span className="text-brand-primary">Us</span>
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-lg">
                Have a question or ready to discuss your clinical research needs? Reach out and our team will respond promptly.
              </p>
            </div>

            {/* Contact info cards in hero */}
            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, label: "Location", value: "PO. Box 4224, Atlanta, GA 30311" },
                { icon: Mail, label: "Email", value: "info@ceonocra.com" },
                { icon: Clock, label: "Business Hours", value: "Mon–Fri: 9am–5pm · Sat: 9am–2pm" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium">{label}</p>
                    <p className="text-white font-semibold text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Left info panel */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Info card */}
              <div className="bg-brand-navy rounded-2xl p-8 border border-brand-primary/20 flex flex-col gap-7">
                <h2 className="text-xl font-extrabold text-white">Contact Information</h2>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-medium mb-0.5">Mailing Address</p>
                      <p className="text-white text-sm font-medium leading-relaxed">
                        PO. Box 4224<br />Atlanta, GA 30311
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/8" />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-medium mb-0.5">Email</p>
                      <a href="mailto:info@ceonocra.com" className="text-brand-primary text-sm font-medium hover:text-brand-secondary transition-colors">
                        info@ceonocra.com
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-white/8" />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-medium mb-2">Business Hours</p>
                      <div className="flex flex-col gap-1.5 text-sm">
                        {[
                          { day: "Mon – Fri", hours: "9:00 am – 5:00 pm" },
                          { day: "Saturday", hours: "9:00 am – 2:00 pm" },
                          { day: "Sunday", hours: "Closed", closed: true },
                        ].map(({ day, hours, closed }) => (
                          <div key={day} className="flex justify-between gap-4">
                            <span className="text-white/50">{day}</span>
                            <span className={cn("font-medium", closed ? "text-brand-primary" : "text-white/80")}>{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services quick list */}
              <div className="bg-white rounded-2xl p-7 border-2 border-gray-200 shadow-sm flex flex-col gap-5">
                <h3 className="font-extrabold text-gray-900">Services Available</h3>
                <div className="flex flex-col gap-2">
                  {SERVICES.slice(0, 4).map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all group">
                      <div className="w-7 h-7 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-all">
                        <Icon className="w-3.5 h-3.5 text-brand-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-gray-600 text-xs font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center gap-7 py-20 px-8 rounded-2xl bg-white border-2 border-brand-primary/20 shadow-sm h-full min-h-[500px]">
                  <div className="w-20 h-20 rounded-full bg-brand-primary flex items-center justify-center shadow-xl shadow-brand-primary/30">
                    <Calendar className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Received!</h3>
                    <p className="text-gray-500 text-base max-w-sm leading-relaxed">
                      Thank you for reaching out. A member of the Ceonocra team will be in touch at the email you provided.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="flex items-center gap-2 text-brand-primary text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Send another message <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-sm overflow-hidden">
                  {/* Form header */}
                  <div className="px-8 py-6 border-b-2 border-gray-100 bg-gray-50">
                    <h2 className="text-xl font-extrabold text-gray-900">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm mt-1">All fields marked with * are required.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-xs font-bold uppercase tracking-wide">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={form.fullName}
                          onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-xs font-bold uppercase tracking-wide">Email Address *</label>
                        <input
                          type="email"
                          placeholder="you@organization.com"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-xs font-bold uppercase tracking-wide">Organization</label>
                        <input
                          type="text"
                          placeholder="Your organization or site"
                          value={form.organization}
                          onChange={(e) => setForm((f) => ({ ...f, organization: e.target.value }))}
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-xs font-bold uppercase tracking-wide">Service of Interest</label>
                        <CustomSelect
                          value={form.service}
                          onChange={(v) => setForm((f) => ({ ...f, service: v }))}
                          placeholder="Select a service"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-gray-700 text-xs font-bold uppercase tracking-wide">Message *</label>
                      <textarea
                        placeholder="Tell us about your clinical research needs..."
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        rows={5}
                        className={cn(inputClass, "resize-none")}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-brand-primary/25 w-full sm:w-auto self-start"
                    >
                      <Mail className="w-4 h-4" />
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
