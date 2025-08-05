const ReservationSideBar = () => {
	return (
		<aside className="mt-4 p-6 col-span-2 border rounded-xl border-bdr-main">
			<h2 className="mb-5 text-2xl">$200 per night</h2>

			<div className="mb-6 p-4 border border-bdr-main rounded-2xl">
				<label className="mb-2 block font font-bold text-xs">Guests</label>
				<select name="" id="" className="w-full -ml-1 text-2xs">
					<option value="">1</option>
					<option value="">2</option>
					<option value="">3</option>
					<option value="">4</option>
					<option value="">5</option>
				</select>
			</div>
			<button
				className="cursor-pointer rounded-2xl w-full mb-6 py-6 text-center hover:bg-bg-hover-search text-white bg-search-bg transition duration-300 ease-in-out">
					Book
			</button>
			<div className="mb-4 flex justify-between align-middle">
				<p>$200 * 4 nights</p>
				<p>800</p>
			</div>
			<div className="mb-4 flex justify-between align-middle">
				<p>Sleepin fee</p>
				<p>$40</p>
			</div>
			<hr className="thick mb-4"/>
			<div className="mb-4 flex justify-between align-middle">
				<p>Total</p>
				<p>$840</p>
			</div>
			
		</aside>
	)
}

export default ReservationSideBar;
