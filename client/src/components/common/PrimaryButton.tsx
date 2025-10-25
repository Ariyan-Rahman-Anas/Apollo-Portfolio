import { Loader2 } from 'lucide-react';
import Link from 'next/link';

import { Button } from '../ui/button';
import { PrimaryButtonPropsI } from '@/types/common.types';

const PrimaryButton = ({
  title,
  type = 'button',
  href,
  icon,
  isNewTab = false,
  variant = 'default',
  isDisabled = false,
  isFullWidth = false,
  onClick,
  isLoading = false,
  loadingTitle,
  className = '',
  iconSide = 'left',
}: PrimaryButtonPropsI) => {
  const buttonContent = (
    <>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && iconSide === 'left' && icon}
      <span>{isLoading ? loadingTitle || title : title}</span>
      {!isLoading && iconSide === 'right' && icon}
    </>
  );

  const buttonClassName = `${isFullWidth ? 'w-full' : ''} ${className}`.trim();
  const isButtonDisabled = isDisabled || isLoading;

  return href && !isLoading ? (
    <Link
      href={href}
      target={isNewTab ? '_blank' : '_self'}
      rel={isNewTab ? 'noopener noreferrer' : undefined}
      className={isFullWidth ? 'w-full block' : 'inline-block'}
    >
      <Button
        type={type}
        variant={variant}
        disabled={isButtonDisabled}
        className={buttonClassName}
      >
        {buttonContent}
      </Button>
    </Link>
  ) : (
    <Button
      type={type}
      variant={variant}
      disabled={isButtonDisabled}
        className={`py-5 text-md ${buttonClassName}`}
      onClick={!isLoading ? onClick : undefined}
    >
      {buttonContent}
    </Button>
  );
};

export default PrimaryButton;
