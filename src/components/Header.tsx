


export default function Header() {


    return (
        //Justify between will be responsible to separate all the elements in the header 
        <nav className="bg-blue-gray-200 flex justify-center place-items-center h-20 p-4  shadow-md relative">
            <img src="/logo.png" width={100} height={100} alt="image" className=" absolute left-0 justify-center 
            " />
            <p className='text-yellow-50 ml-4  font-mono font-bold   text-3xl '>My.Todo</p>
            <p className='text-yellow-50 italic font-bold   text-3xl hidden 
             md:block'>- What will you do today?</p>
        </nav>
    )
}