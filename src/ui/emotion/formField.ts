import { SerializedStyles, css } from '@emotion/react';

interface FormFieldStyles {
  base: SerializedStyles;
  variant: Record<'floating' | 'inline', SerializedStyles>;
  type?: 'input' | 'checkbox' | 'radio' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

const formField: FormFieldStyles = {
  base: css`
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;

    &:enabled {
      cursor: pointer;
    }
  `,

  variant: {
    inline: css``,
    floating: css`
    label:has(input) {
      position: absolute;
      top: 2rem;
    }
    `
  },
};

export default formField;
