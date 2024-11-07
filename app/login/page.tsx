import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* {ESQUERDA } */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance Plat"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Welcome</h1>
        <p className="mb-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi
          sapien, tempus sit amet interdum et, rhoncus sed massa. Maecenas eu
          metus dolor. Sed fermentum orci a tristique cursus. Mauris suscipit
          metus et leo volutpat egestas. Praesent elementum accumsan augue, et
          blandit felis mollis eu. Curabitur fringilla a nulla sed lobortis. Sed
          consequat scelerisque velit, sit amet hendrerit libero sagittis
          sodales. Donec pellentesque feugiat cursus.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          SignIn or SignUp
        </Button>
      </div>
      {/* { DIREITA} */}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
