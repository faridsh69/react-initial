export type FileUploaderProps = {
  value: string[]
  onChange: (imageUrl: string[]) => void
  label?: string
  max?: number
}
