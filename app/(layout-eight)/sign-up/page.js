import dynamic from "next/dynamic";
const SignUpForm = dynamic(() => import("@/components/auth/SignUpForm"), { ssr: false });

function SignUpPage() {
	return <SignUpForm />;
}

export default SignUpPage;
