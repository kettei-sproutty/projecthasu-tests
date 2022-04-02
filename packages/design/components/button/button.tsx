import clsx from 'clsx'
import type { ButtonHTMLAttributes, FC } from 'react'

import styles from './button.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Should the button use the primary theme color?
   */
  primary?: boolean
  /**
   * should the button me large?
   */
  large?: boolean
  /**
   * Which version should the button use?
   * @default 'contained'
   */
  version?: 'outlined' | 'underline' | 'contained' | 'text'
}

const Button: FC<ButtonProps> = ({ primary = true, large = true, children, className, ...props }) => {
  const buttonClasses = clsx(styles.button, className)

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
