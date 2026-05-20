import Image from "next/image";
import Link from "next/link";
import { MoreVertical } from "lucide-react";

import type { Post } from "@/content/site";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="border border-[#ededed] bg-white">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="group grid bg-white transition focus:outline-none focus:ring-4 focus:ring-[rgba(198,165,92,0.25)] md:grid-cols-[0.96fr_1fr]"
      >
        <div className="relative aspect-[1.55/1] overflow-hidden bg-[#f5f2ec] md:aspect-auto md:min-h-[315px]">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(max-width: 768px) 94vw, 48vw"
            className={`object-cover transition duration-500 group-hover:scale-[1.02] ${post.image.crop ?? "object-center"}`}
          />
        </div>
        <div className="flex min-h-[315px] flex-col px-8 py-7 lg:px-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative h-8 w-8 overflow-hidden rounded-full bg-[#f8efd8] ring-1 ring-[#ead8ad]">
                <Image
                  src="/generated/blog-golden-eagle-avatar.png"
                  alt="Minimal golden eagle profile avatar."
                  fill
                  sizes="32px"
                  className="object-contain p-0.5"
                />
              </span>
              <div className="text-[12px] leading-tight text-black">
                <p>{post.author}</p>
                <p className="mt-1">{post.readTime}</p>
              </div>
            </div>
            <MoreVertical size={19} aria-hidden="true" className="mt-1 text-black" />
          </div>
          <h2 className="mt-6 font-serif text-[28px] font-normal leading-[1.18] text-black sm:text-[32px]">
            {post.title}
          </h2>
          <p className="mt-5 line-clamp-4 max-w-[470px] text-[15px] leading-7 text-black">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
