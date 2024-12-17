export function Input({reference, placeholder}: {placeholder: string; reference?: any}){
    return <div className="w-full max-w-md">
        <input placeholder={placeholder} type={"text"} className="m-2 px-4 py-2 w-full border rounded text-xl" ref={reference}></input>
    </div>
}