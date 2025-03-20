import { MainLayout } from "@/components/templates/MainLayout";
import {PostGrid} from "./containers/PostGrid";

export default function Home() {

  return (
    <MainLayout title="대시보드" subtitle="대시보드입니다.">
      <PostGrid  />
    </MainLayout>
  )
}

