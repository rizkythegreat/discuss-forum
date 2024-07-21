import React from 'react'
import RegisterForm from '../components/RegisterForm'

function RegisterPage() {
    return (
        <main className="flex flex-col items-center justify-between p-10 sm:p-24">
            <h2 className="scroll-m-20 mb-6 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Forum Diskusi
            </h2>
            <RegisterForm />
        </main>
    )
}

export default RegisterPage