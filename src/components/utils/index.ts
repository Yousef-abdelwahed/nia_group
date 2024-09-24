import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


export const tailwindMarge =(...input: ClassValue[])=>{
    return twMerge(clsx(...input))
}