import { Form } from "@/src/features/common/components/Templates/form";

export default function RegisterRestaurantData() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1000px] w-[90vw] bg-[#fafafa] h-fit p-10 m-20 rounded-[20px]">
        <h2 className="flex items-center justify-center pb-10 text-[34px] font-bold">
          レストランを追加
        </h2>
        <Form />
      </div>
    </div>
  );
}
