export async function fetchApiData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
