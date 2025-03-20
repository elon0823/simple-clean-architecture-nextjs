import { MainLayout } from "@/components/templates/MainLayout";
import { SignInForm } from "./containers/SignInForm";

export const metadata = {
  title: "로그인 | PostList",
  description: "계정에 로그인하여 서비스를 이용하세요.",
}

export default function SignInPage() {
  return (
    <MainLayout hideHeader>
      <div className="flex justify-center py-8 h-full items-center">
        <SignInForm />
      </div>
    </MainLayout>
  )
}

