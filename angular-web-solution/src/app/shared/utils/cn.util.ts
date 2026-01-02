import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
    return twMerge(clsx(args));
}
//!-- [class]="cn('p-4', isActive ? 'bg-blue-500' : 'bg-gray-200', 'text-lg font-semibold')" -->
