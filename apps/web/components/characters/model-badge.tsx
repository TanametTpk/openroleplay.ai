import { Badge } from "@repo/ui/src/components/badge";
import { useQuery } from "convex/react";
import { Package } from "lucide-react";
import { Crystal } from "@repo/ui/src/components/icons";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import useModelData from "../../app/lib/hooks/use-model-data";
import { Tooltip } from "@repo/ui/src/components";

const ModelBadge = ({
  modelName,
  showCredits,
  collapse = true,
}: {
  modelName: string;
  showCredits?: boolean;
  collapse?: boolean;
}) => {
  const model = modelName
    ? modelName
        .replace("accounts/fireworks/models/", "")
        .replace("openrouter/auto", "auto")
    : "gpt-3.5-turbo-1106";
  const modelData = useModelData();
  const price = useQuery(api.crystals.price, { modelName: model });
  const crystalUnit = showCredits && price && (
    <div className="flex gap-[0.5]">
      /<Crystal className="h-4 w-4 p-0.5" />
      {`x ${price}`}
    </div>
  );
  const modelInfo = modelData?.find((item: any) => item.value === model) || {};
  const { src, alt, isNSFW } = modelInfo;

  const tooltipContent = isNSFW
    ? "This model is uncensored. By interacting this model, you confirm you are over the age of 18."
    : modelInfo?.description;

  const badge = (
    <Badge className="group/badge flex w-fit gap-1" variant="model">
      {src ? (
        <Image
          src={src}
          width={32}
          height={32}
          className="h-4 w-4 p-0.5"
          alt={alt}
        />
      ) : isNSFW ? (
        <span className="text-yellow-500">18+</span>
      ) : (
        <Package className="h-4 w-4 p-0.5 text-white" />
      )}
      <span className={collapse ? "hidden group-hover/badge:inline" : ""}>
        {model}
      </span>
      {price ? (
        crystalUnit
      ) : price === 0 ? (
        <span className="text-teal-500">free</span>
      ) : (
        <></>
      )}
    </Badge>
  );

  return tooltipContent ? (
    <Tooltip content={tooltipContent} desktopOnly>
      <Link href={`/?model=${model}`}>{badge}</Link>
    </Tooltip>
  ) : (
    <Link href={`/?model=${model}`}>{badge}</Link>
  );
};

export default ModelBadge;
