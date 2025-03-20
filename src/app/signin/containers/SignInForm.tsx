"use client"

import Link from "next/link"
import {Input} from "@/components/atoms/Input"
import {BasicButton} from "@/components/atoms/Button"
import {Label} from "@/components/atoms/Label"
import {Checkbox} from "@/components/atoms/Checkbox"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/molecules/Card"
import {FormField} from "@/components/molecules/FormField"
import {useForm} from "react-hook-form";
import {useState} from "react";
import {signIn, SignInResponse} from "next-auth/react";
import { useSearchParams } from "next/navigation"

export function SignInForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: "test@test.com",
      password: "password",
    },
  })

  const onSubmit = async (data: { email: string; password: string }) => {
    setIsSubmitting(true)

    try {
      const callbackUrl = searchParams?.get('callbackUrl') || '/';
      const result: SignInResponse | undefined = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: callbackUrl,
      });

      if (result?.status != 200) {
        console.error('로그인에 실패했습니다', result);
        setError("로그인에 실패했습니다");
      } else if (result?.url) {
        const newPathname = new URL(result.url, location.origin).pathname;
        if (location.pathname === newPathname) {
          location.reload();
        } else {
          location.replace(result.url);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("로그인 중 문제가 발생했습니다");
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">로그인</CardTitle>
        <CardDescription className="text-center">이메일과 비밀번호를 입력하여 로그인하세요</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 rounded-md bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          <FormField id="email" label="이메일" error={errors.email?.message}>
            <Input id="email" type="email" placeholder="name@example.com" autoComplete="email" {...register("email")} />
          </FormField>

          <FormField id="password" label="비밀번호" error={errors.password?.message}>
            <Input id="password" type="password" autoComplete="current-password" {...register("password")} />
          </FormField>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" {...register("rememberMe")} />
              <Label htmlFor="remember" className="text-sm font-normal">
                로그인 상태 유지
              </Label>
            </div>
            <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
              비밀번호 찾기
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <BasicButton type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "로그인 중..." : "로그인"}
          </BasicButton>
          <div className="text-center text-sm">
            계정이 없으신가요?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              회원가입
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}

