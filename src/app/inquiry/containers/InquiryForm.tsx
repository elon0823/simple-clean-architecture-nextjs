"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/atoms/Input"
import { Textarea } from "@/components/atoms/TextArea"
import { BasicButton } from "@/components/atoms/Button"
import { FormField } from "@/components/molecules/FormField"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/molecules/Card"
import {useCreateInquiry} from "@/actions/inquiries";

// 폼 유효성 검사 스키마 정의
const inquiryFormSchema = z.object({
  title: z
    .string()
    .min(2, { message: "제목은 최소 2글자 이상이어야 합니다." })
    .max(100, { message: "제목은 최대 100글자까지 가능합니다." }),
  contents: z
    .string()
    .min(10, { message: "내용은 최소 10글자 이상이어야 합니다." })
    .max(1000, { message: "내용은 최대 1000글자까지 가능합니다." }),
})

type ContactFormValues = z.infer<typeof inquiryFormSchema>

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const mutation = useCreateInquiry();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      title: "",
      contents: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)

    try {
      console.log("Form submitted:", data)
      await mutation.mutateAsync({
        title: data.title,
        contents: data.contents,
      });

      setSubmitStatus("success")
      reset() // 폼 초기화

      // 3초 후 상태 초기화
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>문의하기</CardTitle>
        <CardDescription>궁금한 점이나 의견이 있으시면 아래 양식을 작성해 주세요.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <FormField id="title" label="제목" error={errors.title?.message}>
            <Input id="title" placeholder="문의 제목을 입력해주세요" {...register("title")} />
          </FormField>

          <FormField id="content" label="내용" error={errors.contents?.message}>
            <Textarea
              id="content"
              placeholder="문의 내용을 자세히 입력해주세요"
              className="min-h-[150px]"
              {...register("contents")}
            />
          </FormField>

          {submitStatus === "success" && (
            <div className="p-3 rounded-md bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 rounded-md bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
              문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          <BasicButton type="button" variant="outline" onClick={() => reset()} disabled={isSubmitting}>
            초기화
          </BasicButton>
          <BasicButton type="submit" disabled={isSubmitting || !!errors.title || !!errors.contents}>
            {isSubmitting ? "제출 중..." : "문의하기"}
          </BasicButton>
        </CardFooter>
      </form>
    </Card>
  )
}

