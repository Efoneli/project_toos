import { Metadata } from "next"

type Props = {
    params: Promise<{ productId: string }>
}

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const id = (await params). productId
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`)
        }, 100)
    })
return {
    title: `Product ${title}`,
}
)
}


export default async function ProductsDetails({ params, }: { params: Promise<{ productId: string }>}) {
    const productId = (await params).productId
    return(
        <div>
            <h1>Products details {productId} </h1>
        </div>
    )
}