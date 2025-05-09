import type { Dispatch, SetStateAction } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import Image from "next/image"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { buttonVariants } from "./ui/button"

const LoginModal = ({ isOpen, setIsOpen }: {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <DialogContent className="absolute z-[99999999] bg-zinc-50">
                <DialogHeader>
                    <div className="relative mx-auto w-24 h-24 mb-2">
                        <Image src="/figure-3.png" alt="geisha image" className="object-contain" fill />
                    </div>
                    <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
                        Log in to Continue
                    </DialogTitle>
                    <DialogDescription className="text-base text-center py-2">
                        <span className="font-medium text-zinc-900">
                            Don't Worry! Your Configuration is Saved!
                        </span>{" "}
                        Please login or create an account to complete your purchase.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
                    <LoginLink className={buttonVariants({variant: "outline"})}>Login</LoginLink>
                    <RegisterLink className={buttonVariants({variant: "default"})}>Sign Up</RegisterLink>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal