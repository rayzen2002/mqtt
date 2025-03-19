'use client'
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

export default function Home() {
  async function buttonPress() {
    const response = await fetch('http://localhost:3000/api/mqtt')
    const responseData = await response.json()
    console.log(responseData)
  }
  return (
    <div className="flex flex-col h-auto bg-white">
      <div className="bg-green-500 flex items-center pl-4 text-xl font-bold text-black">LADER-Projetores</div>
      <div className="flex flex-col h-[100vh]">
        <div className="flex items-center justify-center py-2">
            <p className="text-black">Projetor Sala XY</p>
            <Button onClick={buttonPress}>
  <Power className="bg-green-300 mx-4 w-8 h-8" />
</Button>
          </div>
        <div className="flex items-center justify-center py-2 ">
          <p className="text-black">Projetor Sala XY</p>
          <Button onClick={buttonPress}>
  <Power className="bg-green-300 mx-4 w-8 h-8" />
</Button>
          
        </div>
      </div>
    </div>
  );
}
