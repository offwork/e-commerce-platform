import Icon from '../icon/Icon';

type ButtonProps = {
  label: string;
  icon?: string;
};

export function Button({ label, icon }: ButtonProps) {
  return (
    <button className="relative flex justify-center items-center space-x-2 bg-slate-100 border border-outer-space-500 rounded-md py-4 px-5">
      {icon && <Icon name={icon} color="#475569" size={24} />}
      <span className="text-outer-space">{label}</span>
    </button>
  );
}

export default Button;
