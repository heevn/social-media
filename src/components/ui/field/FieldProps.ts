import { LucideIcon } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	error?: FieldError
	Icon?: LucideIcon;
}