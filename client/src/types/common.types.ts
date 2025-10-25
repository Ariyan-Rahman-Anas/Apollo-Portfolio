/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { UseFormRegister } from 'react-hook-form';

export interface PrimaryButtonPropsI {
    type: 'button' | 'submit';
    title: string;
    loadingTitle?: string;
    onClick?: (e: React.MouseEvent) => void;
    href?: string | any;
    variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost';
    icon?: ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    isFullWidth?: boolean;
    isNewTab?: boolean;
    className?: string;
    iconSide?: 'left' | 'right';
}

export interface SectionHeaderPropsI{
    icon: ReactNode;
    title: string
}


export interface InputFieldI {
  type: string;
  name: string;
  register: UseFormRegister<any>;
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  error?: string;
  defaultValue?: string;
  isReadOnly?: boolean;
}