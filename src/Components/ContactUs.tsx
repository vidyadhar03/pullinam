
export function ContactUs(){
    return <div className="w-parent flex flex-col items-center justify-center text-center">
        <div className="text-xl text-black my-8">Get in Touch</div>
        <div>
            For inquiries, partnerships, or more information about our products and services, please contact us at:
        </div>
        <div className="flex flex-col w-96 mb-12" >
            <input placeholder="Email" className="border rounded-md p-2 my-2 mt-6"></input>
            <input placeholder="Phone" className="border rounded-md p-2 "></input>
            <input placeholder="Address" className="border rounded-md p-2 my-2 h-12"></input>
            <button className="bg-blue-600 rounded-md hover:bg-blue-800 text-white py-1  mt-2">Submit</button>
        </div>
    </div>
}