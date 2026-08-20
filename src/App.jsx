import { useState } from "react";
import { RotateCcw, Minus, Plus } from "lucide-react";
 function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0)
  };

  const minimum = count === 0

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-sky-400 via-violet-400 to-pink-500 p-6">

      <div className="w-full max-w-xs rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl px-8 py-10 text-center">

        <h1 className="text-white text-2xl font-extrabold">
          COUNTER
        </h1>

        <p className="mt-1 h-5 text-sm font-medium text-white/90">
          {minimum && "Minimum limit reached"}
        </p>

        <div className="my-6 text-white font-extrabold text-8xl leading-none tabular-nums">
          {count}
        </div>

        <button
          onClick={reset}
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400 text-white shadow-lg hover:bg-orange-500 active:scale-90 transition"
        >
          <RotateCcw size={22} strokeWidth={2.5} />
        </button>

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={decrement}
            disabled={minimum}
            className="flex items-center justify-center p-6 rounded-4xl bg-pink-500/90 text-white text-4xl font-bold shadow-lg hover:bg-pink-600 active:scale-80 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Minus />
          </button>

      
          <button
            onClick={increment}
          
            className="flex  items-center justify-center p-6 font-bold rounded-4xl bg-pink-500/90 text-white text-4xl  shadow-lg hover:bg-pink-600 active:scale-80 transition"
          >
            <Plus />
          </button>

        </div>
      </div>
    </div>
  );
}
export default App