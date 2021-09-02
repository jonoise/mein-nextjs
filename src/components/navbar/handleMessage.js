export const handleQueryMessage = async (routerAsPath, setMessage) => {
    const query = routerAsPath.slice(1).split('?')[1]
    const searchParams = new URLSearchParams(query)
    const error = searchParams.get('error')
    const success = searchParams.get('success')
    setMessage(error ? error : null)
}