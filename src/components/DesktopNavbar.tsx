import React from 'react'
import {currentUser} from "@clerk/nextjs/server";
import ModeToggle from "@/components/ModeToggle";
import {Button} from "@/components/ui/button";
import {HomeIcon} from "lucide-react";
import Link from "next/link";
import {BellIcon} from "lucide-react";
import {SignInButton} from "@clerk/nextjs";
import {UserButton} from "@clerk/nextjs";
import {UserIcon} from "lucide-react";
async function DesktopNavbar() {
    const user = await currentUser()
    console.log(user)
    return (
        <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />

            <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/">
                    <HomeIcon className="w-4 h-4" />
                    <span className="hidden lg:inline">Home</span>
                </Link>
            </Button>

            {user ? (
                <>
                    <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link href="/notifications">
                            <BellIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Notifications</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link
                            href={`/profile/${
                                user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]
                            }`}
                        >
                            <UserIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Profile</span>
                        </Link>
                    </Button>
                    <UserButton />
                </>
            ) : (
                <SignInButton mode="modal">
                    <Button variant="default">Sign In</Button>
                </SignInButton>
            )}
        </div>
    )
}

export default DesktopNavbar
