export type AccordionProps = {
  title: string
  content: React.ReactNode
  isExpanded?: boolean
  onExpand?: (isExpanded: boolean) => void
}
