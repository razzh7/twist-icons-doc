import { Input } from "@/components/ui/input"

interface SearchBarProps {
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function SearchBar({ className }: SearchBarProps) {
  return (
    <Input className={className} placeholder="Search Icons..." />
  )
}