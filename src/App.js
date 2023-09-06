import foto from "./pp.png";
import "./App.css";
import "./input.css";

function App() {
  return (
    <>
      <div className="w-full m-0 bg-slate-300 justify-center flex h-screen items-center flex-col">
        <div className="w-72 bg-slate-500 justify-center flex items-center flex-col h-96 rounded-full">
          <div className="w-72 flex justify-center items-center flex-col bg-slate-50 h-1/3 rounded-t-xl rounded-b-none">
            <img className="w-28 rounded-full" src={foto}></img>
          </div>
          <div className="w-72 flex h-2/3 bg-zinc-500 justify-center items-center flex-col rounded-t-none rounded-b-xl">
            <input
              className="w-64 mb-5 rounded-full px-4 py-2 placeholder:text-gray-400"
              placeholder="Username"
            ></input>
            <input
              className="w-64 mb-5 rounded-full px-4 py-2 placeholder:text-gray-400"
              placeholder="Username"
            ></input>
           
            <div className=" w-full flex m-0 justify-center gap-2 items-center ">
              <div className="w-32 text-center bg-black text-gray-50 border-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:text-black hover:border-slate-950">
                Buton
              </div>
              <div className="w-32 text-center bg-black text-gray-50 border-2 px-4 py-2 rounded-full hover:bg-gray-200 hover:text-black hover:border-slate-950">
                Buton
              </div>
            </div>
            <div className="m-4 text-white" >forget username / Password ?</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
