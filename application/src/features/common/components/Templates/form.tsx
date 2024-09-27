"use client"; // form.tsx
import { useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { registerRestaurantData } from "../../action";
import {
  HOURS,
  MINUTES,
  REGISTER_RESTAURANT_DATA_SCHEMA,
  RegisterRestaurantDataType,
} from "../../constants";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { Label } from "@/src/shadcn-ui/label";

type Props = {
  label: string;
  name: keyof RegisterRestaurantDataType;
  key?: string;
  defaultValue?: string;
  errorMessages?: string[];
  maxLength?: number;
};

const LabelInput = ({
  name,
  defaultValue,
  label,
  errorMessages,
  key,
  maxLength,
}: Props) => {
  return (
    <div>
      <div className="grid grid-cols-[100px_1fr]">
        <Label className="flex items-center text-text">{label}</Label>
        <Input<RegisterRestaurantDataType>
          name={name}
          defaultValue={defaultValue}
          key={key}
          maxLength={maxLength}
        />
      </div>
      <p className="text-[12px] text-red min-h-[20px] ml-[100px] mt-[5px]">
        {errorMessages}
      </p>
    </div>
  );
};

type SelectProps = Omit<Props, "label" | "maxLength"> & {
  onValueChange: (value: string) => void;
};

type LabelSelectProps = {
  subLabel: string;
  hours: SelectProps;
  minutes: SelectProps;
};

const LabelSelect = ({ hours, minutes, subLabel }: LabelSelectProps) => {
  return (
    <div>
      <div className="grid grid-cols-[70px_1fr_20px_1fr]">
        <Label className="flex items-center text-text">{subLabel}</Label>
        <Select<RegisterRestaurantDataType>
          name={hours.name}
          selectItems={HOURS}
          defaultValue={hours.defaultValue}
          onValueChange={hours.onValueChange}
        />
        <p className="flex items-center justify-center test-test">：</p>
        <Select<RegisterRestaurantDataType>
          name={minutes.name}
          selectItems={MINUTES}
          defaultValue={minutes.defaultValue}
          onValueChange={minutes.onValueChange}
        />
      </div>
      <p className="text-[12px] text-red min-h-[20px] mt-[5px]">
        {minutes.errorMessages || hours.errorMessages}
      </p>
    </div>
  );
};

export const Form = () => {
  const [lastData, action] = useFormState(registerRestaurantData, undefined);
  const [form, fields] = useForm({
    // 前回の送信結果を同期
    lastResult: lastData,
    constraint: getZodConstraint(REGISTER_RESTAURANT_DATA_SCHEMA),
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
      className="md:grid md:grid-rows-[1fr_0.5fr_0.5fr] md:gap-2 flex flex-col gap-2"
      noValidate
    >
      <div className="md:grid md:grid-cols-2 md:gap-10 md:justify-center md:items-center">
        <LabelInput
          label="店名"
          name="name"
          defaultValue={fields.name.initialValue}
          errorMessages={fields.name.errors}
          key={fields.name.key}
        />
        <div className="grid grid-cols-[100px_1fr] gap-2">
          <Label className="flex items-center text-text mb-[20px]">
            営業時間
          </Label>
          <div className="md:grid md:grid-rows-2">
            <LabelSelect
              subLabel="open"
              hours={{
                name: "openTime_hours",
                defaultValue: fields.openTime_hours.initialValue,
                errorMessages: fields.openTime_hours.errors,
                onValueChange: (value) => {
                  form.update({
                    name: "openTime_hours",
                    value,
                  });
                },
              }}
              minutes={{
                name: "openTime_minutes",
                defaultValue: fields.openTime_minutes.initialValue,
                errorMessages: fields.openTime_minutes.errors,
                onValueChange: (value) => {
                  form.update({
                    name: "openTime_minutes",
                    value,
                  });
                },
              }}
            />
            <LabelSelect
              subLabel="close"
              hours={{
                name: "closeTime_hours",
                defaultValue: fields.closeTime_hours.initialValue,
                errorMessages: fields.closeTime_hours.errors,
                onValueChange: (value) => {
                  form.update({
                    name: "closeTime_hours",
                    value,
                  });
                },
              }}
              minutes={{
                name: "closeTime_minutes",
                defaultValue: fields.closeTime_minutes.initialValue,
                errorMessages: fields.closeTime_minutes.errors,
                onValueChange: (value) => {
                  form.update({
                    name: "closeTime_minutes",
                    value,
                  });
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-10">
        <LabelInput
          label="ジャンル"
          name="genre"
          defaultValue={fields.genre.initialValue}
          errorMessages={fields.genre.errors}
          key={fields.genre.key}
        />
        <LabelInput
          label="電話番号"
          name="phoneNumber"
          defaultValue={fields.phoneNumber.initialValue}
          errorMessages={fields.phoneNumber.errors}
          key={fields.phoneNumber.key}
          maxLength={11}
        />
      </div>
      <LabelInput
        label="住所"
        name="address"
        defaultValue={fields.address.initialValue}
        errorMessages={fields.address.errors}
        key={fields.address.key}
      />
      <div>
        <Input<RegisterRestaurantDataType>
          name="image"
          type="file"
          className="md:h-[50vh] h-[25vh]"
        />
        <p className="text-[12px] text-red min-h-[20px] mt-[5px]">
          {fields.image.errors}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Button type="submit" className="w-[200px]">
          登録
        </Button>
      </div>
    </form>
  );
};
