"use client"
import { useSearchParams } from "next/navigation";
import { challenges } from "@/app/challenges";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";

export default function Challenge() {
    const searchParams = useSearchParams();
    const search = searchParams.get("search");

    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    useEffect(() => {
        challenges.forEach((challenge) => {
            if (challenge.id == Number(search)) {
                setCode(challenge.placeholder);
            }
        });
    }, [search]);

    const runCode = () => {
        try {
            const result = eval(code);
            setOutput(result);
        } catch (error: any) {
            setOutput('Error: ' + error.message);
        }
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main className="px-2 overflow-x-hidden">
                {
                    challenges.map((challenge, index) => {
                        if (challenge.id == Number(search)) {
                            return (
                                <div className="flex flex-col justify-evenly md:gap-16 md:flex-row" key={index}>
                                    <div className="md:w-1/2 resize-x">
                                        <h1 className="text-center font-bold text-3xl py-10">
                                            {document.title = challenge.title}

                                        </h1>
                                        <p className="text-center uppercase text-green-200">{challenge.difficulty}</p>
                                        <p className="text-center">{challenge.description}</p>
                                    </div>

                                    <div className="md:w-1/2">
                                        <h1 className="text-center font-bold text-3xl py-10">Playground</h1>
                                        <textarea value={code}
                                            onChange={(e) => setCode(e.target.value)} className="w-full h-64 p-4 border rounded shadow text-black"></textarea>
                                        <button onClick={runCode} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Run</button>
                                        <p className="py-4 text-green-300">Output: </p>
                                        <div id="output" className=" p-4 border rounded shadow">{output}</div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {/* Create a coding playground here for writing JavaScript code*/}
                <Link href="/">Go To Home</Link>
            </main>
        </Suspense>
    );
}