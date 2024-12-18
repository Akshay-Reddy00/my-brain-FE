export function NavTop(){
    const userName = localStorage.getItem('userName');
    return <div className="text-black flex items-center justify-start text-2xl font-bold top-0 w-full h-20 fixed border-b">
        <div className="m-2 p-2 rounded-md flex">
            <p className="">Welcome&nbsp;</p> 
            <p className="text-blue-600">{userName}</p>
        </div>
    </div>
}