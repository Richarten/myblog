import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

type Props = {
	params: {
		slug: string;
	};
};

async function Post({ params: { slug } }: Props) {
	const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

	const post: Post = await client.fetch(query, { slug });

	return;
	<article className="px-10 pb-28">
		<section className="spaye-y-2 border border-[#E3735E] text-white">
			<div className="relative min-h-56 flex flex-col md:flex-row justify-between">
				<div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
					<Image
						className="object-cover object-center mx-auto"
						src={urlFor(post.mainImage).url()}
						alt={post.author.name}
						fill
					/>
				</div>
				<section>
					<div>
						<div>
							<h1 className="text-4xl font-extrabold">{post && post.title}</h1>
							<p>
								{new Date(post._createdAt).toLocaleDateString("en-US", {
									day: "numeric",
									month: "long",
									year: "numeric",
								})}
							</p>
						</div>
					</div>
				</section>
			</div>
		</section>
	</article>;
}

export default Post;
