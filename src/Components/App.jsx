const App = () => (
  
    <div className=' bg-orange-500 h-16 text-white w-full px-8'>
        <div className="flex items-center justify-between">
           <div className="flex"> 
             <img src="src\assets\logo.jpg" alt="logo" className="h-14 w-14 pt-1 rounded-full"/>
           </div> 
            <ul className="space-x-4 flex">
                <li>Home</li>
                <li>Categories</li>
                <li>Contacts</li>
            </ul>
            <div className="">
                <button className="relative flex justify-center items-center bg-white border focus:outline-none
               rounded focus:ring ring-gray-200 h-6">
                    <p className="px-2 text-gray-400">French</p>
                    <span className="border-l p-2 hover:bg-gray-400">
                    <svg className="w-2  h-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="down-arrow"><path d="M22.782 13.8 17 19.582 11.218 13.8a1 1 0 0 0-1.414 1.414L16.29 21.7a.992.992 0 0 0 .71.292.997.997 0 0 0 .71-.292l6.486-6.486a1 1 0 0 0-1.414-1.414z"></path></svg>
                    </span>
                    <div>
                        <ul className="text-left border rounded">
                            <li className="px-4">Arabic</li>
                            <li className="px-4">French</li>
                            <li className="px-4">English</li>
                        </ul>

                    </div>
                </button>
            </div>    
        </div> 
    </div>
)

export default App;

