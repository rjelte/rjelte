export interface TagProps {
  name: string;
  index?: number;
}

export function Tag({ name, index }: TagProps) {
  return (
    <span
      key={index}
      className="relative z-10 rounded-full bg-teal-800 px-3 py-1.5 font-medium text-gray-200 group-hover:bg-teal-700"
    >
      {name}
    </span>
  );
}
