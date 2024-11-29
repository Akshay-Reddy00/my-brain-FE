export function Input({onChange, placeholder}: {placeholder: string; onChange?: () => void}){
    return <div>
        <input placeholder={placeholder} type={"text"} className="m-2 px-4 py-2 border rounded" onChange={onChange}>
        </input>
    </div>
}