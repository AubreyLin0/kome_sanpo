"use client"; // form.tsx
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { registerRestaurantData } from "../../action";
import { REGISTER_RESTAURANT_DATA_SCHEMA } from "../../constants";
import { RegisterRestaurantDataType } from "../../type";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "@/src/shadcn-ui/label";

type Props = {
  label: string;
  name: keyof RegisterRestaurantDataType;
  defaultValue?: string;
  errorMessages?: string[];
};

const LabelInput = ({ name, defaultValue, label, errorMessages }: Props) => {
  return (
    <div className="grid grid-cols-[100px_1fr]">
      <Label className="flex items-center text-text">{label}</Label>
      <Input<RegisterRestaurantDataType>
        name={name}
        defaultValue={defaultValue}
      />
      <div>{errorMessages}</div>
    </div>
  );
};

export const Form = () => {
  const [lastData, action] = useFormState(registerRestaurantData, undefined);
  const [form, fields] = useForm({
    // 前回の送信結果を同期
    lastResult: lastData,

    // クライアントでバリデーション・ロジックを再利用する
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: REGISTER_RESTAURANT_DATA_SCHEMA,
      });
    },

    // blurイベント発生時にフォームを検証する
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="grid grid-rows-3 gap-6"
      noValidate
    >
      <div className="grid grid-cols-3 gap-10">
        <LabelInput
          label="店名"
          name="name"
          defaultValue={fields.name.initialValue}
          errorMessages={fields.name.errors}
        />
        <LabelInput
          label="開始時間"
          name="openTime"
          defaultValue={fields.openTime.initialValue}
          errorMessages={fields.openTime.errors}
        />
        <LabelInput
          label="終了時間"
          name="closeTime"
          defaultValue={fields.closeTime.initialValue}
          errorMessages={fields.closeTime.errors}
        />
      </div>
      <div className="grid grid-cols-2 gap-10">
        <LabelInput
          label="ジャンル"
          name="genre"
          defaultValue={fields.genre.initialValue}
          errorMessages={fields.genre.errors}
        />
        <LabelInput
          label="電話番号"
          name="phoneNumber"
          defaultValue={fields.phoneNumber.initialValue}
          errorMessages={fields.phoneNumber.errors}
        />
      </div>
      <LabelInput
        label="住所"
        name="address"
        defaultValue={fields.address.initialValue}
        errorMessages={fields.address.errors}
      />
      <Input<RegisterRestaurantDataType>
        name="image"
        type="file"
        className="h-[50vh]"
      />
      <div className="flex justify-center items-center">
        <Button className="w-[200px]">登録</Button>
      </div>
    </form>
  );
};
