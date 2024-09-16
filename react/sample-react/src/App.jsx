export default function App() {
  return (
    <>
    <div className="h-screen w-screen flex justify-center items-center bg-purple-600">
      <div className="h-3/6 w-[20rem]  bg-purple-400  rounded-md flex flex-col justify-center items-center gap-4">
      <input
        type="text"
        placeholder="NAME"
        className="hover:border-b-4 hover:border-b-purple-500 rounded-sm "
      />
      <input type="number" placeholder="AGE" className="hover:border-b-4 hover:border-b-purple-500 rounded-sm  p"/>
      <input type="email" placeholder="Email" className="hover:border-b-4  hover:border-b-purple-500 rounded-sm "/>
      <input type="password" placeholder="Password" className="hover:border-b-4  hover:border-b-purple-500 rounded-sm "/>
       <button class="bg-purple-300 text-white p-2 rounded-md hover:bg-purple-600 animation-myanime"> 
  Submit
</button>
      </div>
    </div>
    </>
  )
}