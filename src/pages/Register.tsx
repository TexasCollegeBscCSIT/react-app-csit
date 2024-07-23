import GuestLayout from "../layouts/GuestLayout";


export default function Register() {
  return (
    <>
      <GuestLayout>
        <div className=" h-screen container mx-auto ">
          <div className="mx-6 grid h-full">
            <div className="w-3/6 bg-black/80 text-white rounded-md border-gray-900 p-8 border mx-auto mt-24 h-fit">
              <h1 className="text-center font-semibold text-xl">Registration</h1>
              <form className="form text-lg">
                <div className="input-box mt-6">
                  <label className="flex w-full text-lg">Full Name</label>
                  <input className="w-full text-black outline-none pl-2 rounded-md" type="text" placeholder="Enter your full name"/>
                </div>
                <div className="input-box mt-2">
                  <label className="flex w-full text-lg">Email Address</label>
                  <input className="w-full text-black outline-none pl-2 rounded-md" type="email" placeholder="Enter your email"/>
                </div>
                <div className="column flex mt-2 ">
                  <div className="input-box w-1/2">
                    <label>Phone Number</label>
                    <input className="text-black outline-none pl-3 rounded-md" type="number" placeholder="Enter phone number"/>
                  </div>
                  <div className="input-box w-1/2">
                    <label className="flex w-full">Birth Date</label>
                    <input className="text-black outline-none pl-3 rounded-md" type="date"/>
                  </div>
                </div>
                {/* gender  */}
                <div className="gender-box mt-2">
                  <h3>Gender</h3>
                  <div className="gender-option flex gap-5">
                    <div className="gender">
                        <input type="radio" id="check" name="gender"/>
                        <label className="ml-1" htmlFor="check-male">Male</label>
                    </div>
                    <div className="gender">
                        <input type="radio" id="check" name="gender"/>
                        <label className="ml-1" htmlFor="check-female">Female</label>
                    </div>
                    <div className="gender">
                        <input type="radio" id="check" name="gender"/>
                        <label className="ml-1" htmlFor="check-other">Other</label>
                    </div>
                  </div>
                </div>
                {/* address  */}
                <div className="address mt-2">
                  <label>Address</label>
                  <div className="column flex gap-5">
                    <div className="input-box">
                      <label className="text-sm">Permanent</label>
                      <input className="w-full text-black outline-none pl-3 rounded-md" type="text" placeholder="Enter permanent address" required/>
                    </div>
                    <div className="input-box">
                      <label className="text-sm">Temporary</label>
                      <input className="w-full text-black outline-none pl-3 rounded-md" type="text" placeholder="Enter temporary address" required/>
                    </div>
                  </div>
                </div>
                {/* submit button */}
                <div className="mt-5">
                  <button className="border-2 px-2 ml-56 rounded-md bg-blue-500">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </GuestLayout>
    </>
  )
}
