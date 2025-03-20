export type InquiryStatus = 'PENDING' | 'REPLIED' | 'CLOSED'
export type Inquiry = {
  id: number
  title: string
  contents: string
  author: string
  createdAt: Date;
  status: InquiryStatus;
}
