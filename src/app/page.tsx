import { BusinessCard } from "@/_components/BusinessCard";
import { NavBar } from "@/_components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="h-[80vh] bg-red-600 w-full flex items-center justify-center-safe flex-col gap-3"> 
      <h1 className=" text-3xl font-bold text-center">Order food, groceries, and anything else you need from your home.</h1>
      <div className="rounded-full w-[40vw] h-12 shadow-xl bg-white text-gray-400 flex items-center p-4">Enter your address</div>
    </div>
    <div className="min-h-[80vh] w-full flex justify-center flex-col p-4 gap-3">
      <h1 className="text-3xl font-bold">All the best businesses are on it.</h1>
      <div className="space-x-3 space-y-3 flex flex-row">
      <BusinessCard id={"labubu-1"} title="LaBuBu Store" />
      <BusinessCard id={"labubu-1"} title="LaBuBu Store" />
      <BusinessCard id={"labubu-1"} title="LaBuBu Store" />
      </div>
    </div>
    </>
  );
}
