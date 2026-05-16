import { useState, useRef, useEffect } from "react";
import { Phone, Calendar, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-white/30 bg-transparent text-white text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/60 transition-all";

const TESTS = [
  { value: "cbc", label: "Complete Blood Count" },
  { value: "urinalysis", label: "Urinalysis" },
  { value: "lipid", label: "Lipid Profile" },
  { value: "glucose", label: "Glucose Tolerance Test" },
  { value: "biochemistry", label: "Biochemistry Test" },
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

  const selected = TESTS.find((t) => t.value === value);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          inputClass,
          "flex items-center justify-between text-left",
          !selected && "text-white/60"
        )}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown
          className={cn("w-4 h-4 flex-shrink-0 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul className="absolute z-50 top-full mt-2 left-0 right-0 rounded-xl border border-white/20 bg-white shadow-xl overflow-hidden">
          {TESTS.map((t) => (
            <li key={t.value}>
              <button
                type="button"
                onClick={() => { onChange(t.value); setOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-left hover:bg-green-100 transition-colors text-brand-primary"
              >
                {t.label}
                {value === t.value && <Check className="w-4 h-4 flex-shrink-0" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function AppointmentSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    test: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="bg-brand-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[560px]">

          {/* Left: form */}
          <div className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20 flex flex-col justify-center">
            <span className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
              Book Now
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
              Are You Ready? Book
              <br />
              Appointment Now!
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={inputClass}
                />
                <CustomSelect
                  value={form.test}
                  onChange={(v) => setForm((f) => ({ ...f, test: v }))}
                  placeholder="Biochemistry test"
                />
              </div>

              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={4}
                className={cn(inputClass, "resize-none")}
              />

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-1">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white text-brand-primary font-bold text-sm hover:bg-white/90 transition-colors whitespace-nowrap w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  Book an Appointment
                </button>
                <a
                  href="tel:+0805332213184"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>Get Your Quote or Call: (080) 5332-213-184</span>
                </a>
              </div>
            </form>
          </div>

          {/* Right: doctor photo — desktop */}
          <div className="relative hidden lg:block">
            <img
              src="/images/doctor2.jpeg"
              alt="Medical professional"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-brand-primary/40" />
          </div>

          {/* Mobile: shorter image below form */}
          <div className="relative block lg:hidden h-56 sm:h-72">
            <img
              src="/images/doctor2.jpeg"
              alt="Medical professional"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-brand-primary/40" />
          </div>

        </div>
      </div>
    </section>
  );
}
