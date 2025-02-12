import HackImage from './HackImage';

export const HackCard = ({ image, title, text, link, date }: Hack) => (
  <li>
    {image && <HackImage imageUrl={Array.isArray(image) ? image[0] : image} />}
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
    7
  </li>
);
