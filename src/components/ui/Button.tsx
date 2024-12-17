import { ReactElement } from "react";

interface ButtonProps {
    variant: Variants
    size: "sm" | 'md' | 'lg';
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    onKeyDown?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
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

    const width = props.fullWidth ? "w-full flex justify-center" : "";
    const loading = props.loading ? "opacity-45 cursor-progress" : "";
    
    return <button onClick={props.onClick} onKeyDown={props.onKeyDown} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${width} ${loading}`}>
        <div className="flex items-center font-medium">
            {props.startIcon}
            <div className="pl-2 pr-2"> 
                {props.text}
            </div> 
            {props.endIcon}
        </div>
    </button>
}