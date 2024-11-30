export function Input({reference, placeholder}: {placeholder: string; reference?: any}){
    return <div>
        <input placeholder={placeholder} type={"text"} className="m-2 px-4 py-2 border rounded" ref={reference}>
        </input>
    </div>
}