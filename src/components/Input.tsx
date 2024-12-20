export function Input({reference, placeholder}: {placeholder: string; reference?: any}){
    return <div className="w-full max-w-md">
        <input placeholder={placeholder} type={"text"} 
            className="m-2 px-4 py-2 w-full border rounded text-xl" 
            ref={reference} required></input>
    </div>
}

export function TypeDropDown({types, setType}: {types: string, setType: (value: string) => void}){

    function handleClick(event: React.ChangeEvent<HTMLSelectElement>){
        console.log(types);
        console.log('value:', event.target.value);
        setType(event.target.value);
        console.log('ref:',types);
    }
    return <div className="flex justify-center">
        <select name="types" value={types} onChange={handleClick} 
            className="p-2 text-lg font-semibold text-black border rounded-lg">
            <option className="font-semibold text-red-600">Select</option>
            <option className="font-semibold text-red-600" value="youtube">Youtube</option>
            <option className="font-semibold text-red-600" value="twitter">Twitter</option>
        </select>
    </div>
}