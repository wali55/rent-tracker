import SingleRenter from "./SingleRenter";

const RenterTable = () => {
     const TABLE_HEAD = [
    "এপার্টমেন্ট",
    "নাম",
    "মোবাইল",
    "বেসিক ভাড়া (টাকা)",
    "সর্বশেষ মাস",
    "সর্বশেষ পেমেন্টের তারিখ",
    "বকেয়া (টাকা)",
    "স্ট্যাটাস",
    "অ্যাকশন",
  ];
  const TABLE_BODY = [
    {
      apartment: "1A",
      name: "Md. Raju",
      mobile: "0170992323",
      baseRent: "6000",
      lastRentMonth: "May",
      lastPaymentDate: "3 June, 2025",
      dueAmount: "8000",
      status: "বকেয়া",
    },
  ];
  return (
    <div className="w-full overflow-x-auto h-[400px] overflow-y-auto">
      <table className="w-full mt-4 bg-neutral-800 rounded-lg overflow-y-scroll">
        <thead className="border-b border-neutral-500">
          <tr className="text-left text-neutral-300 text-sm">
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-3">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {TABLE_BODY.map((body) => (
            <SingleRenter key={body.apartment} body={body} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenterTable;
