import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SubMenu from "@/Pages/Profile/Partials/SubMenu.jsx";
import {Head} from "@inertiajs/react";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm.jsx";

export default function Edit({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Danger Zone</h2>}
            subMenu={<SubMenu/>}
        >
            <Head title="Danger Zone"/>

            <div className="py-12">
                <div className="container mx-auto space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl"/>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
