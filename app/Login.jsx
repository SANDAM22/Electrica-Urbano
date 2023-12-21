import { ClerkProvider } from '@clerk/nextjs'


function Login(){
    return (
        <ClerkProvider></ClerkProvider>
    )
}

export default Login