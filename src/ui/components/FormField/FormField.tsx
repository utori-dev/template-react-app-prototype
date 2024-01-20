import { css } from '@emotion/react';
import * as React from 'react';
import { formField as styles } from '../../emotion';


/**
 * Props for the FormField
 */
export interface FormFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  onChange: (event: React.FormEvent) => void;
  label?: string;
  value: string;
  placeholder?: string;
  name?: string;
  variant?: 'inline' | 'floating';
}

/**
 *
 * @param props
 * @returns
 */
const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (props, ref) => {
    const {
      name,
      label,
      onChange,
      value = '',
      placeholder,
      variant = 'floating',
      ...forwardedProps
    } = props;

    const doHandleChange = React.useCallback((event: React.FormEvent) => {
      onChange(event);
    }, []);

    return (
      <label>
        {label}
        <input
          name={name}
          ref={ref}
          onChange={(event) => doHandleChange(event)}
          placeholder={placeholder}
          value={value}
          {...forwardedProps}
          css={css`
          ${styles.base};
          ${styles.variant[variant]};
        `}
        ></input>
      </label>
    );
  }
);

export default FormField;
