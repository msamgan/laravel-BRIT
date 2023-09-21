import {Link} from '@inertiajs/react';

export default function NavLink({active = false, className = '', children, ...props}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 text-lg text-white font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                className
            }
        >
            <span className={
                active ? 'bg-orange-500 p-2 rounded-md text-white' : 'hover:bg-orange-500 hover:text-white p-2 rounded-md'
            }>
                {children}
            </span>
        </Link>
    );
}
