function Banner() {
	return (
		<div className="flex flex-col lg:flex-row lg: space-x-5 justify-between font-bold [x-10 py-5 pb-10">
			<div>
				<h1 className="text-7xl">My Girlfriend's Cooking</h1>
				<h2 className="mt-5 md:mt-0">
					You found{"  "}
					<span className="underline decoration-4 decoration-[#E3735E]">
						Every Foodie's
					</span>{" "}
					3rd favorite blog in the foodiverse!
				</h2>
			</div>
			<p className="mt-5 md:mt-2 text-gray-400 max-2-sm">
				New posts every eventually | Classic recipies | Food for thought
			</p>
		</div>
	);
}

export default Banner;
