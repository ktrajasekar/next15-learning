import { User } from "@/types/User";
import clsx from "clsx";
async function fetchUserData(): Promise<User[]> {
    const APP_URL = process.env.APP_URL;
    const response = await fetch(`${APP_URL}/api/users`);
    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }
    return response.json();
}

export default async function UserPage() {
    const userData = await fetchUserData();
    console.log(userData)
    const selectedTheme = false;

    return (
        <div className="min-h-screen p-4">
            <div className={clsx("mb-4", {
                ["bg-blue-600"]: selectedTheme
            })}>
                <table className="table-fixed">
                    <thead>
                        <tr className="bg-gray-200 p-4">
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user: User) => (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.date_of_birth}</td>
                                <td>{user.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

{/* <div className={`mb-4 ${selectedTheme ? "bg-blue-600" : "bg-gray-100"}`}> */ }