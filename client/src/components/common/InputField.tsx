import { InputFieldI } from '@/types/common.types';
import { Input } from '../ui/input';


const InputField = ({
    type,
    name,
    label,
    placeholder,
    icon,
    register,
    isRequired,
    error,
    defaultValue,
    isReadOnly,
}: InputFieldI) => {
    return (
        <div className="flex flex-col gap-0.5">
            <label className="text-sm font-medium text-muted-foreground">
                {label}
            </label>
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-[11.2px] text-muted-foreground/50">
                        {icon}
                    </div>
                )}
                <Input
                    type={type}
                    defaultValue={defaultValue && defaultValue}
                    readOnly={isReadOnly && isReadOnly}
                    placeholder={placeholder && placeholder}
                    className={`w-full py-5 rounded-md placeholder:text-muted-foreground/50 ${icon ? 'pl-10' : ''} `}
                    {...register(name, { required: isRequired })}
                />
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
        </div>
    );
};
export default InputField;
