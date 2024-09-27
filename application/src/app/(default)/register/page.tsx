import { Form } from "@/src/features/common/components/Templates/form";

export default function RegisterRestaurantData() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1000px] w-[90vw] bg-[#fafafa] h-fit md:p-10 px-5 py-10 my-10 rounded-[20px]">
        <h2 className="flex items-center justify-center pb-10 md:text-[30px] text-[25px] font-bold">
          レストランを追加
        </h2>
        <Form />
      </div>
    </div>
  );
}
