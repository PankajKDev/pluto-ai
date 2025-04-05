import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";

import { Check, X } from "lucide-react";

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  pricing,
  description,
  content,
}) => {
  return (
    <Card className="w-[80%] md:w-[400px] relative  h-[500px] ">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-md font-bold">{pricing}</h2>
        <ul className="list-none mt-5">
          {content.map((item, index) => (
            <li className="flex gap-1 text-sm text-foreground" key={index}>
              {item.isAvailable ? <Check color="purple" /> : <X color="red" />}
              {item.textContent}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter></CardFooter>
      <div className="w-full h-16 flex justify-center items-center absolute bottom-0">
        <Button size="xl" variant="default" className="">
          Active
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
