import { CrossIcon } from "../../icons/CrossIcon"

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

export function SuccessAlertDismiss({ alert }) {
    return <div className="absolute top-4 right-4 p-3 mb-4 text-sm font-medium text-green-600 rounded-lg bg-green-100">
        <div>
            SignUp successful. Please SignIn to continue. 
        </div>
        
    </div>
}