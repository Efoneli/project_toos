export default async function ProductsDetails({ params, }: { params: Promise<{ productId: string }>}) {
    const productId = (await params).productId
    return(
        <div>
            <h1>Products details {productId} </h1>
        </div>
    )
}