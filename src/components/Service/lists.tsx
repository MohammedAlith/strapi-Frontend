export default function ServiceLists(){
    return(
        <div className="m-4 mb-0 md:m-8">
            <div className="rounded-t-lg">
                 <img src="https://sandbox.elemisthemes.com/assets/img/photos/about5@2x.jpg" className="rounded-t-lg"/>
            </div>
           <div 
style={{ backgroundImage: `url("https://sandbox.elemisthemes.com/assets/img/photos/bg3.jpg")` }}
 className="     bg-cover bg-center 
                  grid grid-cols-2  gap-6 p-10   text-center text-white rounded-b-lg ">
  <div className="flex flex-col gap-1 ">
    <h1 className="text-3xl font-bold ">7518</h1>
    <p className=" text-md">Completed Projects</p>
  </div>
  <div className="flex flex-col gap-1">
    <h1 className="text-3xl font-bold">5472</h1>
    <p className=" text-md">Satisfied Customers</p>
  </div>
  <div className="flex flex-col gap-1">
    <h1 className="text-3xl font-bold">2184</h1>
    <p className=" text-md">Expert Employees</p>
  </div>
  <div className="flex flex-col gap-1">
    <h1 className="text-3xl font-bold ">4523</h1>
    <p className=" text-md">Awards Won</p>
  </div>
</div>

           
            
        </div>
    )
}