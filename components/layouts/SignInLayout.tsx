import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode,
}

const SignInLayout : FC<Props> = ({ children } : Props) => (
  <div className="section-container section-container--expand">
    <section className="section">
      <div className="section-content section-content--expand">
        <div className="section__group--autofit">
          { children }
        </div>
        <div className="section__group--autofit">
          <div className="section__image-container">
            <img src="/img/3545758-01.svg" alt="" className="section__image" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SignInLayout;
