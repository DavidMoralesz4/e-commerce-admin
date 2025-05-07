import { auth } from "@/auth";
import ButtonAccount from "../button-account-component/ButtonAccount.client";


export default async function ButtonAccountServer() {
  const session = await auth();


  return <ButtonAccount session={session}/>
}
