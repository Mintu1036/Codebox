'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Image from 'next/image'

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid w-full items-center bg-zinc-900 px-4 font-mono text-white">
      <SignUp.Root>
        <SignUp.Step
          name="start"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >

          {/* HEADER */}
          <header className="text-center flex flex-col items-center">
            <Image src={'/logo.png'} alt='logo' width={40} height={40}/>
            <h1 className="mt-3 text-2xl font-bold tracking-wide text-yellow-400 uppercase font-game">
              Create Account
            </h1>
          </header>

          {/* GLOBAL ERROR */}
          <Clerk.GlobalError className="block text-sm text-red-500" />

          <div className="space-y-4">

            {/* EMAIL FIELD */}
            <Clerk.Field name="emailAddress" className="space-y-1">
              <Clerk.Label className="font-bold text-yellow-400 uppercase">
                Email
              </Clerk.Label>

              <Clerk.Input
                type="email"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-white text-white"
              />

              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            {/* PASSWORD FIELD */}
            <Clerk.Field name="password" className="space-y-1">
              <Clerk.Label className="font-bold text-yellow-400 uppercase">
                Password
              </Clerk.Label>

              <Clerk.Input
                type="password"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-white text-white"
              />

              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

          </div>

          {/* SIGN UP BUTTON */}
          <SignUp.Action
            submit
            className="w-full bg-yellow-400 text-black py-2 border-2 border-black font-bold shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none"
          >
            Create Account
          </SignUp.Action>

          {/* BOTTOM LINK */}
          <p className="text-center text-sm text-white">
            Already have an account?{' '}
            <Clerk.Link
              navigate="sign-in"
              className="underline font-bold text-yellow-400"
            >
              Sign In
            </Clerk.Link>
          </p>

        </SignUp.Step>
      </SignUp.Root>
    </div>
  )
}
