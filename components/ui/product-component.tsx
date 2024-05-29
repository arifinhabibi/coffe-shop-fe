import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ProductComponent = () => {
  return (
    <div className="mx-2 my-2 px-2 py-2">
      <h1 className="font-semibold">Categories</h1>
      <div className="flex items-start justify-between">
        <div className="my-3 flex flex-wrap gap-4">
          <button className="rounded-xl border-2 px-4 py-2 hover:bg-neutral-100">
            All
          </button>
          <button className="rounded-xl border-2 px-4 py-2 hover:bg-neutral-100">
            Foods
          </button>
          <button className="rounded-xl border-2 px-4 py-2 hover:bg-neutral-100">
            Drinks
          </button>
          <button className="rounded-xl border-2 px-4 py-2 hover:bg-neutral-100">
            New
          </button>
          <button className="rounded-xl border-2 px-4 py-2 hover:bg-neutral-100">
            Favorite
          </button>
        </div>
        <div className="flex h-10 w-64 items-center gap-3 rounded-xl bg-neutral-200 pl-4">
          <label htmlFor="find">
            <MagnifyingGlassIcon width={24} className="text-black" />
          </label>
          <input
            type="text"
            id="find"
            className="h-10 w-full rounded-r-xl bg-neutral-200 text-neutral-500 outline-none"
            placeholder="find here"
          />
        </div>
      </div>

      {/* list */}
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-56">
          <Image
            src={
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={200}
            height={200}
            className="h-32 w-56 rounded-t-xl"
            alt="coffe"
          />
          <div className="rounded-b-xl border-2 px-5 py-3">
            <h1 className="text-lg font-semibold">Coffee</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Rp. 10.000
              </p>
              <button className="rounded-xl border-2 px-4 py-2  text-xs hover:bg-neutral-100">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
