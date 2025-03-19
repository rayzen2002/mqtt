import { Power } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-auto bg-white">
      <div className="bg-green-500 flex items-center pl-4 text-xl font-bold text-black">LADER-Projetores</div>
      <div className="flex flex-col h-[100vh]">
        <div className="flex items-center justify-center py-2">
            <p className="text-black">Projetor Sala XY</p>
            <Power className="bg-green-300 mx-4 w-8 h-8"/>
          </div>
        <div className="flex items-center justify-center py-2 ">
          <p className="text-black">Projetor Sala XY</p>
          <Power className="bg-green-300 mx-4 w-8 h-8"/>
        </div>
      </div>
    </div>
  );
}
