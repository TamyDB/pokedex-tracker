import type { ReactNode } from 'react'
import { themes } from '~/styles/themes'

type ButtonProps = {
    children: ReactNode
    title?: string
    onClick?: () => void
}

export default function Button({ children, title, onClick }: ButtonProps) {
    const theme = themes.gastly

    return (
        <button
            className="text-white font-bold py-1.5 px-1.5 rounded shadow-lg"
            style={{ backgroundColor: theme.primary }}
            title={title}
            onClick={onClick}
        >
            {children}
        </button>
    )
}