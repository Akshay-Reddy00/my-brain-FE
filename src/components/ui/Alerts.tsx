export function AlertText({ display }) {
    return <div className="font-medium text-red-600 rounded-lg">
        <span>{display}</span>
    </div>
}

export function AlertBar({ display }) {
    return <div className="p-2 mb-2 font-medium text-red-600 rounded-lg bg-red-50">
    <span className="flex justify-start ">{display}</span>
</div>
}