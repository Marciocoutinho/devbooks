import { Container } from './AlertBanner.styles'

import { ReactComponent as ExclamationCircleIcon } from '../../icons/exclamation-circle.svg'
import { ReactComponent as ExclamationTriangleIcon } from '../../icons/exclamation-triangle.svg'
import { ReactComponent as CheckCircleIcon } from '../../icons/check-circle.svg'

export type AlertBannerVariants = 'success' | 'error' | 'warning'

interface AlertBannerProps {
  variant?: AlertBannerVariants
  message: string
}

const icons = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon
}

export function AlertBanner({
  variant = 'success',
  message
}: AlertBannerProps) {
  const Icon = icons[variant]
  return (
    <Container variant={variant}>
      <Icon />
      {message}
    </Container>
  )
}
