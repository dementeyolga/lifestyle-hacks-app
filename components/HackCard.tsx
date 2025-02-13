import HackImage from './HackImage';

export const HackCard = ({ image, title, text, link, date }: Hack) => (
  <li className="card">
    {image && <HackImage imageUrl={Array.isArray(image) ? image[0] : image} />}
    <div>
      {title && <h1>{title}</h1>}

      <div className="card-info">
        {text && <p className="card-description">{text}</p>}
        {link && (
          <a href={link} className="card-description">
            {link}
          </a>
        )}
        {date && <p className="card-date">{date}</p>}
      </div>
    </div>
  </li>
);
