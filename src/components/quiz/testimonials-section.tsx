'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { quizData } from '@/lib/quiz-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TestimonialsSection() {
    return (
      <section id="testimonials" className="w-full animate-fade-in-up scroll-mt-24">
        <div className="text-center">
          <h2 className="font-headline text-2xl font-bold leading-tight md:text-3xl">
            Eles voltaram a dormir profundo em <span className="text-primary">poucos dias</span>. Agora é a sua vez de dormir!
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground md:text-lg">
            Relatos reais de pessoas que transformaram suas noites com o <span className="underline decoration-primary">Método Sono Militar</span>.
          </p>
        </div>
  
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 md:max-w-5xl md:grid-cols-3">
          {quizData.testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find((img) => img.id === testimonial.imageUrlId);
            return (
              <Card key={testimonial.id} className="flex flex-col overflow-hidden bg-card/50 shadow-sm transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className='h-12 w-12'>
                      {image && (
                          <AvatarImage src={image.imageUrl} alt={`Foto de ${testimonial.name}, ${testimonial.tag}`} data-ai-hint={image.imageHint} />
                      )}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.tag}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col pt-0">
                  <p className="flex-1 text-base italic leading-relaxed text-foreground/80">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    );
}
