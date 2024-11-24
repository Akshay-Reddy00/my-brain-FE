import { ReactElement } from "react";

interface ButtonProps {
    variant: Variants
    size: "sm" | 'md' | 'lg';
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}

type Variants = "primary" | "secondary"

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-8"
}

const defaultStyles = 'rounded-md flex'

export const Button = (props: ButtonProps) => {
    
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        <div className="flex items-center font-medium">
            {props.startIcon}
            <div className="pl-2 pr-2"> 
                {props.text}
            </div> 
            {props.endIcon}
        </div>
    </button>
}