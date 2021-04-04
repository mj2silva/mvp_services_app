import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  title: string,
  description?: string,
  img: string,
}

const defaultProps = {
  description: '',
};

const OptionCard:FC<Props> = ({ img, title, description }:Props) => (
  <Link href="/">
    <div className="option-card">
      <div className="option-card-content">
        <div className="option-card__image">
          <Image src={img} layout="fill" objectFit="scale-down" />
        </div>
        <h1 className="option-card__title">
          {title}
        </h1>
        <p className="option-card__description">
          {description}
        </p>
      </div>
    </div>
  </Link>
);

OptionCard.defaultProps = defaultProps;

export default OptionCard;
