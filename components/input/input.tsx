import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

export type InputProps = {
  name: string
  label: string
  autoComplete?: string
  id?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, id, label, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={name} className={styles['input-label']}>
        {label}
      </label>
      <input ref={ref} type='text' name={name} id={id ?? name} className={styles.input} {...props} />
    </div>
  )
})

Input.displayName = 'InputComponent'

export default Input
