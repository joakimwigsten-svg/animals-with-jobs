import { IAnimal } from "../modules/IAnimal";

export default async function fetchAnimals(): Promise<IAnimal[] | null> {
    try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IAnimal[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching animals:", error);
        return null;
    }
}