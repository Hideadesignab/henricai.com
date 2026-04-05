'use client'

import { useState, FormEvent } from 'react'
import styles from './BookDemoForm.module.css'

interface FormData {
  firstName: string
  lastName: string
  email: string
  companyName: string
  country: string
  jobTitle: string
  organisationType: string
  portfolioSize: string
  phone: string
  howDidYouHear: string
  marketingConsent: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  companyName?: string
  country?: string
  jobTitle?: string
  organisationType?: string
  portfolioSize?: string
  howDidYouHear?: string
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  country: '',
  jobTitle: '',
  organisationType: '',
  portfolioSize: '',
  phone: '',
  howDidYouHear: '',
  marketingConsent: false,
}

export function BookDemoForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!formData.country) newErrors.country = 'Country is required'
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
    if (!formData.organisationType) newErrors.organisationType = 'Organisation type is required'
    if (!formData.portfolioSize) newErrors.portfolioSize = 'Portfolio size is required'
    if (!formData.howDidYouHear.trim()) newErrors.howDidYouHear = 'This field is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // TODO: Connect to backend/email service
    console.log('Form submitted:', formData)
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof FormErrors]) {
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
      <h1 className={styles.formTitle}>Book a demo</h1>

      {/* Row 1: First Name / Last Name */}
      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="firstName">
            First Name: <span className={styles.required}>*</span>
          </label>
          <input
            id="firstName"
            type="text"
            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange('firstName')}
          />
          {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="lastName">
            Last Name: <span className={styles.required}>*</span>
          </label>
          <input
            id="lastName"
            type="text"
            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange('lastName')}
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
        </div>
      </div>

      {/* Row 2: Email / Company Name */}
      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">
            Email Address: <span className={styles.required}>*</span>
          </label>
          <input
            id="email"
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="Business Email Address"
            value={formData.email}
            onChange={handleChange('email')}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="companyName">
            Company Name: <span className={styles.required}>*</span>
          </label>
          <input
            id="companyName"
            type="text"
            className={`${styles.input} ${errors.companyName ? styles.inputError : ''}`}
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange('companyName')}
          />
          {errors.companyName && <p className={styles.error}>{errors.companyName}</p>}
        </div>
      </div>

      {/* Row 3: Country / Job Title */}
      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="country">
            Country: <span className={styles.required}>*</span>
          </label>
          <select
            id="country"
            className={`${styles.select} ${errors.country ? styles.inputError : ''}`}
            value={formData.country}
            onChange={handleChange('country')}
          >
            <option value="">Select...</option>
            <option value="sweden">Sweden</option>
            <option value="norway">Norway</option>
            <option value="denmark">Denmark</option>
            <option value="finland">Finland</option>
            <option value="germany">Germany</option>
            <option value="netherlands">Netherlands</option>
            <option value="united-kingdom">United Kingdom</option>
            <option value="france">France</option>
            <option value="spain">Spain</option>
            <option value="switzerland">Switzerland</option>
            <option value="other">Other</option>
          </select>
          {errors.country && <p className={styles.error}>{errors.country}</p>}
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="jobTitle">
            Job Title: <span className={styles.required}>*</span>
          </label>
          <input
            id="jobTitle"
            type="text"
            className={`${styles.input} ${errors.jobTitle ? styles.inputError : ''}`}
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange('jobTitle')}
          />
          {errors.jobTitle && <p className={styles.error}>{errors.jobTitle}</p>}
        </div>
      </div>

      {/* Row 4: Organisation Type / Portfolio Size */}
      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="organisationType">
            Organisation Type: <span className={styles.required}>*</span>
          </label>
          <select
            id="organisationType"
            className={`${styles.select} ${errors.organisationType ? styles.inputError : ''}`}
            value={formData.organisationType}
            onChange={handleChange('organisationType')}
          >
            <option value="">Select...</option>
            <option value="commercial-real-estate">Commercial Real Estate Company</option>
            <option value="residential-real-estate">Residential Real Estate Company</option>
            <option value="property-management">Property Management Company</option>
            <option value="asset-manager">Asset Manager / Fund Manager</option>
            <option value="real-estate-developer">Real Estate Developer</option>
            <option value="advisory">Real Estate Advisory / Consultancy</option>
            <option value="bank-lender">Bank / Lender</option>
            <option value="other">Other</option>
          </select>
          {errors.organisationType && <p className={styles.error}>{errors.organisationType}</p>}
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="portfolioSize">
            Portfolio Size: <span className={styles.required}>*</span>
          </label>
          <select
            id="portfolioSize"
            className={`${styles.select} ${errors.portfolioSize ? styles.inputError : ''}`}
            value={formData.portfolioSize}
            onChange={handleChange('portfolioSize')}
          >
            <option value="">Select...</option>
            <option value="1-500">1–500 units</option>
            <option value="500-2000">500–2,000 units</option>
            <option value="2000-5000">2,000–5,000 units</option>
            <option value="5000-10000">5,000–10,000 units</option>
            <option value="10000+">10,000+ units</option>
          </select>
          {errors.portfolioSize && <p className={styles.error}>{errors.portfolioSize}</p>}
        </div>
      </div>

      {/* Phone Number */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="phone">
          Phone Number:
        </label>
        <input
          id="phone"
          type="tel"
          className={styles.input}
          value={formData.phone}
          onChange={handleChange('phone')}
        />
      </div>

      {/* How did you hear about us? */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="howDidYouHear">
          How did you hear about us? <span className={styles.required}>*</span>
        </label>
        <textarea
          id="howDidYouHear"
          className={`${styles.textarea} ${errors.howDidYouHear ? styles.inputError : ''}`}
          value={formData.howDidYouHear}
          onChange={handleChange('howDidYouHear')}
          rows={3}
        />
        {errors.howDidYouHear && <p className={styles.error}>{errors.howDidYouHear}</p>}
      </div>

      {/* Marketing consent */}
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={formData.marketingConsent}
          onChange={(e) => setFormData(prev => ({ ...prev, marketingConsent: e.target.checked }))}
        />
        <span className={styles.checkboxText}>
          Yes, I would like to receive marketing communications regarding Henric&apos;s products, services, and events. I can unsubscribe at any time
        </span>
      </label>

      {/* Privacy */}
      <p className={styles.privacyText}>
        For details about how we collect, use, and protect your information, please see our{' '}
        <a href="/legal/privacy" className={styles.privacyLink}>Privacy Policy</a>.
      </p>

      {/* Submit */}
      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Form'}
      </button>
    </form>
  )
}
