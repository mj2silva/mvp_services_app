import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type Props = {
  img: string,
  title: string,
  description?: string,
  button: string,

}

const defaultProps = {
    description: '',
  };

const NoRequests:FC<Props> = ({ img, title, description, button }:Props) => ( 
  <div className="no-request">
    <div className="no-requests">
        <div className="no-requests__image">
          <Image src={img} layout="fill" objectFit="scale-down" />
        </div>
        <h1 className="no-requests__title">
          {title}
        </h1>
        <p className="no-requests__description">
          {description}
        </p>
        <div className="no-requests__div-button">
        <button className="no-requests__button">
          {button}
        </button>
        </div>
        
    </div>
  </div>
);

NoRequests.defaultProps = defaultProps;

export default NoRequests;