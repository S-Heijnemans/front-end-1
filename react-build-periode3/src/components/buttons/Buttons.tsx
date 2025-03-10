interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    lable?: string
}

export function ButtonRounded({onClick, lable}: ButtonProps) {
    return(
        <button 
        className="w-[120px] justify-center items-center bg-white rounded-[20px]"
        onClick={onClick}
        >
            {lable}
            </button>
    )
}

export function Button({onClick, lable}: ButtonProps) {
    return(
        <button 
        className="w-[120px] justify-center items-center bg-white"
        onClick={onClick}
        >
            {lable}
        </button>
    )
}