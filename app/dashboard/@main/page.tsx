import Link from 'next/link';


export default function MainSection() {

    return(
        <div className="bg-blue-500">
            <h1>main section here</h1>
            <div>
                <Link href='/dashboard/archived'>Archived</Link>
            </div>
        </div>
    )
}