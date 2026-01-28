'use client';

import Image from 'next/image';
import { Progress } from '@/components/ui/progress';

type ProgressBarProps = {
  progress: number;
};

export default function ProgressBarComponent({ progress }: ProgressBarProps) {
  const roundedProgress = Math.round(progress);

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl px-4 py-2">
        <div className="flex h-12 items-center justify-center">
            <Image
                src="https://i.imgur.com/24k01is.png"
                alt="Logo"
                width={100}
                height={25}
                className="object-contain"
            />
        </div>
        <div className="flex w-full items-center gap-4">
          <Progress value={progress} className="h-2 w-full" />
          <span className="w-12 text-right text-sm font-semibold text-primary">
            {roundedProgress}%
          </span>
        </div>
      </div>
    </div>
  );
}
