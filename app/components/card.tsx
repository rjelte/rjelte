import Link from "next/link";
import { Tag } from "app/components/tag";
import { formatDate } from "utils/dateUtils";

export interface CardProps {
  title: string;
  date: string;
  content?: string;
  href?: string;
  imageUrl?: string;
  tags?: string[];
}

export function Card({
  title,
  content,
  href,
  imageUrl,
  date,
  tags,
}: CardProps) {
  return (
    <article className="flex group max-w-xl flex-col items-start bg-slate-800 text-gray-200 p-4 sm:p-4 rounded-xl hover:bg-slate-700">
      {/* Title */}
      <h3 className="mt-0 text-lg font-semibold leading-6">
        <span className="inset-0" />
        {title}
      </h3>
      {/* Date and Tags */}
      <div className="flex items-center gap-x-4 text-xs mt-4">
        <time dateTime={date}>{formatDate(date, false)}</time>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => <Tag key={index} name={tag} />) ?? null}
        </div>
      </div>

      {/* Image and Description */}
      <div className="relative">
        {imageUrl && <img src={imageUrl} alt={title} className="mt-4" />}
        <p className="mt-5 line-clamp-3 text-sm leading-6">{content}</p>
      </div>
    </article>
  );
}
