import PropertyList from "../components/properties/PropertyLIst";
const MyPropertiesPage = () => {

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My properties</h1>

            <div className="">
                <PropertyList />
            </div>
        </main>
    )
}

export default MyPropertiesPage;