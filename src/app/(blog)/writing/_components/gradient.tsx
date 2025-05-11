import { clsx } from 'clsx';

const gradientColors = 'from-[#FFFF99] from-[28%] via-[#8FC69B] via-[70%] to-[#99FF33]';

export function Gradient({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-slate-50 from-[28%] via-green-50 via-[70%] to-green-100 sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  );
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))]',
          gradientColors,
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  );
}
