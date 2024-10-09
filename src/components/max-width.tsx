import { cn } from '@/lib/utils';

const MaxWidth = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('md:px-10 px-5', className)}>{children}</div>;
};

export default MaxWidth;
