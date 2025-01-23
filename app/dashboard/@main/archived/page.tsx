import Link from "next/link";

export default function Archived() {
    return(
        <>
        <h1>this is archived</h1>
<div>
    <Link href={'/dashboard'}>go to Default</Link>
</div>
        </>
    )
}