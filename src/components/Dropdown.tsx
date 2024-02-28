import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type DropdownProps = {
  value?: string
  onChangeHandler?: () => void
  selectList: String[],
  selectType: String
}

function Dropdown({ selectList, selectType }: DropdownProps) {
  return (
    <Select>
      <SelectTrigger className="w-full bg-grey-50 h-[54px] placeholder:text-grey-500  p-regular-16 px-5 py-3  focus-visible:ring-transparent focus:ring-transparent">
        <SelectValue placeholder={selectType} />
      </SelectTrigger>
      <SelectContent>
        {selectList.length > 0 && selectList.map((select, index) => (
          <SelectItem key={index} value={select.toString()} className="select-item p-regular-14">
            {select}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default Dropdown