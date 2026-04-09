export default async function fetchAnimals() {
    try {
        const response = await fetch("./data/data.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching animals:", error);
        return null;
    }
}
