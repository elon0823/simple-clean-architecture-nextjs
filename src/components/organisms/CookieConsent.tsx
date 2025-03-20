"use client"

import CookieConsent from "react-cookie-consent"

export function CustomCookieConsent() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="모든 쿠키 허용"
      declineButtonText="필수 쿠키만 허용"
      enableDeclineButton
      cookieName="userCookieConsent"
      style={{
        background: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        borderTop: "1px solid hsl(var(--border))",
        padding: "1rem",
        alignItems: "center",
        zIndex: 9999,
      }}
      buttonStyle={{
        background: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))",
        fontSize: "14px",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "hsl(var(--foreground))",
        fontSize: "14px",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem",
        border: "1px solid hsl(var(--border))",
      }}
      expires={150}
      onAccept={() => {
        // 모든 쿠키 허용 시 실행할 코드
        console.log("모든 쿠키가 허용되었습니다.")
      }}
      onDecline={() => {
        // 필수 쿠키만 허용 시 실행할 코드
        console.log("필수 쿠키만 허용되었습니다.")
      }}
    >
      <span className="text-sm">
        저희 웹사이트는 최상의 경험을 제공하기 위해 쿠키를 사용합니다. 쿠키 사용에 대한 동의를 부탁드립니다.{" "}
        <a href="/privacy-policy" className="underline">
          개인정보처리방침
        </a>{" "}
        에서 자세한 내용을 확인하세요.
      </span>
    </CookieConsent>
  )
}

