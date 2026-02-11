import MembersAreaMockup from '@/components/quiz/members-area-mockup';
import TestimonialsSection from '@/components/quiz/testimonials-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page2() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl space-y-16 px-4 py-8 md:space-y-24 md:py-16">
        <MembersAreaMockup />
        <TestimonialsSection />
        <div className="flex justify-center text-center">
            <Link href="/page3" className="w-full max-w-lg">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-cta text-xl font-bold h-16 rounded-md shadow-md">
                    Ver acesso e começar hoje
                </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
