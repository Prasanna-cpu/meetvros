import { SignedOut, SignInButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
   <div>
       <SignedOut>
           <SignInButton mode={"modal"}>
               <Button>Login</Button>
           </SignInButton>
       </SignedOut>
   </div>
  );
}
