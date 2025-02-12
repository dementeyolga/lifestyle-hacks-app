import Image from 'next/image';

const HackOverview = ({ image, title, text, link, date }: Hack) => {
  return (
    <section className="hack-overview">
      <div className="flex flex-1 flex-col gap-5">
        {title && <h1>{title}</h1>}

        <div className="hack-info">
          {text && <p className="hack-description">{text}</p>}
          {link && (
            <a href={link} className="hack-description">
              {link}
            </a>
          )}
          {date && <p className="font-semibold text-light-200">{date}</p>}
        </div>
      </div>

      {image && (
        <div className="flex flex-1 justify-center">
          <Image
            alt={title || text || ''}
            src={Array.isArray(image) ? image[0] : image}
          />
        </div>
      )}
    </section>
  );
};

export default HackOverview;
