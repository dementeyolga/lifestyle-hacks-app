import { cn } from '@/lib/utils';
import Image from 'next/image';

type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';

const widthVariantStyles: Record<BookCoverVariant, string> = {
  extraSmall: 'book-cover_extra_small',
  small: 'book-cover _small',
  medium: 'book-cover_medium',
  regular: 'book-cover_regular',
  wide: 'book-cover_wide',
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  imageUrl: string;
}

const HackImage = ({ className, variant = 'regular', imageUrl }: Props) => {
  return (
    <div
      className={cn(
        'relative transition-all duration-300',
        widthVariantStyles[variant],
        className,
      )}
    >
      <Image src={imageUrl} alt="" fill className="object-fill"></Image>
    </div>
  );
};

export default HackImage;
