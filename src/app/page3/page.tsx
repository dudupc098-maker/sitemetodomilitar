import PlansSection from '@/components/quiz/plans-section';
import GuaranteeSection from '@/components/quiz/guarantee-section';
import FaqSection from '@/components/quiz/faq-section';

export default function Page3() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl space-y-16 px-4 py-8 md:space-y-24 md:py-16">
        <PlansSection />
        <div className="space-y-2">
            <GuaranteeSection />
            <FaqSection />
        </div>
      </div>
    </div>
  );
}
