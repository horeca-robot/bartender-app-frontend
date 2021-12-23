export default async function(promise)
{
    try {
        const response = await promise;
        return [response, null];
    } catch(error) {
        return [null, error];
    }
}
