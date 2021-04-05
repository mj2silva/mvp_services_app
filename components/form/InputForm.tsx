import { FC, ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type Props = {
    placeHolder: string,
    wrapperClass?: string,
    typeInput?: string,
    label: string,
    name: string,
    children?: ReactNode
}

const defaultProps:Partial<Props> = {
    wrapperClass: '/',
    typeInput: '/'
};

const InputForm:FC<Props>=({ placeHolder, wrapperClass, typeInput, label, name, children  }:Props) =>{


  const [passIcon, setPassIcon] = useState(faEye);
  const [passInputType, setPassInputType] = useState(typeInput);

  const handlePassState = () => {
    if (passInputType === 'password') {
      setPassIcon(faEyeSlash);
      setPassInputType('text');
    } else {
      setPassIcon(faEye);
      setPassInputType('password');
    }
  };

  return (
    <label htmlFor={name} className={`${wrapperClass}__form-label`}>
      <span className={`${wrapperClass}__form-label-text`}>{ label }</span>
      <input name={name} type={passInputType} id={name} placeholder={placeHolder} className={`${wrapperClass}__form-input`} />
      {
        (typeInput === 'password') ? (
          <>
            <FontAwesomeIcon onClick={handlePassState} className={`${wrapperClass}__form-pass-ico`} icon={passIcon} />
          </>
        ) : (
          <>
          </>
        )
      }
      { children }
    </label>
  );
};


InputForm.defaultProps = defaultProps;
export default InputForm;