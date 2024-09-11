import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function SelectFoods() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select food" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Food</SelectLabel>
          <SelectItem value="Fruits">Fruits</SelectItem>
          <SelectItem value="Pizza">Pizza</SelectItem>
          <SelectItem value="Donuts">Donuts</SelectItem>
          <SelectItem value="Wings">Wings</SelectItem>
          <SelectItem value="Special">Special*</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectFoods
