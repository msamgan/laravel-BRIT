import NavLink from "@/Components/NavLink.jsx";

export default function SubMenu() {
    return (
        <>
            <li className="flex">
                <NavLink href={route('profile.edit')}
                         className={'text-orange-600'}
                         active={route().current('profile.edit')}>
                    Profile
                </NavLink>
            </li>
            <li className="flex">
                <NavLink href={route('profile.settings')}
                         className={'text-orange-600'}
                         active={route().current('profile.settings')}>
                    Settings
                </NavLink>
            </li>
            <li className="flex">
                <NavLink href={route('profile.danger')}
                         className={'text-orange-600'}
                         active={route().current('profile.danger')}>
                    Danger Zone
                </NavLink>
            </li>
        </>
    )
}
