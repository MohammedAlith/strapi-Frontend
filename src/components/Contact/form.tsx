export default async function Form() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  let data = null;

  try {
    const res = await fetch(
      `${strapiUrl}/api/contact-page?populate[Form][populate]=*`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    const json = await res.json();
    data = json?.data || null;
  } catch (err) {
    console.error("Fetch failed:", err);
    data = null;
  }

  if (!data) {
    return <p className="text-center py-16">Data not available</p>;
  }

  const placeholders = data.Form.Inputsplaceholder;

  return (
    <div className="flex relative -top-40 md:-top-45 lg:justify-center lg:-top-55">
      <div className="w-full max-w-3xl bg-white rounded-2xl p-4 md:p-10 grid gap-3">
        <h1 className="text-gray-900 text-3xl font-semibold text-center mb-2">
          {data.Form.title}
        </h1>
        <p className="text-center text-gray-500 text-lg">{data.Form.desc}</p>

        <form className="space-y-6 pt-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              placeholder={placeholders.input1}
              type="text"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              placeholder={placeholders.input2}
              type="text"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              placeholder={placeholders.input3}
              type="email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <select
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {placeholders.input4?.[0] &&
                Object.values(placeholders.input4[0]).map((opt:any, idx) => (
                  <option key={idx} value={String(opt)}>
                    {opt}
                  </option>
                ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <textarea
              rows={5}
              placeholder={placeholders.input5}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="grid justify-center gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              {data.Form.Button}
            </button>
            <p className="text-gray-500 opacity-50">{data.Form.mandatory}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
