import Image from 'next/image';
import { Caption, Paragraph, SubCaption } from '@/components/ui/typography';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  role?: string;
  image: string;
  isTop: boolean;
}

const TestimonialCard = ({ quote, author, location, role, image, isTop }: TestimonialCardProps) => (
  <div
    className={`
    relative bg-white p-8 rounded-[12px] transition-all duration-500
    ${
      isTop
        ? 'z-20 shadow-[0_100px_80px_rgba(0,0,0,0.02),0_42px_33px_rgba(0,0,0,0.01)] border border-gray-50'
        : 'z-10 absolute top-16 left-12 w-full border border-gray-500 opacity-40'
    }
  `}
  >
    {isTop && (
      <div className="absolute -top-8 -left-2 md:-left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
        <Image src={image} alt={author} fill className="object-cover" />
      </div>
    )}

    <Paragraph className="font-medium text-muted mb-8">{quote}</Paragraph>

    <div>
      <Caption className="text-[18px] font-bold text-muted">{author}</Caption>
      <p className="text-[14px] font-medium text-muted mt-1">
        {location}
        {role ? `, ${role}` : ''}
      </p>
    </div>
  </div>
);
export default TestimonialCard;
