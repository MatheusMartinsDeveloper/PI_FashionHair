import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode,
    className: string,
    href: Url,
    onClick?: () => void
}

export default function ButtonComponent({ children, className, href, onClick }: ButtonProps) {
    return (
        <Link onClick={onClick} className={className} href={href}>{children}</Link>
    );
}