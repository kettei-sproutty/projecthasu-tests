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
}

const Button: FC<ButtonProps> = ({ primary = true, large = false, children, className, ...props }) => {
  const buttonClasses = clsx(styles.button, {
    [styles['button--primary']]: primary,
    [styles['button--secondary']]: !primary,
    [styles['button--large']]: large,
  })

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
