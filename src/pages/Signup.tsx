import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";

export function Signup() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-lg border min-w-48 p-8">
            <Input placeholder={"username"} />
            <Input placeholder={"password"} />
            <div className="flex justify-center pt-4">
                <Button variant={'primary'} text={'Signup'} size={'md'} fullWidth={true} loading={false}/>
            </div>
        </div>
    </div>
}