import Image from "next/image";
import urlFor from "../lib/urlFor";

type Props = {
	posts: Post[];
};

function BlogList({ posts }: Props) {
	return (
		<div>
			<hr className="border-[#E3735E] mb-10" />

			<div>
				{posts.map((post) => (
					<div key={post._id} className="flex flex-col group cursor-pointer">
						<div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
							<Image
								className="object-cover object-left lg:object-center"
								src={urlFor(post.mainImage).url()}
								alt={post.author.name}
								fill
							/>
							<div className="absolute bottom-0 2-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
								<div>
									<p className="font-bold">{post.title}</p>
									<p>
										{new Date(post._createdAt).toLocaleDateString("en-US", {
											day: "numeric",
											month: "long",
											year: "numeric",
										})}
									</p>
								</div>
								<div>
									{post.categories.map((category) => (
										<div className="bg-[#E3735E] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
											<p>{category.title}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default BlogList;
