import {ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <ClerkProvider>
                <SignedOut>
                    <SignInButton mode={"modal"}>
                        <button className={"bg-red-600 p-6 mt-4 ml-4 rounded-2xl border-none"}>
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </ClerkProvider>
        </div>
    );

}