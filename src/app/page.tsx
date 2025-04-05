import {SignedIn, SignedOut, SignIn, SignInButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
   <div>
       <SignedOut>
           <SignInButton mode={"modal"}>
               <Button>Login</Button>
           </SignInButton>
       </SignedOut>

       <SignedIn>
           <UserButton/>
       </SignedIn>

       <Button variant={"secondary"}>
           Click Me
       </Button>
   </div>
  );
}
