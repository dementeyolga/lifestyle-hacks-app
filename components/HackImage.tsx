import { cn } from '@/lib/utils';
import Image from 'next/image';

type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';

const widthVariantStyles: Record<BookCoverVariant, string> = {
  extraSmall: 'hack-image_extra_small',
  small: 'book-cover _small',
  medium: 'hack-image_medium',
  regular: 'hack-image_regular',
  wide: 'hack-image_wide',
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
      <Image src={imageUrl} alt="" fill className="object-cover"></Image>
    </div>
  );
};

export default HackImage;
