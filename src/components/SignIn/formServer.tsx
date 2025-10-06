import FormClient from "./formClient";

interface SignInData {
  id: number;
  title: string;
  desc: string;
  Inputsplaceholder: {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
  };
  button: string;
}

async function getData(): Promise<SignInData> {
  const res = await fetch(
    "https://strapi-backend-alhx.onrender.com/api/sign-in?populate=*",
    { cache: "no-store" } // fetch fresh every request
  );
  const json = await res.json();
  return json.data.Signin;
}

export default async function FormServer() {
  const data = await getData();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white shadow rounded-xl p-14 m-6 flex flex-col gap-3">
        {/* ✅ Server-rendered */}
        <h1 className="text-grey-900 text-2xl font-bold">{data.title}</h1>
        <p className="text-xl text-gray-500 text-start">{data.desc}</p>

        {/* ✅ Client-side form */}
        <FormClient data={data} />
      </div>
    </div>
  );
}
