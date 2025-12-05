'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'

export default function SignInPage() {
  return (
    <div className="min-h-screen grid w-full items-center bg-zinc-100 px-4 font-mono text-sm">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="mx-auto w-full sm:w-96 space-y-6 bg-white px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          {/* HEADER */}
          <header className="text-center flex flex-col items-center">
            <Image src={'/logo.png'} alt='logo' width={40} height={40}/>
            <h1 className="mt-3 text-base font-bold tracking-wide text-black uppercase">
              SIGN IN TO CLOVER
            </h1>
          </header>

          {/* GLOBAL ERRORS */}
          <Clerk.GlobalError className="block text-sm text-red-500" />

          {/* GOOGLE LOGIN BUTTON */}
          <Clerk.Connection
            name="google"
            className="flex w-full items-center justify-center gap-3 px-4 py-2 bg-yellow-400 text-black border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none font-bold"
          >
            Login with Google
          </Clerk.Connection>

          {/* EMAIL + PASSWORD */}
          <div className="space-y-4">
            {/* EMAIL */}
            <Clerk.Field name="identifier" className="space-y-1">
              <Clerk.Label className="text-black font-bold uppercase text-xs">
                EMAIL
              </Clerk.Label>
              <Clerk.Input
                type="email"
                className="w-full border-2 border-black px-3 py-2 bg-gray-300 placeholder-white text-white"
                placeholder="example@gmail.com"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            {/* PASSWORD */}
            <Clerk.Field name="password" className="space-y-1">
              <Clerk.Label className="text-black font-bold uppercase text-xs">
                PASSWORD
              </Clerk.Label>
              <Clerk.Input
                type="password"
                className="w-full border-2 border-black px-3 py-2 bg-gray-300 placeholder-white text-white"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>
          </div>

          {/* SIGN IN BUTTON */}
          <SignIn.Action
            submit
            className="w-full bg-yellow-400 text-black border-2 border-black py-2 mt-2 font-bold shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none"
          >
            SIGN IN
          </SignIn.Action>

          {/* FOOTER */}
          <p className="text-center text-sm text-black">
            No account?{' '}
            <Clerk.Link navigate="sign-up" className="underline font-bold text-black">
              Create an account
            </Clerk.Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
