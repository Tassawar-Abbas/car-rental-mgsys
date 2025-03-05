import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { cn } from '@/lib/utils'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const CitySelect = ({ control, id, label, placeholder, list, setValue }) => {
  return (
    <div>
      <Label htmlFor={id} className='font-semibold text-md'>{label}</Label>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem>

            <Select onValueChange={(val) => {
              field.onChange(val)
              const res = val.split(',')
              const result = [parseFloat(res[0]), parseFloat(res[1])]
              setValue(result)
            }} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {list?.map((item, ind) => (
                  <SelectItem key={ind} value={`${item?.latitude},${item?.longitude}`}>
                    {item.name}
                  </SelectItem>
                ))}

              </SelectContent>
            </Select>

          </FormItem>
        )}
      />
    </div>
  )
}

export default CitySelect