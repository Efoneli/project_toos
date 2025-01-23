export default async function Blog() {
await new Promise((resolve) => {
    setTimeout(() => {
        resolve('intentional delay')
    }, 2000)
})

    return <h1>Blog page</h1>
}