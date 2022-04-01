import type { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.module.css'

export type ButtonProps = {
  theme?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ theme = 'primary', children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default Button
