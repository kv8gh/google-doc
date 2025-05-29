"use server";

import {auth, clerkClient} from "@clerk/nextjs/server";

interface orgType {
    id: string,
    role: string,
    slg: string,
}

export async function getUsers(){
    const {sessionClaims} = await auth();
    const clerk = await clerkClient();

    const org = sessionClaims?.o as orgType;

    const response = await clerk.users.getUserList({
        organizationId: [org.id as string]
    });

    const users = response.data.map((user)=>({
        id:user.id,
        name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
        avatar: user.imageUrl,
    }));

    return users;
}