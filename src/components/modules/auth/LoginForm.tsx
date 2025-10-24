"use client"

import InputField from "@/components/common/InputField"
import PrimaryButton from "@/components/common/PrimaryButton"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Lock, Mail } from "lucide-react"
import { useForm } from "react-hook-form"

const LoginForm = () => {

    const { register } = useForm()

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                    <PrimaryButton
                        type="button" variant="link" title="Sign Up" href="/registration"                    />
                </CardAction>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-2">
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        register={register}
                        isRequired={true}
                        icon={<Mail size={20} />}
                        label="Email"
                    />
                    <InputField
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        register={register}
                        isRequired={true}
                        icon={<Lock size={20} />} label="Password"
                    />
                    <PrimaryButton
                        type="submit" title="Login" isFullWidth={true}
                    />
                </form>
            </CardContent>
        </Card>
    )
}

export default LoginForm