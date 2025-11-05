import dynamic from "next/dynamic";
const ResetForm = dynamic(() => import("@/components/auth/ResetForm"), { ssr: false });

function ResetPasswordPage() {
	return <ResetForm />;
}

export default ResetPasswordPage;
