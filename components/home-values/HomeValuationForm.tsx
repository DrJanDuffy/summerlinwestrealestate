'use client'

import { useState, useEffect, useId, useCallback } from 'react'
import styles from './HomeValuationForm.module.css'

interface PropertyData {
  address: string
  propertyType: string
  bedrooms: number
  bathrooms: number
  squareFootage: number
  yearBuilt: number
  features: string[]
}

interface HomeValuationFormProps {
  className?: string
}

const propertyTypes = [
  'Single Family Home',
  'Condo',
  'Townhome',
  'Multi-Family',
  'Mobile Home',
  'Other'
]

const specialFeatures = [
  'Swimming Pool',
  'Garage (2+ cars)',
  'Updated Kitchen',
  'Updated Bathrooms',
  'Hardwood Floors',
  'Granite Countertops',
  'Stainless Steel Appliances',
  'Central Air',
  'Fireplace',
  'Mountain Views',
  'Golf Course Views',
  'Corner Lot',
  'Cul-de-sac',
  'Gated Community'
]

export default function HomeValuationForm({ className }: HomeValuationFormProps) {
  const [formData, setFormData] = useState<PropertyData>({
    address: '',
    propertyType: '',
    bedrooms: 0,
    bathrooms: 0,
    squareFootage: 0,
    yearBuilt: 0,
    features: []
  })

  const [estimatedValue, setEstimatedValue] = useState<number>(0)
  const [isCalculating, setIsCalculating] = useState(false)

  // Generate unique IDs for form elements
  const addressId = useId()
  const propertyTypeId = useId()
  const bedroomsId = useId()
  const bathroomsId = useId()
  const squareFootageId = useId()
  const yearBuiltId = useId()

  const handleInputChange = (field: keyof PropertyData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const calculateEstimatedValue = useCallback(() => {
    setIsCalculating(true)
    
    // Simulate API call delay
    setTimeout(() => {
      // Basic calculation based on Las Vegas market data
      let baseValue = 0
      
      if (formData.propertyType === 'Single Family Home') {
        baseValue = formData.squareFootage * 180 // $180/sqft average
      } else if (formData.propertyType === 'Condo') {
        baseValue = formData.squareFootage * 160 // $160/sqft average
      } else if (formData.propertyType === 'Townhome') {
        baseValue = formData.squareFootage * 170 // $170/sqft average
      } else {
        baseValue = formData.squareFootage * 150 // $150/sqft average
      }

      // Adjust for bedrooms/bathrooms
      baseValue += (formData.bedrooms * 5000) + (formData.bathrooms * 3000)

      // Adjust for year built (newer = higher value)
      const currentYear = new Date().getFullYear()
      const ageAdjustment = (currentYear - formData.yearBuilt) * -200
      baseValue += ageAdjustment

      // Add feature premiums
      const featurePremiums: { [key: string]: number } = {
        'Swimming Pool': 25000,
        'Garage (2+ cars)': 15000,
        'Updated Kitchen': 20000,
        'Updated Bathrooms': 15000,
        'Hardwood Floors': 10000,
        'Granite Countertops': 8000,
        'Stainless Steel Appliances': 5000,
        'Central Air': 8000,
        'Fireplace': 5000,
        'Mountain Views': 30000,
        'Golf Course Views': 40000,
        'Corner Lot': 10000,
        'Cul-de-sac': 8000,
        'Gated Community': 15000
      }

      formData.features.forEach(feature => {
        baseValue += featurePremiums[feature] || 0
      })

      setEstimatedValue(Math.round(baseValue))
      setIsCalculating(false)
    }, 1500)
  }, [formData.propertyType, formData.squareFootage, formData.bedrooms, formData.bathrooms, formData.yearBuilt, formData.features])

  useEffect(() => {
    if (formData.squareFootage > 0 && formData.propertyType) {
      calculateEstimatedValue()
    }
  }, [formData.squareFootage, formData.propertyType, calculateEstimatedValue])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className={`${styles.valuationForm} ${className || ''}`}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Get Your FREE Home Valuation</h2>
        <p className={styles.formSubtitle}>
          Enter your property details below for an instant market estimate
        </p>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor={addressId} className={styles.label}>
              Property Address *
            </label>
            <input
              type="text"
              id={addressId}
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Enter your Las Vegas property address"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor={propertyTypeId} className={styles.label}>
                Property Type *
              </label>
              <select
                id={propertyTypeId}
                value={formData.propertyType}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
                className={styles.select}
                required
              >
                <option value="">Select Property Type</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor={yearBuiltId} className={styles.label}>
                Year Built
              </label>
              <input
                type="number"
                id={yearBuiltId}
                value={formData.yearBuilt || ''}
                onChange={(e) => handleInputChange('yearBuilt', parseInt(e.target.value) || 0)}
                placeholder="e.g., 2010"
                className={styles.input}
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor={bedroomsId} className={styles.label}>
                Bedrooms
              </label>
              <input
                type="number"
                id={bedroomsId}
                value={formData.bedrooms || ''}
                onChange={(e) => handleInputChange('bedrooms', parseInt(e.target.value) || 0)}
                placeholder="3"
                className={styles.input}
                min="0"
                max="10"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor={bathroomsId} className={styles.label}>
                Bathrooms
              </label>
              <input
                type="number"
                id={bathroomsId}
                value={formData.bathrooms || ''}
                onChange={(e) => handleInputChange('bathrooms', parseFloat(e.target.value) || 0)}
                placeholder="2.5"
                className={styles.input}
                min="0"
                max="10"
                step="0.5"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor={squareFootageId} className={styles.label}>
                Square Footage *
              </label>
              <input
                type="number"
                id={squareFootageId}
                value={formData.squareFootage || ''}
                onChange={(e) => handleInputChange('squareFootage', parseInt(e.target.value) || 0)}
                placeholder="2,500"
                className={styles.input}
                min="100"
                max="20000"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <fieldset>
              <legend className={styles.label}>Special Features</legend>
              <div className={styles.featuresGrid}>
                {specialFeatures.map(feature => (
                  <label key={feature} className={styles.featureLabel}>
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkboxText}>{feature}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {estimatedValue > 0 && (
            <div className={styles.estimatedValue}>
              <h3 className={styles.valueTitle}>Estimated Market Value</h3>
              <div className={styles.valueAmount}>
                {isCalculating ? (
                  <div className={styles.loading}>Calculating...</div>
                ) : (
                  formatCurrency(estimatedValue)
                )}
              </div>
              <p className={styles.valueDisclaimer}>
                * This is an estimate based on market data. For a professional valuation, contact Dr. Jan Duffy.
              </p>
            </div>
          )}

          <a 
            href="tel:702-222-1964" 
            className={styles.ctaButton}
            aria-label="Call Dr. Jan Duffy for professional home valuation"
          >
            Get Professional Valuation: 702-222-1964
          </a>
        </form>
      </div>
    </div>
  )
}
