'use client'

import { User } from "@/types/User";
import { useEffect, useState } from "react";

export default function UserClient() {
    const [apiValues, setApiValues] = useState<User[] | null>(null);

    const fetchData = async () => {
        try {
            const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
            const response = await fetch(`${APP_URL}/api/users`);
            const data = await response.json();
            setApiValues(data);
            console.log("Fetched users:", data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return <>
        {apiValues && apiValues.map((user: User) =>
            <div key={user.id}>{user.first_name}</div>)}
    </>;
}