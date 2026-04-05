'use client'

import { useState, FormEvent } from 'react'
import styles from './ContactForm.module.css'

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // TODO: Connect to backend/email service (e.g., Resend, SendGrid, or Notion API)
    console.log('Form submitted:', formData)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <h2 className={styles.successTitle}>Thank you!</h2>
          <p className={styles.successText}>
            We&apos;ll be in touch within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="firstName">
          First Name <span className={styles.required}>*</span>
        </label>
        <input
          id="firstName"
          type="text"
          className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
          value={formData.firstName}
          onChange={handleChange('firstName')}
        />
        {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="lastName">
          Last Name <span className={styles.required}>*</span>
        </label>
        <input
          id="lastName"
          type="text"
          className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
          value={formData.lastName}
          onChange={handleChange('lastName')}
        />
        {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="email">
          Email <span className={styles.required}>*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          value={formData.email}
          onChange={handleChange('email')}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="message">
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          value={formData.message}
          onChange={handleChange('message')}
          placeholder="How can we help?"
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>

      <div className={styles.privacySection}>
        <p className={styles.privacyText}>
          Henric will use your information to respond to your inquiry. Learn more in our{' '}
          <a href="/legal/privacy" className={styles.privacyLink}>Privacy Policy</a>.
        </p>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Send message'}
      </button>
    </form>
  )
}
