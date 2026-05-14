import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Complete Blood Count",
  "Liver Function Blood Test",
  "Heart Disease Blood Tests",
  "Cholesterol / Lipid Levels",
  "Sexually Transmitted Diseases",
];

const PLANS = [
  { name: "Basic Care", price: "$79", description: "Basic Health Check", featured: false, featureCount: 3 },
  { name: "Premium Care", price: "$149", description: "Premium Health Check", featured: true, badge: "Most Popular", featureCount: 5 },
  { name: "Platinum Care", price: "$249", description: "Platinum Health Check", featured: false, featureCount: 5 },
];

export function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Health Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Health Check Packs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col gap-6 p-8 rounded-2xl border transition-all duration-300",
                plan.featured
                  ? "bg-brand-primary border-brand-primary shadow-2xl shadow-brand-primary/30 lg:scale-105"
                  : "bg-white border-gray-100 hover:border-brand-primary/30 hover:shadow-lg"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-brand-primary text-xs font-bold shadow-lg border border-brand-primary/20">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <p
                  className={cn(
                    "text-xs font-semibold uppercase tracking-widest mb-2",
                    plan.featured ? "text-white/70" : "text-brand-primary"
                  )}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={cn(
                      "text-5xl font-black leading-none",
                      plan.featured ? "text-white" : "text-gray-900"
                    )}
                  >
                    {plan.price}
                  </span>
                </div>
                <p className={cn("text-sm mt-1.5", plan.featured ? "text-white/60" : "text-gray-400")}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {FEATURES.slice(0, plan.featureCount).map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                        plan.featured ? "bg-white/20" : "bg-brand-primary/10"
                      )}
                    >
                      <Check className={cn("w-3 h-3", plan.featured ? "text-white" : "text-brand-primary")} />
                    </div>
                    <span className={cn("text-sm", plan.featured ? "text-white/85" : "text-gray-600")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "outline" : "primary"}
                size="md"
                className={cn(
                  "w-full mt-auto",
                  plan.featured
                    ? "border-white text-white hover:bg-white hover:text-brand-primary"
                    : ""
                )}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
