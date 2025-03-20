import { MainLayout } from "@/components/templates/MainLayout"
import { InquiryForm } from "./containers/InquiryForm"

export const metadata = {
  title: "문의하기 | PostList",
  description: "궁금한 점이나 의견이 있으시면 문의해주세요.",
}

export default function ContactPage() {
  return (
    <MainLayout title="문의하기" subtitle="궁금한 점이나 의견이 있으시면 아래 양식을 작성해 주세요.">
      <InquiryForm />
    </MainLayout>
  )
}

