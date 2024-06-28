import Image from "next/image";

import sample_tyahan from "../../../../../public/sample_tyahan.jpeg";

import {
  Card as ShadcnCard,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
} from "@/shadcn-ui/card";
import { Button } from "../Button";

export const Card = () => {
  return (
    <ShadcnCard>
      <Image
        src={sample_tyahan}
        alt="sample_tyahan"
        className="h-full object-cover object-center"
      />
      <div className="w-[320px] px-3">
        <CardHeader>
          <CardTitle>ハンバーガーレストランハンバーガーレストラン</CardTitle>
        </CardHeader>
        <CardContent>
          <Button label="Button" disabled={true} variant="outline" />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </div>
    </ShadcnCard>
  );
};
