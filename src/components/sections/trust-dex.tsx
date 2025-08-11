import { Check, Heart } from "lucide-react";
import SectionHeader from "../section-header";

import { Badge } from "@/components/ui/badge";

const TrustDex = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <SectionHeader
          category="TRUST"
          title="Building Trust Through Transparency for Underserved Users"
          icon={Heart}
          description="This section highlights how the Direct Express app fosters user trust by providing transparent information and accessible features."
          className="border-none"
        />
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/d2697afc-b5bc-4346-2b28-4279aebd1300/public"
                alt="placeholder"
                className="h-96 w-full rounded-t-lg object-cover sm:h-72 md:h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-mono text-foreground font-bold"> Inclusive Design</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  ADA compliance across all touchpoints
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Spanish language support to serve diverse communities
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Large, accessible touch targets designed for ease of use
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/6db6fabb-9d75-4c1f-ae85-89f3d4f30100/public"
                alt="placeholder"
                className="h-96 w-full rounded-t-lg object-cover sm:h-72 md:h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-mono text-foreground font-bold">Progressive Disclosure</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Complex workflows like Rep Payee management divided into intuitive, manageable steps
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Intelligent defaults minimize decision fatigue and reduce user errors
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Strategic information layering prevents overwhelming first-time users
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/76326e6a-e873-4f71-760b-571181d15c00/public"
                alt="placeholder"
                className="h-96 w-full rounded-t-lg object-cover sm:h-72 md:h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-mono font-bold">Financial Transparency</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Multi-step payment confirmations with clear summary screens
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Complete transaction history with detailed audit trails for user confidence
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Clear communication of processing times (electronic payments vs. 5-10 business days for checks) to set proper expectations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustDex;

