import { forwardRef } from 'react'
import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'
import styles from './input.module.css'

export type InputProps = {
  name: string
  label: string
  autoComplete?: string
  id?: string
  error?: FieldError
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, id, label, error, ...props }, ref) => {
  const inputClasses = clsx(styles.input, {
    [styles['input--success']]: !error,
    [styles['input-error']]: error,
  })

  const labelClasses = clsx(styles['input-label'], {
    [styles['input-label--success']]: !error,
    [styles['input-label--error']]: error,
  })

  return (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <input ref={ref} type='text' name={name} id={id ?? name} className={inputClasses} {...props} />
      {error && (
        <p data-testid={`${name}-error`} className={styles['input-error__message']}>
          {error.message}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'InputComponent'

export default Input
