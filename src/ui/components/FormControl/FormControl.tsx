import * as React from 'react';
import { useContext } from 'react';
import FormContext from './FormContext';

export interface FormControlProps
  extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const FormControl = React.forwardRef<HTMLFormElement, FormControlProps>(
  (props, ref) => {
    const { controlId } = useContext(FormContext);
    const { id, className, children, ...forwardedProps } =
      props;

    return (
      <form {...forwardedProps} ref={ref} id={id || controlId}>
        {children}
      </form>
    );
  }
);

export default FormControl;
