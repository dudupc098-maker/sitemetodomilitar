'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type ReportModalProps = {
    children: React.ReactNode;
    title: string;
    source: string;
    image?: ImagePlaceholder;
}

export default function ReportModal({ children, title, source, image }: ReportModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{source}</DialogDescription>
        </DialogHeader>
        <div className="relative mt-4 aspect-video w-full">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={title}
                    fill
                    className="rounded-md object-cover"
                    data-ai-hint={image.imageHint}
                />
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
