export default function head(){
    return(
          <div className="relative bg-blue-50 w-screen h-[450px] 
                transform -skew-y-12 md:-skew-y-6 lg:-skew-y-4 origin-bottom-left">
 
  <div className="flex flex-col justify-center items-center pt-22 md:pt-21 pb-36 px-2 md:p-36 gap-5 transform skew-y-12 md:skew-y-6 lg:skew-y-4">
    <h1 className="text-4xl text-gray-900 font-bold">Our Services</h1>
    <p className="text-center text-xl text-gray-500 leading-8">
      We are a creative company that focuses on establishing{" "}
      <span className="relative inline-block z-10">
        long-term relationships
        <span className="absolute left-0 bottom-0 w-full h-2 bg-blue-100 rounded-full"></span>
      </span>{" "}
      with customers.
    </p>
  </div>
</div>

    )
  
}