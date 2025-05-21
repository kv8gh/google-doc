import Link from "next/link";

export default function Home(){
  return(
    <div className="flex min-h-screen items-center justify-center">
      Click <Link href="/document/123">
        &nbsp;<span className="text-blue-500 underline">here</span>&nbsp;
      </Link>
      to go to document ID
    </div>
  )
}