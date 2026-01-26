'use client';

import { Progress } from '@/components/ui/progress';

type ProgressBarProps = {
  progress: number;
};

export default function ProgressBarComponent({ progress }: ProgressBarProps) {
  const roundedProgress = Math.round(progress);

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-12 max-w-4xl items-center justify-center px-4">
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
