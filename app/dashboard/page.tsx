"use client";
import { User } from "@/types";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { useEffect, useState } from "react";

const DashboardTile = ({ name, path }: { name: string, path: string }) => {
    return (
        <Link href={path}>
            <div style={{
                width: '300px',
                height: '100px',
                background: 'linear-gradient(to right, blue, lightblue)',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
            }} className="my-7">
                {name}
            </div>
        </Link>
    );
}

export default function Dashboard() {
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        // Retrieve user data from localStorage
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
        else {
            // Redirect the user back to the home page
            redirect('/');
        }
    }, []);
    const [searchValue, setSearchValue] = useState("");
    if (!userData) {
        return <div>loading...</div>
    }


    return (
        <main className="w-[100%] items-center justify-center">
            <div className="bg-blue items-center justify-center">
                <Link href='/'>← Sign Out</Link>
                <h3>Welcome back, {userData.firstName}</h3>
                <p>Your location is {userData.city}, {userData.state}</p>
            </div>
            <div className="bg-white items-center justify-center">

                <div>
                    <p>New search</p>
                    <input
                        type="text"
                        className="m-2 text-black border-2 border-solid border-blue-500"
                        value={searchValue}
                        placeholder="Ex: Knee replacement"
                        required={true}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <div className="flex-flex-col">
                    <DashboardTile name="Prescription" path="/prescription" />
                    <DashboardTile name="Procedures" path="/procedures" />
                </div>
            </div>
        </main>
    );
}