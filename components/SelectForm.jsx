import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"
import { cn } from '@/lib/utils'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const SelectForm = ({ control, id, label, placeholder, list }) => {
    return (
        <div className='mb-2'>
            <Label htmlFor={id} className='font-semibold text-md'>{label}</Label>
            <FormField
                control={control}
                name={id}
                render={({ field }) => (
                    <FormItem>

                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {list?.map((item, ind) => (
                                    <SelectItem key={ind} value={`${item}`}>{item}</SelectItem>
                                ))}

                            </SelectContent>
                        </Select>
                        
                    </FormItem>
                )}
            />
        </div>
    )
}

export default SelectForm