import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="min-h-12 bg-white w-full flex items-center p-4 text-red-500 shadow">
      <ul>
        <li className="font-bold">LaBuBuDash</li>
      </ul>
    </nav>
    <div className="h-[80vh] bg-red-600 w-full flex items-center justify-center-safe flex-col gap-3"> 
      <h1 className=" text-3xl font-bold text-center">Order food, groceries, and anything else you need from your home.</h1>
      <div className="rounded-full w-[40vw] h-12 shadow-xl bg-white text-gray-400 flex items-center p-4">Enter your address</div>
    </div>
    </>
  );
}
