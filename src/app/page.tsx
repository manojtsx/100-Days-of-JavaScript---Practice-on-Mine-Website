
import Link from "next/link";
import {challenges} from "./challenges";
interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: string;

}

export default function Home() {
  return (
  <main>
    <h1 className="text-center font-bold text-3xl py-10">List of the Challenges</h1>
    <ul className="flex flex-col gap-5 items-center">
      {
        (challenges as Challenge[]).map((challenge:Challenge,index:number)=>{
          return (
            <li key={index} className="flex items-center justify-between gap-48">
              <div>

              <h2 className="text-xl">{challenge.title}</h2>
              <p>{challenge.difficulty}</p>
              </div>
              <button  className="bg-white text-black px-4 py-2 border rounded-md"><Link href={`challenge?search=${challenge.id}`}>Solve Now</Link></button>
            </li>
          )
        })
      }
    </ul>
  </main>
  );
}
