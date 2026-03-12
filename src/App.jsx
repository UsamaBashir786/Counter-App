import { MinusCircle, PlusCircle, RotateCcw } from "lucide-react";
import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0)
   function increaseNum() {
    setNum(num + 1)
  }
  function decreaseNum() {
    setNum(num - 1)
  }
  function resetNum() {
    setNum(0)
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50">
      
      {/* Main Content - Center */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-center font-medium text-2xl text-gray-700 mb-4">Simple Counter</h3>
          <div className="flex flex-col items-center bg-white w-70 h-55 rounded-xl shadow-lg border border-gray-200">
            <h1 className="text-gray-800 font-light text-9xl mt-4">{num}</h1>
            <div className="flex gap-2 m-5">
              <button onClick={increaseNum} className="cursor-pointer flex items-center gap-1.5 font-medium text-lg bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
                <PlusCircle className="w-5 h-5" />
              </button>
              <button onClick={decreaseNum} className="cursor-pointer flex items-center gap-1.5 font-medium text-lg bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
                <MinusCircle className="w-5 h-5" />
              </button>
              <button onClick={resetNum} className="cursor-pointer flex items-center gap-1.5 font-medium text-lg bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-3">
              <p className="text-gray-400 text-sm">The counter value is {num}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - macOS Style */}
      <footer className="w-full bg-white/80 backdrop-blur-sm border-t border-gray-200 py-4">
        <div className="flex justify-center items-center gap-6 text-sm">
          <span className="text-gray-500">© 2026 Simple Counter</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">Made with ❤️ by Usama</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 text-xs">Value: {num}</span>
        </div>
      </footer>

    </div>
  );
};

export default App;