function Button({
    children,
    disabled,
    icon,
    onClick,
    title = '',
    type = 'button',
}) {
    return <button
        className='border-2 border-stone-800 font-bold text-lg p-2 rounded-xl flex gap-1 hover:bg-stone-800 hover:text-stone-100 active:bg-stone-800 active:text-stone-100'
        disabled={disabled}
        onClick={onClick}
        title={title}
        type={type}
    >
        <span>{icon}</span>
        <span>{children}</span>
    </button>
}

export default Button;
