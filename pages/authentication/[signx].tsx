import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/authentication/Header';
import AccountsForm from '../../components/authentication/AccountsForm';
import LoginForm from '../../components/authentication/LoginForm';
import SignUpForm from '../../components/authentication/SignUpForm';
import Image from 'next/image';

type Props = {
  children: ReactNode,

}

const Signx:FC<Props> = ({ children}:Props) => {
  const router = useRouter();  
  const { signx } = router.query;

  if (signx === 'sign-up' || signx === 'log-in') {
    return (
      <>
        
        <div className="section-container section-container--expand">
          <section className="section">
            <div className="section-content section-content--expand">
              <div className="section__group--autofit">
                <AccountsForm signx={signx}>
                  {
                    (signx === 'log-in') ? (
                      <LoginForm />
                    ) : (
                      <SignUpForm />
                    )
                  }
                </AccountsForm>
              </div>
              <div className="section__group--autofit">
                <div className="section__image-container">
                  <img src="/img/3545758-01.svg" alt="" className="section__image" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
   );
  }
    else{
      return(<h1 ></h1>)
  }

   
  
};

export default Signx;
