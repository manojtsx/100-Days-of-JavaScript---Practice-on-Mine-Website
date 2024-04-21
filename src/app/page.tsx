import Link from "next/link";
import { challenges } from "./challenges";
import Head from 'next/head';
import { metadata } from "./layout";
interface Challenge {
    id: number;
    title: string;
    description: string;
    difficulty: string;

}

export default function Home() {
    {metadata.title = "100 Days of JS : Manoj Shrestha"}

    return (
        <main className="w-full overflow-x-hidden flex flex-col items-center px-2">
            <h1 className="text-center font-bold text-3xl py-10">List of the Challenges</h1>
            <ul className="flex flex-col gap-5 w-full md:w-1/2">
                {
                    (challenges as Challenge[]).map((challenge: Challenge, index: number) => {
                        return (
                            <li key={index} className="flex bg-red-500 justify-between p-3 rounded-md">
                                <div className="w-2/3">
                                    <h2 className="text-xl w-full overflow-hidden text-nowrap">{challenge.title}</h2>
                                    <p className="uppercase text-green-200">{challenge.difficulty}</p>
                                </div>
                                <button className="bg-white text-black px-4 py-2 border rounded-md hover:text-white hover:bg-blue-400 hover:border-white transition-colors">
                                    <Link href={`challenge?search=${challenge.id}`}>Solve Now</Link>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    );
}
