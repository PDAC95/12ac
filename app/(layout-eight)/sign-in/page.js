// import SignInForm from "@/components/auth/SignInForm";
import dynamic from "next/dynamic";
const SignInForm = dynamic(() => import("@/components/auth/SignInForm"), { ssr: false });

function SignInPage() {
	return <SignInForm />;
}

export default SignInPage;
